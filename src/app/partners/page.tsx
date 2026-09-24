import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/partners/Hero";
import IndustriesTicker from "@/components/partners/IndustriesTicker";
import WhyPartner from "@/components/partners/WhyPartner";
import WhatWeBuild from "@/components/partners/WhatWeBuild";
import HowWePartner from "@/components/partners/HowWePartner";
import PartnerProgram from "@/components/partners/PartnerProgram";
import ContactCta from "@/components/partners/ContactCta";

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <Hero />
        <IndustriesTicker />
        <WhyPartner />
        <WhatWeBuild />
        <HowWePartner />
        <PartnerProgram />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
