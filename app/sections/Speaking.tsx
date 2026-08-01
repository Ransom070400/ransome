"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import TalkCard from "@/components/TalkCard";
import Reveal from "@/components/Reveal";
import { speaking } from "@/data/speaking";

const INITIAL = 6;

export default function Speaking() {
  const [showAll, setShowAll] = useState(false);
  const sorted = [...speaking].sort((a, b) => b.date.localeCompare(a.date));
  const visible = showAll ? sorted : sorted.slice(0, INITIAL);

  return (
    <section id="speaking" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading
        index="02"
        kicker="Speaking & Community"
        title="On stage, and in the trenches."
        description="Keynotes, workshops, and panels across the mobile and Web3 worlds — from a room of first-timers to conference main stages."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {visible.map((talk, i) => (
            <motion.div
              key={talk.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            >
              <TalkCard talk={talk} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {sorted.length > INITIAL && (
        <Reveal className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full border border-ink/15 bg-bg-card px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {showAll ? "Show fewer" : `View all ${sorted.length} talks →`}
          </button>
        </Reveal>
      )}
    </section>
  );
}
