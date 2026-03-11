"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individual developers exploring new repos.",
    features: [
      "3 Analyses per day",
      "Basic Folder Structure",
      "Community Support",
      "Standard Q&A Context",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For power users and teams who need deep insights.",
    features: [
      "50 Analyses per day",
      "Deep Architecture Visualization",
      "Priority AI Processing",
      "Advanced Data Flow Mapping",
      "Private Repo Support",
    ],
    cta: "Upgrade with Stripe",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Start for free. Upgrade when you need power.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300",
                tier.highlight
                  ? "border-primary/50 bg-card/80 shadow-2xl shadow-primary/10 scale-105 z-10"
                  : "border-border bg-card/50 hover:border-border/80",
              )}
            >
              {/* Highlight Badge */}
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" /> Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tighter text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={cn(
                  "w-full font-semibold",
                  tier.highlight
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Signal */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center items-center gap-4 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
            </svg>
            Secure payments via Stripe
          </div>
          <span className="text-border">|</span>
          <span>Cancel anytime</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
