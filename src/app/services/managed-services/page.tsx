import ContactCta from "@/components/services/managed-services/ContactCta";
import Hero from "@/components/services/managed-services/Hero";
import ServiceModels from "@/components/services/managed-services/ServiceModels";
import WhatsIncluded from "@/components/services/managed-services/WhatsIncluded";
import WhatWeSupport from "@/components/services/managed-services/WhatWeSupport";
import WhyManagedServicesMatter from "@/components/services/managed-services/WhyManagedServicesMatter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ManagedServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatWeSupport />
        <WhatsIncluded />
        <WhyManagedServicesMatter />
        <ServiceModels />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
