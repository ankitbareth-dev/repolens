"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Layers,
  GitBranch,
  Cpu,
  Folder,
  FileCode,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const features = [
  {
    Icon: Layers,
    title: "Architecture Visualization",
    description:
      "Instantly generate interactive folder trees and dependency graphs. See how modules connect without reading every file.",
    className: "md:col-span-2 md:row-span-2", // Large card
    visual: "architecture",
  },
  {
    Icon: MessageSquare,
    title: "AI-Powered Q&A",
    description:
      "Ask natural language questions like 'Where is the auth logic?' and get precise code references instantly.",
    className: "md:col-span-1",
    visual: "chat",
  },
  {
    Icon: Cpu,
    title: "Tech Stack Detection",
    description:
      "Automatically identifies frameworks, libraries, and databases used in the project.",
    className: "md:col-span-1",
    visual: "tech",
  },
  {
    Icon: GitBranch,
    title: "Data Flow Mapping",
    description:
      "Visualize how data moves from API endpoints to the UI state, highlighting critical paths.",
    className: "md:col-span-2 md:row-span-1",
    visual: "flow",
  },
];

// Mock visual components to make cards feel alive
const Visuals = {
  // UPDATED: Realistic File Tree + Graph Visual
  architecture: () => (
    <div className="absolute inset-0 flex items-end justify-center p-6 opacity-40 group-hover:opacity-60 transition-opacity">
      {/* Mini Window Container */}
      <div className="relative w-full h-[200px] bg-muted/20 rounded-xl border border-border overflow-hidden flex">
        {/* Left: File Tree */}
        <div className="w-1/3 p-3 border-r border-border bg-background/30 font-mono text-[10px] space-y-1.5">
          <div className="flex items-center gap-1 text-foreground/80">
            <Folder className="w-3 h-3 text-primary" /> src
          </div>
          <div className="pl-3 flex items-center gap-1 text-foreground/60">
            <Folder className="w-3 h-3" /> components
          </div>
          <div className="pl-6 flex items-center gap-1 text-primary">
            <FileCode className="w-3 h-3" /> button.tsx
          </div>
          <div className="pl-6 flex items-center gap-1 text-foreground/60">
            <FileCode className="w-3 h-3" /> card.tsx
          </div>
          <div className="pl-3 flex items-center gap-1 text-foreground/60">
            <Folder className="w-3 h-3" /> lib
          </div>
          <div className="pl-6 flex items-center gap-1 text-foreground/60">
            <FileCode className="w-3 h-3" /> utils.ts
          </div>
        </div>

        {/* Right: Connection Graph */}
        <div className="flex-1 relative bg-background/10">
          {/* Nodes */}
          <div className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          <div className="absolute top-[60%] left-[40%] w-2 h-2 rounded-full bg-muted-foreground" />
          <div className="absolute top-[30%] right-[20%] w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />

          {/* Lines connecting nodes */}
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="22%"
              y1="32%"
              x2="42%"
              y2="60%"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            <line
              x1="42%"
              y1="60%"
              x2="78%"
              y2="34%"
              stroke="hsl(var(--primary)/0.5)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Label */}
          <div className="absolute bottom-2 left-2 text-[8px] text-muted-foreground uppercase tracking-wider">
            Dependencies
          </div>
        </div>
      </div>
    </div>
  ),
  chat: () => (
    <div className="absolute bottom-4 right-4 left-4 space-y-2 opacity-30 group-hover:opacity-50 transition-opacity">
      <div className="w-3/4 h-2 rounded bg-muted-foreground/20" />
      <div className="w-1/2 h-2 rounded bg-primary/40 ml-auto" />
    </div>
  ),
  tech: () => (
    <div className="absolute bottom-4 right-4 flex gap-1 opacity-30 group-hover:opacity-50 transition-opacity">
      <div className="w-6 h-6 rounded bg-muted border border-border" />
      <div className="w-6 h-6 rounded bg-muted border border-border" />
    </div>
  ),
  flow: () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity p-4">
      <div className="flex items-center gap-4 w-full">
        <div className="h-8 w-1 bg-gradient-to-b from-primary to-transparent rounded-full" />
        <div
          className="flex-1 h-0.5 bg-border"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--primary)/0.5), transparent)",
          }}
        />
        <div className="h-4 w-4 rounded border border-primary rotate-45" />
      </div>
    </div>
  ),
};

export default function Features() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            One Tool, <span className="gradient-text">Complete Clarity</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            RepoLens breaks down barriers between you and the code.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => {
            const VisualComponent =
              Visuals[feature.visual as keyof typeof Visuals];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between",
                  feature.className,
                )}
              >
                {/* Content Layer (Top) */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-2 rounded-lg bg-muted border border-border mb-4">
                    <feature.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>

                {/* Visual Layer (Background) */}
                <VisualComponent />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
