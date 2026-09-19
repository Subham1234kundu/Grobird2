import ContactCta from "@/components/services/system-integration/ContactCta";
import Hero from "@/components/services/system-integration/Hero";
import HowWeDeliver from "@/components/services/system-integration/HowWeDeliver";
import IntegrationApproaches from "@/components/services/system-integration/IntegrationApproaches";
import ProblemStatement from "@/components/services/system-integration/ProblemStatement";
import WhatWeIntegrate from "@/components/services/system-integration/WhatWeIntegrate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SystemIntegrationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <WhatWeIntegrate />
        <IntegrationApproaches />
        <HowWeDeliver />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
