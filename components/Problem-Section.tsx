"use client";

import { motion, type Variants } from "framer-motion";
import { SearchX, FileWarning, Hourglass } from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const problems = [
  {
    icon: SearchX,
    title: "Lost in the Logic",
    description:
      "Hours spent tracing function calls and deciphering complex control flows, only to end up more confused than when you started.",
    color: "red",
  },
  {
    icon: FileWarning,
    title: "Outdated Docs",
    description:
      "The README hasn't been updated in years. Comments lie. You're forced to rely on tribal knowledge or guesswork.",
    color: "amber",
  },
  {
    icon: Hourglass,
    title: "Slow Onboarding",
    description:
      "New developers take weeks to become productive. Valuable time is lost in knowledge transfer instead of building.",
    color: "blue",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* 1. Premium "Dot Grid" Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,hsl(var(--border))_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />

      {/* Radial fade overlay to clean up edges */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
          >
            The Friction
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Development Should Be
            <br />
            <span className="text-muted-foreground">
              Creative, Not Detective Work
            </span>
          </motion.h2>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-[1px] rounded-2xl transition-all duration-500"
            >
              {/* 2. Dynamic Gradient Border & Glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  "bg-gradient-to-br from-primary/20 via-transparent to-transparent",
                )}
                style={{ filter: "blur(8px)" }}
              />

              {/* Card Content Wrapper */}
              <div className="relative h-full bg-card/90 backdrop-blur-xl rounded-2xl p-8 overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors">
                {/* 3. Large Background Number (Visual Anchor) */}
                <div className="absolute -bottom-4 -right-1 text-[120px] font-black leading-none text-foreground/[0.02] group-hover:text-foreground/[0.04] transition-colors select-none">
                  0{index + 1}
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-muted border border-border mb-6 group-hover:bg-background transition-colors">
                    <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
