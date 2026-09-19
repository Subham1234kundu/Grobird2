import Blogs from "@/components/Blogs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProblemStatement from "@/components/ProblemStatement";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <Solutions />
        <WhyChooseUs />
        <CallToAction />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
