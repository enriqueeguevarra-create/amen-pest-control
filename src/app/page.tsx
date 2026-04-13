import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <TrustSection />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </>
  );
}
