import { SearchX, FileWarning, Hourglass, type LucideIcon } from "lucide-react";

export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const problems: ProblemItem[] = [
  {
    icon: SearchX,
    title: "Lost in the Logic",
    description:
      "Hours spent tracing function calls and deciphering complex control flows, only to end up more confused than when you started.",
  },
  {
    icon: FileWarning,
    title: "Outdated Docs",
    description:
      "The README hasn't been updated in years. Comments lie. You're forced to rely on tribal knowledge or guesswork.",
  },
  {
    icon: Hourglass,
    title: "Slow Onboarding",
    description:
      "New developers take weeks to become productive. Valuable time is lost in knowledge transfer instead of building.",
  },
];
