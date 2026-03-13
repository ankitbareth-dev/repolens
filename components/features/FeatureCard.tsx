"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { memo } from "react";
import type { Feature } from "./data";
import { itemVariants } from "./animations";
import { visualMap } from "./visuals";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = memo(({ feature }: FeatureCardProps) => {
  const VisualComponent = visualMap[feature.visual];

  return (
    <motion.div
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

      {VisualComponent && <VisualComponent />}

      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";
export default FeatureCard;
