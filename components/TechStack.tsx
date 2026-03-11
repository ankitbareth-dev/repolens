"use client";

import { motion, type Variants } from "framer-motion";
import {
  Database,
  CreditCard,
  Braces,
  Paintbrush,
  Bot,
  Cloud,
  Github,
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const techStack = [
  {
    name: "Next.js",
    description: "App Router",
    icon: Braces, // Using generic code icon, replace with SVG if needed
    color: "text-white",
    bgColor: "bg-black dark:bg-white dark:text-black",
  },
  {
    name: "PostgreSQL",
    description: "Persistent Storage",
    icon: Database,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Stripe",
    description: "Payments",
    icon: CreditCard,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Tailwind",
    description: "Styling",
    icon: Paintbrush,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "AI / LLM",
    description: "Intelligence",
    icon: Bot,
    color: "text-primary", // Uses theme color
    bgColor: "bg-primary/10",
  },
  {
    name: "Vercel",
    description: "Deployment",
    icon: Cloud,
    color: "text-foreground",
    bgColor: "bg-muted/50",
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-20 overflow-hidden border-y border-border bg-muted/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-muted-foreground uppercase tracking-widest"
          >
            Built for Scale, Designed for Speed
          </motion.h3>
        </div>

        {/* Tech Pills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card cursor-default">
                {/* Icon Container */}
                <div className={cn("p-1.5 rounded-md", tech.bgColor)}>
                  <tech.icon className={cn("w-4 h-4", tech.color)} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {tech.description}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Source Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            View Source Code (Coming Soon)
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
