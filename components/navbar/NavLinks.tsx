"use client";

import { memo } from "react";
import Link from "next/link";
import { navLinks } from "@/components/navbar/data";
import { cn } from "@/lib/utils";

const NavLinks = memo(() => {
  return (
    <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "flex items-center justify-center h-8 px-4 text-sm font-medium rounded-full transition-all duration-200",
            "text-muted-foreground hover:text-primary-foreground hover:bg-primary",
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
});

NavLinks.displayName = "NavLinks";

export default NavLinks;
