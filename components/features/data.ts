import {
  MessageSquare,
  Layers,
  GitBranch,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
  className: string;
  visual: string;
}

export const features: Feature[] = [
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
