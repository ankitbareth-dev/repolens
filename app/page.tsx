import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ProblemSection from "@/components/Problem-Section";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <Pricing />
    </main>
  );
}
