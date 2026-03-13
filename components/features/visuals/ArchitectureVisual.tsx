import {
  Layers,
  ShoppingCart,
  CreditCard,
  Box,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { memo } from "react";

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

const ArchitectureFlow = memo(() => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:12px_12px]" />

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

        <line
          x1="50%"
          y1="calc(33% + 20px)"
          x2="50%"
          y2="calc(10% + 32px)"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <line
          x1="calc(50% + 60px)"
          y1="50%"
          x2="calc(83% - 60px)"
          y2="50%"
          stroke="hsl(var(--border))"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
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

      <div className="relative z-20 w-full h-full grid grid-cols-3 grid-rows-3 place-items-center">
        <div className="col-start-2 row-start-1">
          <Node icon={Layers} label="ProductList.tsx" />
        </div>
        <div className="col-start-2 row-start-2">
          <Node icon={Box} label="ProductCard.tsx" primary />
        </div>
        <div className="col-start-3 row-start-2 self-center justify-self-center">
          <Node icon={ShoppingCart} label="useCart.ts" />
        </div>
        <div className="col-start-2 row-start-3">
          <Node icon={CreditCard} label="api/stripe.ts" />
        </div>
      </div>
    </div>
  );
});
ArchitectureFlow.displayName = "ArchitectureFlow";

export default function ArchitectureVisual() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[85%] p-3 md:p-4 sm:p-6 opacity-60 group-hover:opacity-100 transition-all duration-500">
      <div className="relative w-full h-full bg-muted/30 dark:bg-card/60 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-xl flex flex-col">
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
        <div className="flex-1 relative p-2 md:p-0">
          <ArchitectureFlow />
        </div>
      </div>
    </div>
  );
}
