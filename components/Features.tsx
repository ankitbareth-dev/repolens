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
        "px-3 py-2 rounded-md border shadow-sm font-mono text-[10px] flex items-center gap-2 bg-card",
        primary &&
          "bg-primary/10 border-primary/50 text-primary shadow-lg shadow-primary/10",
      )}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      <span className="font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

function ArchitectureFlow() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Nodes */}

      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <Node icon={Layers} label="ProductList.tsx" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Node icon={Box} label="ProductCard.tsx" primary />
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2">
        <Node icon={ShoppingCart} label="useCart.ts" />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Node icon={CreditCard} label="api/stripe.ts" />
      </div>

      {/* Arrows */}

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="8"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* TOP CONNECTION */}
        <line
          x1="50%"
          y1="calc(50% - 16px)"
          x2="50%"
          y2="calc(16px + 32px)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />

        {/* RIGHT CONNECTION */}
        <line
          x1="calc(50% + 70px)"
          y1="50%"
          x2="calc(100% - 132px)"
          y2="50%"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />

        {/* BOTTOM CONNECTION */}
        <line
          x1="50%"
          y1="calc(50% + 20px)"
          x2="50%"
          y2="calc(100% - 48px)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="4 4"
          markerEnd="url(#arrow)"
        />
      </svg>
    </div>
  );
}
const Visuals = {
  architecture: () => (
    <div className="absolute bottom-0 left-0 right-0 h-[85%] p-4 sm:p-6 opacity-60 group-hover:opacity-100 transition-all duration-500">
      <div className="relative w-full h-full bg-secondary/40 dark:bg-card/60 backdrop-blur-md rounded-xl border border-border overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/50 dark:bg-background/20 shrink-0 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>

          <span className="flex-1 text-center text-[9px] text-muted-foreground font-mono tracking-wide">
            dependency-graph.tsx
          </span>
        </div>

        <div className="flex-1 relative">
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
    <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 group-hover:opacity-50 transition-opacity p-8 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-3xl gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="text-[10px] text-muted-foreground">User Click</span>
        </div>

        <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-muted" />

        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-muted border border-border flex items-center justify-center">
            <GitBranch className="w-4 h-4 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">API Route</span>
        </div>

        <div className="flex-1 h-0.5 bg-gradient-to-r from-muted to-primary/50" />

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
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
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
