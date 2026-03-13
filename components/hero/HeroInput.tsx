"use client";

import { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroInput = memo(() => {
  const [repoUrl, setRepoUrl] = useState<string>("");

  return (
    <div className="flex flex-col sm:flex-row w-full items-center gap-2">
      <div className="relative w-full">
        {/* Inline SVG for Github Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <Input
          type="url"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="github.com/owner/repo"
          className="h-12 md:h-14 pl-10 text-sm md:text-base bg-secondary/30 border-border focus-visible:ring-1 focus-visible:ring-primary transition-all"
        />
      </div>
      <Button
        size="lg"
        className="h-12 md:h-14 px-8 w-full sm:w-auto text-sm md:text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
      >
        Analyze
        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
      </Button>
    </div>
  );
});

HeroInput.displayName = "HeroInput";
export default HeroInput;
