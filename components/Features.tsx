"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Layers,
  GitBranch,
  Cpu,
  Folder,
  FileCode,
  ShoppingCart,
  CreditCard,
  Box,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    description: "",
    className: "md:col-span-2 md:row-span-2 flex flex-col items-start",
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
    // Updated to take full width
    className: "md:col-span-3 md:row-span-1",
    visual: "flow",
  },
];

const Visuals = {
  architecture: () => (
    <div className="absolute bottom-0 left-0 right-0 h-[85%] p-4 sm:p-6 opacity-50 group-hover:opacity-90 transition-all duration-500">
      <div className="relative w-full h-full bg-secondary/40 dark:bg-card/60 backdrop-blur-md rounded-xl border border-border overflow-hidden shadow-2xl flex flex-col">
        {/* Editor Title Bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/50 dark:bg-background/20 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="flex-1 text-center text-[9px] text-muted-foreground font-mono tracking-wide">
            ecommerce-store/
          </span>
        </div>

        {/* Main Content: Split View */}
        <div className="flex flex-1 overflow-hidden">
          {/* LEFT: E-commerce File Tree */}
          <div className="w-[45%] border-r border-border bg-background/30 p-3 overflow-hidden font-mono text-[10px] space-y-1.5">
            <div className="flex items-center gap-1.5 text-foreground font-semibold">
              <Folder className="w-3.5 h-3.5 text-primary shrink-0" /> src
            </div>

            <div className="relative pl-4">
              <div className="absolute left-[7px] top-1 bottom-0 w-px h-full bg-border" />
              <div className="flex items-center gap-1.5 text-muted-foreground relative z-10">
                <div className="w-2 h-2 bg-muted rounded-sm" />
                <Folder className="w-3 h-3 shrink-0" /> components
              </div>

              <div className="relative pl-4 mt-1">
                <div className="absolute left-[7px] top-1 bottom-0 w-px h-full bg-border" />
                <div className="flex items-center gap-1.5 py-0.5 px-1 rounded bg-primary/20 border border-primary/40 text-primary relative z-10 shadow-sm shadow-primary/10">
                  <FileCode className="w-3 h-3 shrink-0" /> ProductCard.tsx
                </div>
              </div>
            </div>

            <div className="relative pl-4 mt-1">
              <div className="absolute left-[7px] top-1 bottom-0 w-px h-full bg-border" />
              <div className="flex items-center gap-1.5 text-muted-foreground relative z-10">
                <div className="w-2 h-2 bg-muted rounded-sm" />
                <Folder className="w-3 h-3 shrink-0" /> lib
              </div>
              <div className="relative pl-4 mt-1">
                <div className="flex items-center gap-1.5 text-muted-foreground/80 relative z-10">
                  <FileCode className="w-3 h-3 shrink-0" /> stripe.ts
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Logical Dependency Graph (Grid Based for Consistency) */}
          <div className="flex-1 relative bg-muted/10 p-2 overflow-hidden">
            {/* SVG Layer: Absolute positioned to fill the grid area */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <path
                    d="M0,0 L0,6 L6,3 z"
                    fill="hsl(var(--muted-foreground) / 0.6)"
                  />
                </marker>
              </defs>

              {/* 1. ProductList (Top) -> ProductCard (Center) */}
              <path
                d="M 100 60 L 100 85"
                stroke="hsl(var(--primary) / 0.6)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* 2. ProductCard (Center) -> useCart (Right) */}
              <path
                d="M 145 100 L 165 100"
                stroke="hsl(var(--muted-foreground) / 0.4)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* 3. Stripe API (Bottom) -> ProductCard (Center) */}
              <path
                d="M 100 140 L 100 115"
                stroke="hsl(var(--primary) / 0.6)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3 2"
                markerEnd="url(#arrowhead)"
              />
            </svg>

            {/* Nodes Layer: CSS Grid for perfect alignment with SVG coordinates */}
            <div className="relative z-10 w-full h-full grid grid-cols-3 grid-rows-3 gap-2 place-items-center">
              {/* Row 1: Parent Component */}
              <div className="col-start-2 row-start-1 px-2 py-1 rounded bg-secondary border border-border text-[8px] text-muted-foreground font-mono shadow-sm flex items-center gap-1">
                <Layers className="w-2.5 h-2.5" /> ProductList
              </div>

              {/* Row 2: Main Component + Hook */}
              <div className="col-start-2 row-start-2 h-10 w-24 rounded-md bg-primary/20 border border-primary/50 flex items-center justify-center gap-1.5 shadow-lg shadow-primary/10 backdrop-blur-sm">
                <Box className="w-3.5 h-3.5 text-primary" />
                <span className="text-[9px] font-bold text-primary">
                  ProductCard
                </span>
              </div>

              <div className="col-start-3 row-start-2 px-2 py-1 rounded bg-secondary border border-border text-[8px] text-muted-foreground font-mono shadow-sm flex items-center gap-1">
                <ShoppingCart className="w-2.5 h-2.5 text-primary" /> useCart
              </div>

              {/* Row 3: Data Source */}
              <div className="col-start-2 row-start-3 px-2 py-1 rounded bg-muted border border-border text-[8px] text-muted-foreground font-mono shadow-sm flex items-center gap-1">
                <CreditCard className="w-2.5 h-2.5" /> api/stripe
              </div>
            </div>
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

  // UPDATED: Visual positioned strictly at the bottom to avoid text overlap
  flow: () => (
    <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 group-hover:opacity-50 transition-opacity p-8 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-3xl gap-4">
        {/* Step 1: User */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="text-[10px] text-muted-foreground">User Click</span>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-muted" />

        {/* Step 2: API */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-muted border border-border flex items-center justify-center">
            <GitBranch className="w-4 h-4 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">API Route</span>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gradient-to-r from-muted to-primary/50" />

        {/* Step 3: DB */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded bg-secondary border border-border flex items-center justify-center">
            <Layers className="w-4 h-4 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">Database</span>
        </div>
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
                  <div className="flex items-center gap-3 mb-2">
                    <feature.Icon className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
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
