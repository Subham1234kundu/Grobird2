import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import IndustriesTicker from "@/components/about/IndustriesTicker";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import OurTeam from "@/components/about/OurTeam";
import ContactForm from "@/components/about/ContactForm";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <IndustriesTicker />
        <WhatWeBelieve />
        <OurTeam />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
