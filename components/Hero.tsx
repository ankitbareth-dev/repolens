"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const [repoUrl, setRepoUrl] = useState<string>("");

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-24 md:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full z-0 opacity-30" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-muted-foreground font-medium">
            AI-Powered Code Analysis
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          Understand Any Codebase
          <br />
          <span className="gradient-text">In Minutes, Not Days.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          Paste a GitHub URL. RepoLens analyzes architecture, maps data flow,
          and answers your questions instantly. Accelerate your onboarding
          today.
        </motion.p>

        {/* CTA Input Area */}
        <motion.div variants={itemVariants} className="mt-10 w-full max-w-xl">
          <div className="relative flex flex-col sm:flex-row items-center gap-3 p-2 rounded-xl border border-border bg-secondary/30 backdrop-blur-md shadow-lg shadow-black/20">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <input
                type="url"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/owner/repo"
                className="block w-full bg-background/50 rounded-lg pl-11 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent focus:border-primary transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Analyze Repo
            </button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            No credit card required.{" "}
            <span className="text-foreground/80">Free tier:</span> 3 analyses
            per day.
          </p>
        </motion.div>

        {/* Visual Element (Mockup) */}
        <motion.div variants={itemVariants} className="mt-20 w-full max-w-4xl">
          <div className="relative rounded-xl border border-border bg-card shadow-2xl shadow-black/50 overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex-1 text-xs text-muted-foreground font-mono truncate">
                dashboard/repolens
              </div>
            </div>

            {/* Mock Dashboard Content */}
            <div className="aspect-[16/9] w-full bg-background/50 relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),transparent)]" />

              {/* Placeholder Grid */}
              <div className="grid grid-cols-3 gap-4 w-full h-full opacity-60">
                <div className="col-span-1 rounded-lg border border-border bg-secondary/30 p-4 flex flex-col gap-2">
                  <div className="w-full h-4 rounded bg-muted/50" />
                  <div className="w-3/4 h-4 rounded bg-muted/50" />
                  <div className="w-1/2 h-4 rounded bg-muted/50" />
                  <div className="flex-1 mt-4 rounded border border-dashed border-border" />
                </div>
                <div className="col-span-2 rounded-lg border border-border bg-secondary/30 p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="w-1/4 h-6 rounded bg-primary/20" />
                    <div className="w-1/3 h-4 rounded bg-muted/50" />
                  </div>
                  <div className="flex-1 rounded border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                    Architecture Visualization
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect under the card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-primary/30 blur-[80px] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
