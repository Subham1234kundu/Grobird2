import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/case-studies/Hero";
import IndustriesTicker from "@/components/case-studies/IndustriesTicker";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies | GroBird",
  description:
    "Systems GroBird has designed and built for real operational problems.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <Hero />
        <IndustriesTicker />
        <CaseStudyGrid />
      </main>
      <Footer />
    </>
  );
}
