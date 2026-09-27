import { notFound } from "next/navigation";
import DeleteButton from "@/components/admin/DeleteButton";
import PostForm from "@/components/admin/PostForm";
import { PageHeader } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import type { Post } from "@/lib/blog/types";
import { deletePost } from "../actions";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { supabase } = await requireUser();

  const { data } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const post = data as Post;

  return (
    <>
      <PageHeader
        title="Edit post"
        description={post.published ? "Changes go live on save." : "This post is a draft."}
        action={
          <DeleteButton
            title="Delete this post?"
            body={`"${post.title}" will be removed from the site. This cannot be undone.`}
            onConfirm={deletePost.bind(null, post.id)}
          />
        }
      />
      <PostForm post={post} />
    </>
  );
}
