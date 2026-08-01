"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string; // "01"
  kicker: string; // small uppercase label
  title: ReactNode; // big display title
  description?: ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="flex h-7 items-center rounded-full bg-ink px-2.5 font-display text-xs font-bold text-white">
          {index}
        </span>
        <span className="label text-muted">{kicker}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-4 text-lg leading-relaxed text-ink-soft text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
