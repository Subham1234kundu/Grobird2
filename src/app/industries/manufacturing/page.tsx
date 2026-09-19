import ChallengesList from "@/components/industries/manufacturing/ChallengesList";
import ContactCta from "@/components/industries/manufacturing/ContactCta";
import Hero from "@/components/industries/manufacturing/Hero";
import WhatWeBuild from "@/components/industries/manufacturing/WhatWeBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ChallengesList />
        <WhatWeBuild />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
