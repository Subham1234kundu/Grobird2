import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/case-studies/Hero";
import IndustriesTicker from "@/components/case-studies/IndustriesTicker";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import { getPublishedCaseStudies } from "@/lib/case-studies/queries";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Case Studies | GroBird",
  description:
    "Systems GroBird has designed and built for real operational problems.",
};

export default async function CaseStudiesPage() {
  const studies = await getPublishedCaseStudies();
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <Hero />
        <IndustriesTicker />
        <CaseStudyGrid studies={studies} />
      </main>
      <Footer />
    </>
  );
}
