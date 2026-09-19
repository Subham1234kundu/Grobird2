import ContactCta from "@/components/services/business-intelligence/ContactCta";
import Hero from "@/components/services/business-intelligence/Hero";
import HowWeDeliver from "@/components/services/business-intelligence/HowWeDeliver";
import ProblemStatement from "@/components/services/business-intelligence/ProblemStatement";
import WhatGoodBIDelivers from "@/components/services/business-intelligence/WhatGoodBIDelivers";
import WhatWeBuild from "@/components/services/business-intelligence/WhatWeBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BusinessIntelligencePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <WhatGoodBIDelivers />
        <WhatWeBuild />
        <HowWeDeliver />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
