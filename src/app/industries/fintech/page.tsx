import ChallengesTabs from "@/components/industries/fintech/ChallengesTabs";
import ContactCta from "@/components/industries/fintech/ContactCta";
import Hero from "@/components/industries/fintech/Hero";
import WhatWeBuild from "@/components/industries/fintech/WhatWeBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FintechPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ChallengesTabs />
        <WhatWeBuild />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
