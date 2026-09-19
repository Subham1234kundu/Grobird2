import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/partners/Hero";
import IndustriesTicker from "@/components/partners/IndustriesTicker";
import WhyPartner from "@/components/partners/WhyPartner";
import WhatWeBuild from "@/components/partners/WhatWeBuild";
import HowWePartner from "@/components/partners/HowWePartner";
import Testimonials from "@/components/partners/Testimonials";
import ContactCta from "@/components/partners/ContactCta";

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IndustriesTicker />
        <WhyPartner />
        <WhatWeBuild />
        <HowWePartner />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
