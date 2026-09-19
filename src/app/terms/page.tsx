import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/terms/Hero";
import TableOfContents from "@/components/terms/TableOfContents";
import TermsArticle from "@/components/terms/TermsArticle";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <Hero />
        <div className="mx-auto flex max-w-[1440px] gap-[50px] px-6 pt-12 sm:px-10 lg:px-[98px]">
          <TableOfContents />
          <TermsArticle />
        </div>
      </main>
      <Footer />
    </>
  );
}
