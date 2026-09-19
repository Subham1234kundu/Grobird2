import ContactCta from "@/components/services/custom-software/ContactCta";
import Hero from "@/components/services/custom-software/Hero";
import WhatWeBuild from "@/components/services/custom-software/WhatWeBuild";
import WhenItMakesSense from "@/components/services/custom-software/WhenItMakesSense";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CustomSoftwarePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhenItMakesSense />
        <WhatWeBuild />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
