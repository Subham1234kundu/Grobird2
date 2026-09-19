import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHero from "@/components/blogs/post/PostHero";
import CoverIllustration from "@/components/blogs/post/CoverIllustration";
import TableOfContents from "@/components/blogs/post/TableOfContents";
import ArticleBody from "@/components/blogs/post/ArticleBody";
import RelatedPosts from "@/components/blogs/post/RelatedPosts";

const KNOWN_SLUG =
  "why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== KNOWN_SLUG) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <PostHero />
        <CoverIllustration />
        <div className="mx-auto flex max-w-[1360px] gap-[70px] px-6 py-20 sm:px-10 lg:px-0">
          <TableOfContents />
          <ArticleBody />
        </div>
        <RelatedPosts />
      </main>
      <Footer />
    </>
  );
}
