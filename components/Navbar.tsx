"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/app-logo.png";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#howItWorks" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between w-full max-w-2xl h-14 px-4 rounded-full border transition-all duration-300 bg-background/80 border-border shadow-lg backdrop-blur-xl",
        )}
      >
        {/* Logo Section - Updated */}
        <Link href="/" className="flex items-center z-20">
          <Image
            src={Logo}
            alt="RepoLens Logo"
            className="h-18 w-auto"
            priority
          />
        </Link>

        {/* Desktop Center Links */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 z-20">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
          >
            Get Started
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-2 p-2 text-muted-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown (Pill Style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 p-4 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl md:hidden"
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
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
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
