import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/blogs/Hero";
import CategoryFilter from "@/components/blogs/CategoryFilter";
import FeaturedPost from "@/components/blogs/FeaturedPost";
import BlogGrid from "@/components/blogs/BlogGrid";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryFilter />
        <FeaturedPost />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
