import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/Problem-Section";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ProblemSection />
      <Features />
    </main>
  );
}
