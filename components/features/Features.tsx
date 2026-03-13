"use client";

import { motion } from "framer-motion";
import { features } from "./data";
import { containerVariants } from "./animations";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            variants={containerVariants} // Re-using or defining specific variants for header
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            One Tool, <span className="gradient-text">Complete Clarity</span>
          </motion.h2>

          <motion.p
            variants={containerVariants}
            className="mt-3 md:mt-4 text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            RepoLens breaks down barriers between you and the code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
