"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, Github, FileSearch } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
  },
};

const steps = [
  {
    step: "01",
    icon: Github,
    title: "Connect",
    sub: "Repository",
    description:
      "Paste any GitHub URL. We handle public and private scopes seamlessly.",
    position: "left",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Analyze",
    sub: "Engine Core",
    description: "AI scans structure, dependencies, and semantic patterns.",
    position: "center",
  },
  {
    step: "03",
    icon: FileSearch,
    title: "Explore",
    sub: "Insights",
    description: "View diagrams, ask questions, and onboard instantly.",
    position: "right",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-muted/10">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--border))_1px,transparent_1px)] bg-[length:32px_32px] opacity-30" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono text-primary mb-4 tracking-widest uppercase flex items-center justify-center gap-2"
          >
            <span className="w-8 h-px bg-primary" /> System Flow{" "}
            <span className="w-8 h-px bg-primary" />
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground"
          >
            From Chaos to Clarity
          </motion.h2>
        </div>

        {/* Desktop Layout: Pipeline Visualization */}
        <div className="hidden md:flex flex-row items-start justify-between relative min-h-[400px]">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible">
            {/* Gradient Definition */}
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="hsl(var(--muted-foreground))"
                  stopOpacity="0.2"
                />
                <stop
                  offset="50%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--muted-foreground))"
                  stopOpacity="0.2"
                />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* The Circuit Path */}
            <motion.path
              variants={pathVariants}
              d="M 50 200 L 250 200 Q 300 200 320 160 L 480 160 Q 500 160 520 200 L 950 200"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              className="stroke-dasharray-4"
            />
          </svg>

          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "relative z-10 flex flex-col items-center w-full",
                item.position === "center" ? "pt-16" : "pt-0", // Center card sits higher visually
              )}
            >
              {/* Card Container */}
              <div
                className={cn(
                  "relative w-64 p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-md transition-all duration-500",
                  "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
                  item.position === "center" &&
                    "w-72 border-primary/30 bg-card shadow-lg shadow-primary/5",
                )}
              >
                {/* Watermark Number */}
                <div className="absolute -top-3 -right-2 text-6xl font-black text-foreground/5 select-none">
                  {item.step}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  {/* Icon Container */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-xl border transition-colors",
                      item.position === "center"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-muted border-border text-muted-foreground",
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.sub}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom decoration for center card */}
                {item.position === "center" && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full blur-[2px]" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout: Vertical List (Clean & Readable) */}
        <div className="flex flex-col md:hidden gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-lg border",
                    item.position === "center"
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-muted border-border text-muted-foreground",
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
