import ContactCta from "@/components/services/workflow-automation/ContactCta";
import Hero from "@/components/services/workflow-automation/Hero";
import OurApproach from "@/components/services/workflow-automation/OurApproach";
import TheImpact from "@/components/services/workflow-automation/TheImpact";
import WhatSlowsYouDown from "@/components/services/workflow-automation/WhatSlowsYouDown";
import WhatWeAutomate from "@/components/services/workflow-automation/WhatWeAutomate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function WorkflowAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatSlowsYouDown />
        <WhatWeAutomate />
        <TheImpact />
        <OurApproach />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
