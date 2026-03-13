"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Layers,
  GitBranch,
  Cpu,
  ShoppingCart,
  CreditCard,
  Box,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
    className: "md:col-span-3 md:row-span-1",
    visual: "flow",
  },
];

function Node({
  icon: Icon,
  label,
  primary,
}: {
  icon: LucideIcon;
  label: string;
  primary?: boolean;
}) {
  return (
    <div
      className={cn(
        "px-2 py-1.5 md:px-3 md:py-2 rounded-md border shadow-sm font-mono text-[9px] md:text-[10px] flex items-center gap-1.5 md:gap-2 bg-card whitespace-nowrap",
        primary
          ? "bg-primary/10 border-primary/40 text-primary shadow-lg shadow-primary/10"
          : "border-border text-muted-foreground bg-muted/50",
      )}
    >
      <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
      <span className="font-semibold">{label}</span>
    </div>
  );
}

function ArchitectureFlow() {
  return (
    <div className="relative w-full h-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:12px_12px]" />

      {/* SVG Lines Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Center to Top (Grid: Row 2 to Row 1) */}
        <line
          x1="50%"
          y1="calc(33% + 20px)"
          x2="50%"
          y2="calc(10% + 32px)"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        {/* Center to Right (Grid: Col 2 to Col 3) */}
        <line
          x1="calc(50% + 60px)"
          y1="50%"
          x2="calc(83% - 60px)"
          y2="50%"
          stroke="hsl(var(--border))"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        {/* Center to Bottom (Grid: Row 2 to Row 3) */}
        <line
          x1="50%"
          y1="calc(66% - 20px)"
          x2="50%"
          y2="calc(90% - 32px)"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          markerEnd="url(#arrow)"
        />
      </svg>

      {/* Nodes Grid Layer - 3x3 Grid for perfect alignment */}
      <div className="relative z-20 w-full h-full grid grid-cols-3 grid-rows-3 place-items-center">
        {/* Top Center */}
        <div className="col-start-2 row-start-1">
          <Node icon={Layers} label="ProductList.tsx" />
        </div>

        {/* Center + Right */}
        <div className="col-start-2 row-start-2">
          <Node icon={Box} label="ProductCard.tsx" primary />
        </div>
        <div className="col-start-3 row-start-2 self-center justify-self-center">
          <Node icon={ShoppingCart} label="useCart.ts" />
        </div>

        {/* Bottom Center */}
        <div className="col-start-2 row-start-3">
          <Node icon={CreditCard} label="api/stripe.ts" />
        </div>
      </div>
    </div>
  );
}

const Visuals = {
  architecture: () => (
    <div className="absolute bottom-0 left-0 right-0 h-[85%] p-3 md:p-4 sm:p-6 opacity-60 group-hover:opacity-100 transition-all duration-500">
      <div className="relative w-full h-full bg-muted/30 dark:bg-card/60 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-xl flex flex-col">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-2 py-1.5 md:px-3 md:py-2 border-b border-border bg-muted/50 dark:bg-background/20 shrink-0 z-10">
          <div className="flex gap-1">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="flex-1 text-center text-[8px] md:text-[9px] text-muted-foreground font-mono tracking-wide truncate px-2">
            dependency-graph.tsx
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 relative p-2 md:p-0">
          <ArchitectureFlow />
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
    <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 group-hover:opacity-50 transition-opacity p-4 md:p-8 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-3xl gap-2 md:gap-4">
        <div className="flex flex-col items-center gap-1.5 md:gap-2">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary" />
          </div>
          <span className="text-[8px] md:text-[10px] text-muted-foreground text-center">
            User Click
          </span>
        </div>

        <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-muted" />

        <div className="flex flex-col items-center gap-1.5 md:gap-2">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-muted border border-border flex items-center justify-center">
            <GitBranch className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
          </div>
          <span className="text-[8px] md:text-[10px] text-muted-foreground text-center">
            API Route
          </span>
        </div>

        <div className="flex-1 h-0.5 bg-gradient-to-r from-muted to-primary/50" />

        <div className="flex flex-col items-center gap-1.5 md:gap-2">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded bg-secondary border border-border flex items-center justify-center">
            <Layers className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
          </div>
          <span className="text-[8px] md:text-[10px] text-muted-foreground text-center">
            Database
          </span>
        </div>
      </div>
    </div>
  ),
};

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
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            One Tool, <span className="gradient-text">Complete Clarity</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-3 md:mt-4 text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            RepoLens breaks down barriers between you and the code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => {
            const VisualComponent =
              Visuals[feature.visual as keyof typeof Visuals];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between min-h-[240px] md:min-h-0",
                  feature.className,
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <feature.Icon className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                    <h3 className="text-base md:text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>

                <VisualComponent />

                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
