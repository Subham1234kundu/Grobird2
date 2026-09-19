import AuditDefinition from "@/components/services/operational-discovery/AuditDefinition";
import ContactCta from "@/components/services/operational-discovery/ContactCta";
import DiscoveryProcess from "@/components/services/operational-discovery/DiscoveryProcess";
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
        <AuditDefinition />
        <DiscoveryProcess />
        <WhyAuditFirst />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
