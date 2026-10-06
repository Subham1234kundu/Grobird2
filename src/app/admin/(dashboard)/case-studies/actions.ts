"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/admin/auth";
import { CASE_STUDY_INDUSTRIES } from "@/lib/case-studies/types";

export type CaseStudyFormState = { error?: string };
const BUCKET = "case-study-images";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const IMAGE_TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif" };

function refresh() {
  revalidatePath("/case-studies");
  revalidatePath("/case-studies/[id]", "page");
  revalidatePath("/admin/case-studies");
}

export async function saveCaseStudy(_previous: CaseStudyFormState, formData: FormData): Promise<CaseStudyFormState> {
  const { supabase } = await requireUser();
  const get = (key: string) => String(formData.get(key) ?? "").trim();
  const id = get("id");
  const title = get("title");
  const description = get("description");
  const content = get("content");
  if (content.length > 100000) return { error: "Detail content must be under 100,000 characters." };
  const industry = get("industry");
  const tag = get("tag");
  const sort_order = Number(get("sort_order"));
  if (id && !UUID.test(id)) return { error: "Invalid case study." };
  if (!title || title.length > 200) return { error: "Enter a title of up to 200 characters." };
  if (!description || description.length > 2000) return { error: "Enter a description of up to 2,000 characters." };
  if (!CASE_STUDY_INDUSTRIES.some((item) => item === industry)) return { error: "Choose an industry." };
  if (!tag || tag.length > 60) return { error: "Enter a service label of up to 60 characters." };
  if (!Number.isInteger(sort_order) || sort_order < 0 || sort_order > 100000) return { error: "Display order must be a whole number from 0 to 100,000." };

  let cover_image_url = "";
  if (id) {
    const { data, error } = await supabase.from("case_studies").select("cover_image_url").eq("id", id).maybeSingle();
    if (error) return { error: error.message };
    if (!data) return { error: "Case study no longer exists." };
    cover_image_url = data.cover_image_url;
  }
  const cover = formData.get("cover");
  let uploadedPath: string | null = null;
  if (cover instanceof File && cover.size > 0) {
    const extension = IMAGE_TYPES[cover.type];
    if (!extension) return { error: "Upload a JPG, PNG, WebP, or AVIF image." };
    if (cover.size > 5 * 1024 * 1024) return { error: "Image must be under 5 MB." };
    uploadedPath = `${crypto.randomUUID()}.${extension}`;
    const { error } = await supabase.storage.from(BUCKET).upload(uploadedPath, cover, { contentType: cover.type });
    if (error) return { error: `Image upload failed: ${error.message}` };
    cover_image_url = supabase.storage.from(BUCKET).getPublicUrl(uploadedPath).data.publicUrl;
  }
  if (!cover_image_url) return { error: "Upload a cover image." };
  const row = { title, description, content, industry, tag, sort_order, cover_image_url, published: formData.get("published") === "on" };
  const result = id
    ? await supabase.from("case_studies").update(row).eq("id", id).select("id").single()
    : await supabase.from("case_studies").insert(row).select("id").single();
  if (result.error) {
    if (uploadedPath) await supabase.storage.from(BUCKET).remove([uploadedPath]);
    return { error: result.error.message };
  }
  refresh();
  redirect("/admin/case-studies?saved=1");
}

export async function setCaseStudyPublished(id: string, published: boolean) {
  const { supabase } = await requireUser();
  if (!UUID.test(id)) throw new Error("Invalid case study.");
  const { error } = await supabase.from("case_studies").update({ published }).eq("id", id).select("id").single();
  if (error) throw new Error(error.message);
  refresh();
}

export async function deleteCaseStudy(id: string) {
  const { supabase } = await requireUser();
  if (!UUID.test(id)) throw new Error("Invalid case study.");
  const { error } = await supabase.from("case_studies").delete().eq("id", id).select("id").single();
  if (error) throw new Error(error.message);
  refresh();
  redirect("/admin/case-studies?deleted=1");
}
