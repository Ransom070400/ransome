"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ArrowBadge from "./ArrowBadge";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  /** Extra classes controlling grid placement (col-span / row-span). */
  span?: string;
  /** Background utility classes, e.g. "bg-bg-dark text-white". */
  tone?: string;
  arrow?: boolean;
  arrowTone?: "light" | "dark";
  href?: string;
  /** Disable the hover lift (e.g. for the large about card). */
  interactive?: boolean;
  delay?: number;
  ariaLabel?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Base bento block: rounded, animated in, optional corner arrow + link. */
export default function BentoCard({
  children,
  className = "",
  span = "",
  tone = "bg-bg-card text-ink",
  arrow = false,
  arrowTone = "dark",
  href,
  interactive = true,
  delay = 0,
  ariaLabel,
}: BentoCardProps) {
  const Comp = href ? motion.a : motion.div;

  return (
    <Comp
      {...(href ? { href, "aria-label": ariaLabel } : {})}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
      whileHover={interactive ? { y: -4 } : undefined}
      className={`group relative flex flex-col overflow-hidden rounded-[26px] ${tone} ${span} ${className}`}
    >
      {arrow && <ArrowBadge tone={arrowTone} />}
      {children}
    </Comp>
  );
}
