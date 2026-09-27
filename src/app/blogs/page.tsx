import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/blogs/Hero";
import BlogCollection from "@/components/blogs/BlogCollection";
import { getPublishedPosts } from "@/lib/blog/queries";

export const metadata: Metadata = {
  title: "Insights & Blogs | GroBird",
  description:
    "Operational thinking from GroBird: systems, automation and scaling without headcount.",
};

// Re-fetched at most every 5 minutes; the admin also revalidates on save.
export const revalidate = 300;

export default async function BlogsPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <Hero />
        <BlogCollection posts={posts} />
      </main>
      <Footer />
    </>
  );
}
