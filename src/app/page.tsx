import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FounderStory from "@/components/founder-story";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import D2vSection from "@/components/d2v-section";
import ImpactCalculator from "@/components/impact-calculator";
import DonateSection from "@/components/donate-section";
import WhoWeHelp from "@/components/who-we-help";
import WhyFbf from "@/components/why-fbf";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FounderStory />
        <Services />
        <HowItWorks />
        <D2vSection />
        <ImpactCalculator />
        <DonateSection />
        <WhoWeHelp />
        <WhyFbf />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
