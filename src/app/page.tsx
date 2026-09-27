import Blogs from "@/components/Blogs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ProblemStatement from "@/components/ProblemStatement";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getPublishedPosts, pickFeatured } from "@/lib/blog/queries";
import { formatPostDate } from "@/lib/blog/types";

export const revalidate = 300;

export default async function Home() {
  const all = await getPublishedPosts();
  const featuredPost = pickFeatured(all);
  const toLanding = (p: (typeof all)[number]) => ({
    title: p.title,
    date: formatPostDate(p.published_at),
    href: `/blogs/${p.slug}`,
  });
  const featured = featuredPost ? toLanding(featuredPost) : undefined;
  const posts = all
    .filter((p) => p.id !== featuredPost?.id)
    .slice(0, 3)
    .map(toLanding);

  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative z-0 flex-1 bg-black">
        <Hero />
        <ProblemStatement />
        <Solutions />
        <WhyChooseUs />
        <Blogs featured={featured} posts={posts.length ? posts : undefined} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
