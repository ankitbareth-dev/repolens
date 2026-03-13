"use client";

import { motion, type Variants } from "framer-motion";
import BackgroundAssets from "./BackgroundAssets";
import HeroInput from "./HeroInput";
import ProductMockup from "./ProductMockup";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. Visual Assets  */}
      <BackgroundAssets />

      {/* 2. Layout & Content */}
      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] md:leading-[1.05] tracking-tighter text-foreground"
          >
            Understand Any
            <br />
            <span className="gradient-text">Codebase</span> Instantly
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            RepoLens analyzes architecture, maps data flow, and answers your
            questions. Onboard to new projects 10x faster.
          </motion.p>

          {/* CTA Input  */}
          <motion.div
            variants={itemVariants}
            className="mt-8 md:mt-10 w-full max-w-lg mx-auto lg:mx-0"
          >
            <HeroInput />
          </motion.div>
        </div>

        {/* Right Column: Product Mockup */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex items-center justify-center relative mt-4 lg:mt-0"
        >
          <ProductMockup />

          {/* Floating Glow Element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-primary/20 blur-[80px] md:blur-[100px] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
