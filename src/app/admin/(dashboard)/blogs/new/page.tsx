import PostForm from "@/components/admin/PostForm";
import { PageHeader } from "@/components/admin/ui";

export default function NewPostPage() {
  return (
    <>
      <PageHeader title="New post" description="Write in Markdown; use ## headings for sections." />
      <PostForm />
    </>
  );
}
