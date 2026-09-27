"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/admin/auth";
import { slugify } from "@/lib/blog/markdown";
import { POST_CATEGORIES } from "@/lib/blog/types";

export type PostFormState = { error?: string };

const BUCKET = "blog-images";
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

/** Every public page that shows blog content. */
function revalidateBlog(slugs: string[]) {
  revalidatePath("/");
  revalidatePath("/blogs");
  for (const slug of slugs) revalidatePath(`/blogs/${slug}`);
}

export async function savePost(
  _prev: PostFormState,
  formData: FormData,
): Promise<PostFormState> {
  const { supabase } = await requireUser();

  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const featured = formData.get("featured") === "on";
  const published = formData.get("published") === "on";
  const publishedAtRaw = String(formData.get("published_at") ?? "").trim();
  const removeCover = formData.get("remove_cover") === "on";
  const previousSlug = String(formData.get("previous_slug") ?? "");
  const cover = formData.get("cover");

  if (!title) return { error: "Give the post a title." };
  const slug = slugify(rawSlug || title);
  if (!slug) return { error: "The slug is empty. Use letters or numbers." };
  if (!POST_CATEGORIES.includes(category)) {
    return { error: "Pick a category." };
  }
  if (!content.trim()) return { error: "The post has no content." };

  // Slug must be unique across other posts.
  const clash = await supabase
    .from("posts")
    .select("id")
    .eq("slug", slug)
    .neq("id", id || "00000000-0000-0000-0000-000000000000")
    .maybeSingle();
  if (clash.error) return { error: clash.error.message };
  if (clash.data) return { error: `Another post already uses the slug "${slug}".` };

  let cover_image_url: string | null | undefined = removeCover ? null : undefined;

  if (cover instanceof File && cover.size > 0) {
    if (!cover.type.startsWith("image/")) {
      return { error: "The cover must be an image file." };
    }
    if (cover.size > MAX_IMAGE_BYTES) {
      return { error: "The cover image must be under 5 MB." };
    }
    const ext = (cover.name.split(".").pop() || "jpg").toLowerCase();
    const path = `${slug}-${Date.now()}.${ext}`;
    const upload = await supabase.storage
      .from(BUCKET)
      .upload(path, cover, { contentType: cover.type, upsert: true });
    if (upload.error) {
      return { error: `Image upload failed: ${upload.error.message}` };
    }
    cover_image_url = supabase.storage.from(BUCKET).getPublicUrl(path).data
      .publicUrl;
  }

  const published_at = published
    ? publishedAtRaw
      ? new Date(publishedAtRaw).toISOString()
      : new Date().toISOString()
    : publishedAtRaw
      ? new Date(publishedAtRaw).toISOString()
      : null;

  const row = {
    title,
    slug,
    category,
    excerpt: excerpt || null,
    content,
    featured,
    published,
    published_at,
    ...(cover_image_url !== undefined ? { cover_image_url } : {}),
  };

  if (featured) {
    // Only one post headlines the collection at a time.
    await supabase
      .from("posts")
      .update({ featured: false })
      .neq("id", id || "00000000-0000-0000-0000-000000000000");
  }

  const result = id
    ? await supabase.from("posts").update(row).eq("id", id)
    : await supabase.from("posts").insert(row);

  if (result.error) return { error: result.error.message };

  revalidateBlog([slug, previousSlug].filter(Boolean));
  redirect("/admin/blogs?saved=1");
}

export async function setPublished(id: string, published: boolean) {
  const { supabase } = await requireUser();
  const { data } = await supabase
    .from("posts")
    .select("slug,published_at")
    .eq("id", id)
    .maybeSingle();

  await supabase
    .from("posts")
    .update({
      published,
      published_at:
        published && !data?.published_at
          ? new Date().toISOString()
          : data?.published_at ?? null,
    })
    .eq("id", id);

  revalidateBlog(data?.slug ? [data.slug] : []);
  revalidatePath("/admin/blogs");
}

export async function deletePost(id: string) {
  const { supabase } = await requireUser();
  const { data } = await supabase
    .from("posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  await supabase.from("posts").delete().eq("id", id);

  revalidateBlog(data?.slug ? [data.slug] : []);
  redirect("/admin/blogs?deleted=1");
}
