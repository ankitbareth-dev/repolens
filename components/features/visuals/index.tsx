import { GitBranch, Layers } from "lucide-react";
import ArchitectureVisual from "./ArchitectureVisual";

const ChatVisual = () => (
  <div className="absolute bottom-4 right-4 left-4 space-y-2 opacity-30 group-hover:opacity-50 transition-opacity">
    <div className="w-3/4 h-2 rounded bg-muted-foreground/20" />
    <div className="w-1/2 h-2 rounded bg-primary/40 ml-auto" />
  </div>
);

const TechVisual = () => (
  <div className="absolute bottom-4 right-4 flex gap-1 opacity-30 group-hover:opacity-50 transition-opacity">
    <div className="w-6 h-6 rounded bg-muted border border-border" />
    <div className="w-6 h-6 rounded bg-muted border border-border" />
  </div>
);

const FlowVisual = () => (
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
);

export const visualMap: Record<string, React.FC> = {
  architecture: ArchitectureVisual,
  chat: ChatVisual,
  tech: TechVisual,
  flow: FlowVisual,
};
