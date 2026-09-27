import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { Alert, Badge, Button, ButtonLink, Card, EmptyState, PageHeader, inputClass } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import { formatPostDate, type Post } from "@/lib/blog/types";
import { deletePost, setPublished } from "./actions";

type Search = { q?: string; status?: string; saved?: string; deleted?: string };

export default async function BlogsAdminPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { supabase } = await requireUser();
  const { q = "", status = "all", saved, deleted } = await searchParams;

  let query = supabase
    .from("posts")
    .select("id,title,slug,category,featured,published,published_at,updated_at,cover_image_url")
    .order("updated_at", { ascending: false });
  if (q) query = query.ilike("title", `%${q}%`);
  if (status === "published") query = query.eq("published", true);
  if (status === "draft") query = query.eq("published", false);

  const { data, error } = await query;
  const posts = (data ?? []) as Post[];

  return (
    <>
      <PageHeader
        title="Blogs"
        description="Articles shown on the public blog and the home page."
        action={<ButtonLink href="/admin/blogs/new">+ New post</ButtonLink>}
      />

      {saved && <div className="mb-5"><Alert tone="success">Post saved. The public pages have been refreshed.</Alert></div>}
      {deleted && <div className="mb-5"><Alert tone="success">Post deleted.</Alert></div>}
      {error && <div className="mb-5"><Alert tone="error">{error.message}</Alert></div>}

      <Card>
        <form className="flex flex-col gap-3 border-b border-[#eeeef0] p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Image
              src="/Admin/dashboardImage/search.png"
              alt=""
              width={18}
              height={18}
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 opacity-70"
              aria-hidden
            />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search by title"
              className={`${inputClass} pl-10`}
            />
          </div>
          <select name="status" defaultValue={status} className={`${inputClass} sm:w-44`}>
            <option value="all">All posts</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </select>
          <Button type="submit" variant="secondary">Filter</Button>
        </form>

        {posts.length === 0 ? (
          <EmptyState
            title={q || status !== "all" ? "No posts match" : "No posts yet"}
            body={q || status !== "all" ? "Try a different search or filter." : "Write your first article. Published posts appear on the site immediately."}
            action={!q && status === "all" ? <ButtonLink href="/admin/blogs/new">Write a post</ButtonLink> : undefined}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-[#fafafa] text-[11px] tracking-[0.5px] text-[#8a8a92] uppercase">
                <tr>
                  <th className="px-5 py-3 font-medium">Title</th>
                  <th className="px-3 py-3 font-medium">Category</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeef0]">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-[#fafafa]">
                    <td className="max-w-[420px] px-5 py-3">
                      <Link href={`/admin/blogs/${post.id}`} className="block truncate font-medium text-[#111] hover:text-[#c9531a]">
                        {post.title}
                      </Link>
                      <p className="truncate font-mono text-[11px] text-[#a0a0a5]">/blogs/{post.slug}</p>
                    </td>
                    <td className="px-3 py-3 text-[#5b5b63]">{post.category}</td>
                    <td className="px-3 py-3">
                      <span className="flex flex-wrap gap-1.5">
                        <Badge tone={post.published ? "success" : "warning"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        {post.featured && <Badge tone="brand">Featured</Badge>}
                      </span>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-[#5b5b63]">
                      {formatPostDate(post.published_at) || "—"}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {post.published && (
                          <Link
                            href={`/blogs/${post.slug}`}
                            target="_blank"
                            title="View on site"
                            className="rounded-md px-2 py-1 text-[12px] font-medium text-[#5b5b63] hover:bg-[#f0f0f2]"
                          >
                            View
                          </Link>
                        )}
                        <form action={setPublished.bind(null, post.id, !post.published)}>
                          <button
                            type="submit"
                            className="rounded-md px-2 py-1 text-[12px] font-medium text-[#5b5b63] hover:bg-[#f0f0f2]"
                          >
                            {post.published ? "Unpublish" : "Publish"}
                          </button>
                        </form>
                        <Link
                          href={`/admin/blogs/${post.id}`}
                          title="Edit"
                          aria-label="Edit"
                          className="rounded-md p-1.5 opacity-60 hover:bg-[#f0f0f2] hover:opacity-100"
                        >
                          <Image src="/Admin/dashboardImage/edit.png" alt="" width={18} height={18} aria-hidden />
                        </Link>
                        <DeleteButton
                          compact
                          title="Delete this post?"
                          body={`"${post.title}" will be removed from the site. This cannot be undone.`}
                          onConfirm={deletePost.bind(null, post.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </>
  );
}
