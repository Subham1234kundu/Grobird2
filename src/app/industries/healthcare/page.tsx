import ChallengesList from "@/components/industries/healthcare/ChallengesList";
import ContactCta from "@/components/industries/healthcare/ContactCta";
import Hero from "@/components/industries/healthcare/Hero";
import WhatWeBuild from "@/components/industries/healthcare/WhatWeBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HealthcarePage() {
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
