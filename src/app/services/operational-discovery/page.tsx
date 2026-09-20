import AuditDiscoverySection from "@/components/services/operational-discovery/AuditDiscoverySection";
import ContactCta from "@/components/services/operational-discovery/ContactCta";
import Hero from "@/components/services/operational-discovery/Hero";
import ProblemStatement from "@/components/services/operational-discovery/ProblemStatement";
import WhyAuditFirst from "@/components/services/operational-discovery/WhyAuditFirst";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function OperationalDiscoveryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <AuditDiscoverySection />
        <WhyAuditFirst />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
