import ChallengesTabs from "@/components/industries/logistics/ChallengesTabs";
import ContactCta from "@/components/industries/logistics/ContactCta";
import Hero from "@/components/industries/logistics/Hero";
import WhatWeBuild from "@/components/industries/logistics/WhatWeBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LogisticsPage() {
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
