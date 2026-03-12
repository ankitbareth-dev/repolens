"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/assets/app-logo.png";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#howItWorks" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-[18px]">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between w-full max-w-2xl h-14 px-4 md:px-6 rounded-full border transition-all duration-300 bg-background/80 border-border shadow-lg backdrop-blur-xl overflow-visible",
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center z-20 shrink-0 pt-1.5">
          <Image
            src={Logo}
            alt="RepoLens Logo"
            className="h-[100px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Center Links */}
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

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 md:gap-2 z-20">
          {/* Hide Get Started button on mobile */}
          <Button
            size="sm"
            className="hidden md:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
          >
            Get Started
          </Button>
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            // Reduced top position: 18px (padding) + 56px (nav h-14) + 2px (gap) = 76px
            className="fixed top-[76px] left-4 right-4 z-40 p-4 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border my-2" />
              <Button className="w-full bg-primary">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
