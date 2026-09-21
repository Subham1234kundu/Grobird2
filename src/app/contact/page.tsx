import ContactSection from "@/components/contact/ContactSection";
import Hero from "@/components/contact/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | GroBird",
  description:
    "Schedule a conversation with the GroBird team. We'll listen to your challenges, map your constraints, and tell you honestly what would help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
