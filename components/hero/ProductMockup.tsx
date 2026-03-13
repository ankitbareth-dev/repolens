import { memo } from "react";

const ProductMockup = memo(() => {
  return (
    <div className="relative w-full max-w-[550px] md:max-w-[600px] rounded-xl md:rounded-2xl border border-border bg-card/80 backdrop-blur-3xl shadow-2xl overflow-hidden">
      {/* Window Header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80 border border-red-400/50" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80 border border-yellow-400/50" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 border border-green-400/50" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-mono">
          <span className="px-1.5 md:px-2 py-0.5 rounded bg-muted">main</span>
          <span className="hidden sm:inline">repo-lens-dashboard</span>
        </div>
        <div className="w-12 md:w-16" />
      </div>

      {/* Mockup Content - Responsive Grid */}
      <div className="grid grid-cols-5 min-h-[260px] sm:min-h-[300px] md:min-h-[380px]">
        {/* Sidebar - File Tree */}
        <div className="col-span-2 border-r border-border p-2 md:p-4 flex flex-col gap-1 md:gap-2 bg-background/30">
          <div className="flex items-center justify-between mb-1 md:mb-2">
            <span className="text-[9px] md:text-[11px] uppercase text-muted-foreground font-bold tracking-widest">
              Explorer
            </span>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary animate-pulse" />
          </div>

          <div className="flex flex-col gap-0.5 md:gap-1.5 pt-1 font-mono text-[10px] md:text-xs">
            <div className="flex items-center gap-1 text-foreground opacity-70">
              <span className="text-[8px] md:text-[10px]">▼</span> src
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1 ml-2 md:ml-3">
              <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 rounded bg-primary/10 text-primary border-l-2 border-primary">
                app.tsx
              </div>
              <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 text-muted-foreground">
                utils.ts
              </div>
              <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 text-muted-foreground">
                index.ts
              </div>
            </div>
          </div>

          {/* Insights Section */}
          <div className="mt-auto pt-2 md:pt-4 border-t border-border hidden sm:block">
            <div className="text-[8px] md:text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1 md:mb-2">
              Insights
            </div>
            <div className="h-16 md:h-20 w-full rounded-lg bg-muted/10 border border-dashed border-border flex items-center justify-center text-[8px] md:text-[10px] text-muted-foreground">
              Graph View
            </div>
          </div>
        </div>

        {/* Main Content - Visualization */}
        <div className="col-span-3 p-3 md:p-6 flex flex-col gap-2 md:gap-4 relative bg-background/10">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 md:gap-4">
            {/* Mock Nodes */}
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-mono text-[10px] md:text-xs">
                A
              </div>
              <div className="w-12 md:w-20 h-0.5 bg-border" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-mono text-[10px] md:text-xs">
                B
              </div>
            </div>

            <div className="mt-2 md:mt-4 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-card border border-border shadow-lg w-full max-w-[160px] md:max-w-[200px] text-center">
              <div className="text-[10px] md:text-xs font-semibold text-foreground">
                AI Summary
              </div>
              <div className="text-[8px] md:text-[10px] text-muted-foreground mt-1 truncate">
                Component Architecture
              </div>
              <div className="w-full bg-muted/20 h-1 rounded mt-1.5 md:mt-2">
                <div className="w-3/4 bg-primary h-1 rounded animate-pulse" />
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-mono text-[10px] md:text-xs">
                C
              </div>
              <div className="w-12 md:w-20 h-0.5 bg-border" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-mono text-[10px] md:text-xs">
                D
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductMockup.displayName = "ProductMockup";
export default ProductMockup;
