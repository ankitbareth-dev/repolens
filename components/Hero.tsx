"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

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
  const [repoUrl, setRepoUrl] = useState<string>("");

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Aurora Background + Grain Texture */}
      <div className="absolute inset-0 bg-aurora z-0" />
      <div className="absolute inset-0 grain-overlay z-0" />

      {/* Radial Gradient "Spotlight" */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1000px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] z-0" />

      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] md:leading-[1.05] tracking-tighter text-foreground"
          >
            Understand Any
            <br />
            <span className="gradient-text">Codebase</span> Instantly
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            RepoLens analyzes architecture, maps data flow, and answers your
            questions. Onboard to new projects 10x faster.
          </motion.p>

          {/* CTA Input Group */}
          <motion.div
            variants={itemVariants}
            className="mt-8 md:mt-10 w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row w-full items-center gap-2">
              <div className="relative w-full">
                {/*  Github icon with inline SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <Input
                  type="url"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="github.com/owner/repo"
                  className="h-12 md:h-14 pl-10 text-sm md:text-base bg-secondary/30 border-border focus-visible:ring-1 focus-visible:ring-primary transition-all"
                />
              </div>
              <Button
                size="lg"
                className="h-12 md:h-14 px-8 w-full sm:w-auto text-sm md:text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Analyze
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Product UI Mockup */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex items-center justify-center relative mt-4 lg:mt-0"
        >
          {/* Mockup Container */}
          <div className="relative w-full max-w-[550px] md:max-w-[600px] rounded-xl md:rounded-2xl border border-border bg-card/80 backdrop-blur-3xl shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80 border border-red-400/50" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80 border border-yellow-400/50" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 border border-green-400/50" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-mono">
                <span className="px-1.5 md:px-2 py-0.5 rounded bg-muted">
                  main
                </span>
                <span className="hidden sm:inline">repo-lens-dashboard</span>
              </div>
              <div className="w-12 md:w-16" />
            </div>

            {/* Mockup Content - Responsive Grid */}
            <div className="grid grid-cols-5 min-h-[260px] sm:min-h-[300px] md:min-h-[380px]">
              {/* Sidebar - File Tree */}
              <div className="col-span-2 border-r border-border p-2 md:p-4 flex flex-col gap-1 md:gap-2 bg-background/30">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <span className="text-[9px] md:text-[11px] uppercase text-muted-foreground font-bold tracking-widest">
                    Explorer
                  </span>
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="flex flex-col gap-0.5 md:gap-1.5 pt-1 font-mono text-[10px] md:text-xs">
                  <div className="flex items-center gap-1 text-foreground opacity-70">
                    <span className="text-[8px] md:text-[10px]">▼</span> src
                  </div>
                  <div className="flex flex-col gap-0.5 md:gap-1 ml-2 md:ml-3">
                    <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 rounded bg-primary/10 text-primary border-l-2 border-primary">
                      app.tsx
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 text-muted-foreground">
                      utils.ts
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 text-muted-foreground">
                      index.ts
                    </div>
                  </div>
                </div>

                {/* Insights Section */}
                <div className="mt-auto pt-2 md:pt-4 border-t border-border hidden sm:block">
                  <div className="text-[8px] md:text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1 md:mb-2">
                    Insights
                  </div>
                  <div className="h-16 md:h-20 w-full rounded-lg bg-muted/10 border border-dashed border-border flex items-center justify-center text-[8px] md:text-[10px] text-muted-foreground">
                    Graph View
                  </div>
                </div>
              </div>

              {/* Main Content - Visualization */}
              <div className="col-span-3 p-3 md:p-6 flex flex-col gap-2 md:gap-4 relative bg-background/10">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-border"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 md:gap-4">
                  {/* Mock Nodes */}
                  <div className="flex items-center gap-4 md:gap-8">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-mono text-[10px] md:text-xs">
                      A
                    </div>
                    <div className="w-12 md:w-20 h-0.5 bg-border" />
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-mono text-[10px] md:text-xs">
                      B
                    </div>
                  </div>

                  <div className="mt-2 md:mt-4 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-card border border-border shadow-lg w-full max-w-[160px] md:max-w-[200px] text-center">
                    <div className="text-[10px] md:text-xs font-semibold text-foreground">
                      AI Summary
                    </div>
                    <div className="text-[8px] md:text-[10px] text-muted-foreground mt-1 truncate">
                      Component Architecture
                    </div>
                    <div className="w-full bg-muted/20 h-1 rounded mt-1.5 md:mt-2">
                      <div className="w-3/4 bg-primary h-1 rounded animate-pulse" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-mono text-[10px] md:text-xs">
                      C
                    </div>
                    <div className="w-12 md:w-20 h-0.5 bg-border" />
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-mono text-[10px] md:text-xs">
                      D
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glow Element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-primary/20 blur-[80px] md:blur-[100px] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
