import ChallengesList from "@/components/industries/lending/ChallengesList";
import ContactCta from "@/components/industries/lending/ContactCta";
import Hero from "@/components/industries/lending/Hero";
import WhatWeBuild from "@/components/industries/lending/WhatWeBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LendingPage() {
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
