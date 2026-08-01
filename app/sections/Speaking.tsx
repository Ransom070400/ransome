"use client";

import { useState } from "react";
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
    <section id="speaking" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Speaking"
          title="On Stage"
          description="Talks, workshops, and panels across the mobile and Web3 worlds — from keynotes to hands-on sessions."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((talk, i) => (
            <Reveal key={talk.id} delay={(i % 3) * 0.06}>
              <TalkCard talk={talk} />
            </Reveal>
          ))}
        </div>

        {sorted.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-lg border border-border-subtle px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:bg-surface-2"
            >
              {showAll
                ? "Show fewer"
                : `View more (${sorted.length - INITIAL})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
