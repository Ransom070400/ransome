"use client";

import { motion, type Variant, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Mode = "up" | "blur" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  mode?: Mode;
  y?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

function variants(mode: Mode, y: number): Variants {
  const hidden: Record<Mode, Variant> = {
    up: { opacity: 0, y },
    blur: { opacity: 0, y: y / 1.5, filter: "blur(10px)" },
    fade: { opacity: 0 },
    scale: { opacity: 0, scale: 0.96 },
  };
  const shown: Record<Mode, Variant> = {
    up: { opacity: 1, y: 0 },
    blur: { opacity: 1, y: 0, filter: "blur(0px)" },
    fade: { opacity: 1 },
    scale: { opacity: 1, scale: 1 },
  };
  return { hidden: hidden[mode], show: shown[mode] };
}

/** Fade / rise / blur-in as it scrolls into view. Runs once. */
export default function Reveal({
  children,
  delay = 0,
  className,
  mode = "up",
  y = 28,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants(mode, y)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
