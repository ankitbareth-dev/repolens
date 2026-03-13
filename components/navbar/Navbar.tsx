"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

import NavbarLogo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-[18px]">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between w-full max-w-2xl h-14 px-4 md:px-6 rounded-full border transition-all duration-300",
          "bg-background/80 border-border shadow-lg backdrop-blur-xl overflow-visible",
        )}
      >
        {/* Left: Logo */}
        <NavbarLogo />

        {/* Center: Desktop Links */}
        <NavLinks />

        {/* Right: Actions & Mobile Trigger */}
        <div className="flex items-center gap-1 md:gap-2 z-20">
          <Button
            size="sm"
            className="hidden md:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
          >
            Get Started
          </Button>

          <ThemeToggle />

          <MobileMenu isOpen={isMobileMenuOpen} onToggle={handleMobileToggle} />
        </div>
      </motion.nav>
    </header>
  );
}
