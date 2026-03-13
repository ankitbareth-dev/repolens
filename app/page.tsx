import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/Pricing";
import ProblemSection from "@/components/Problem-Section";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
