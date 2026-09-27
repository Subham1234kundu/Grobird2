import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHero from "@/components/blogs/post/PostHero";
import CoverIllustration from "@/components/blogs/post/CoverIllustration";
import TableOfContents from "@/components/blogs/post/TableOfContents";
import ArticleBody from "@/components/blogs/post/ArticleBody";
import RelatedPosts from "@/components/blogs/post/RelatedPosts";
import { extractHeadings, markdownExcerpt } from "@/lib/blog/markdown";
import { getPublishedPost, getPublishedPosts } from "@/lib/blog/queries";

export const revalidate = 300;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return { title: "Post not found | GroBird" };
  return {
    title: `${post.title} | GroBird`,
    description: post.excerpt ?? markdownExcerpt(post.content),
    openGraph: post.cover_image_url ? { images: [post.cover_image_url] } : undefined,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  const all = await getPublishedPosts();
  const related = all.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <PostHero post={post} />
        <CoverIllustration src={post.cover_image_url} />
        <div className="mx-auto flex max-w-[1360px] gap-[70px] px-6 py-20 sm:px-10 lg:px-0">
          <TableOfContents items={extractHeadings(post.content)} title={post.title} />
          <ArticleBody content={post.content} />
        </div>
        <RelatedPosts posts={related} />
      </main>
      <Footer />
    </>
  );
}
