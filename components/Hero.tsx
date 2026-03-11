"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ArrowRight, Github } from "lucide-react";

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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[100px] z-0" />

      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full max-w-7xl mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          {/* Badge */}

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter text-foreground"
          >
            Understand Any
            <br />
            <span className="gradient-text">Codebase</span> Instantly
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            RepoLens analyzes architecture, maps data flow, and answers your
            questions. Onboard to new projects 10x faster.
          </motion.p>

          {/* CTA Input Group using shadcn */}
          <motion.div
            variants={itemVariants}
            className="mt-10 w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row w-full items-center gap-2">
              <div className="relative w-full">
                <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="url"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="github.com/owner/repo"
                  className="h-14 pl-10 text-base bg-secondary/30 border-border focus-visible:ring-1 focus-visible:ring-primary transition-all"
                />
              </div>
              <Button
                size="lg"
                className="h-14 px-8 w-full sm:w-auto text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Analyze
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Product UI Mockup */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex items-center justify-center relative"
        >
          {/* Mockup Container */}
          <div className="relative w-full max-w-[600px] rounded-2xl border border-border bg-card/80 backdrop-blur-3xl shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/50" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <span className="px-2 py-0.5 rounded bg-muted">main</span>
                <span>repo-lens-dashboard</span>
              </div>
              <div className="w-16" />
            </div>

            {/* Mockup Content - Split View */}
            <div className="grid grid-cols-5 min-h-[380px]">
              {/* Sidebar - File Tree */}
              <div className="col-span-2 border-r border-border p-4 flex flex-col gap-2 bg-background/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase text-muted-foreground font-bold tracking-widest">
                    Explorer
                  </span>
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="flex flex-col gap-1.5 pt-1 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-foreground opacity-70">
                    <span className="text-[10px]">▼</span> src
                  </div>
                  <div className="flex flex-col gap-1 ml-3">
                    <div className="flex items-center gap-2 p-1.5 rounded bg-primary/10 text-primary border-l-2 border-primary">
                      app.tsx
                    </div>
                    <div className="flex items-center gap-2 p-1.5 text-muted-foreground">
                      utils.ts
                    </div>
                    <div className="flex items-center gap-2 p-1.5 text-muted-foreground">
                      index.ts
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <div className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-2">
                    Insights
                  </div>
                  <div className="h-20 w-full rounded-lg bg-muted/10 border border-dashed border-border flex items-center justify-center text-[10px] text-muted-foreground">
                    Graph View
                  </div>
                </div>
              </div>

              {/* Main Content - Visualization */}
              <div className="col-span-3 p-6 flex flex-col gap-4 relative bg-background/10">
                {/* Mock Graph/Visualization UI */}
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

                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
                  {/* Mock Nodes */}
                  <div className="flex items-center gap-8">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-mono text-xs">
                      A
                    </div>
                    <div className="w-20 h-0.5 bg-border" />
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-mono text-xs">
                      B
                    </div>
                  </div>

                  <div className="mt-4 px-4 py-3 rounded-xl bg-card border border-border shadow-lg w-full max-w-[200px] text-center">
                    <div className="text-xs font-semibold text-foreground">
                      AI Summary
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1 truncate">
                      Component Architecture
                    </div>
                    <div className="w-full bg-muted/20 h-1 rounded mt-2">
                      <div className="w-3/4 bg-primary h-1 rounded animate-pulse" />
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mt-4">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-mono text-xs">
                      C
                    </div>
                    <div className="w-20 h-0.5 bg-border" />
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-mono text-xs">
                      D
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glow Element behind the card */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
