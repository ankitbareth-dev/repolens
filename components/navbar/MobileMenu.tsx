"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu = memo(({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-muted-foreground z-20"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-4 right-4 z-40 p-4 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onToggle}
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
    </>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
