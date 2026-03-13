"use client";

import { motion } from "framer-motion";
import ProblemCard from "./ProblemCard";
import { problems } from "./data";
import { containerVariants, itemVariants } from "./animations";

export default function ProblemSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,hsl(var(--muted-foreground)/0.15)_1px,transparent_1px)] bg-[length:24px_24px] dark:bg-[radial-gradient(circle_at_center,hsl(var(--border))_1px,transparent_1px)]" />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm font-mono text-primary mb-3 md:mb-4 tracking-widest uppercase"
          >
            The Friction
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground"
          >
            Understanding{" "}
            <span className="text-muted-foreground">
              Large Codebases Takes Time
            </span>
          </motion.h2>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              problem={problem}
              index={index}
              variants={itemVariants}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
