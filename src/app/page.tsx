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
      <main className="relative z-0 flex-1 bg-black">
        <Hero />
        <ProblemStatement />
        <Solutions />
        <WhyChooseUs />
        <Blogs />
        <CallToAction />
      </main>
      <Footer fullPageReveal />
    </>
  );
}
