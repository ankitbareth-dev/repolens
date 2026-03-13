"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProblemItem } from "./data";
import type { Variants } from "framer-motion";

interface ProblemCardProps {
  problem: ProblemItem;
  index: number;
  variants: Variants;
}

const ProblemCard = ({ problem, index, variants }: ProblemCardProps) => {
  const Icon = problem.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative p-[1px] rounded-2xl transition-all duration-500"
    >
      {/* Gradient Border & Glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/20 via-transparent to-transparent",
        )}
        style={{ filter: "blur(8px)" }}
      />

      {/* Card Content Wrapper */}
      <div className="relative h-full bg-muted/30 dark:bg-card/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 overflow-hidden border border-border dark:border-border/50 group-hover:border-primary/30 transition-colors">
        {/* Large Background Number */}
        <div className="absolute -bottom-4 -right-1 text-[100px] md:text-[120px] font-black leading-none text-muted-foreground/10 dark:text-foreground/[0.03] group-hover:text-muted-foreground/20 dark:group-hover:text-foreground/[0.05] transition-colors select-none">
          0{index + 1}
        </div>

        {/* Glow Effect on Hover */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon Container */}
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-background dark:bg-muted border border-border mb-4 md:mb-6 group-hover:bg-background transition-colors">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <h3 className="text-lg md:text-xl font-semibold leading-snug text-foreground mb-2 md:mb-3">
            {problem.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {problem.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProblemCard);
