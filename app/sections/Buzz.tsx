"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SocialCard from "@/components/SocialCard";
import Reveal from "@/components/Reveal";
import { buzz } from "@/data/buzz";

const INITIAL = 6;

export default function Buzz() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? buzz : buzz.slice(0, INITIAL);

  return (
    <section id="buzz" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Buzz"
          title="What people say"
          description="Kind words from teams, communities, and the developers I've had the privilege to build alongside."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((mention, i) => (
            <Reveal
              key={mention.id}
              delay={(i % 3) * 0.05}
              className="mb-5 inline-block w-full"
            >
              <SocialCard mention={mention} />
            </Reveal>
          ))}
        </div>

        {buzz.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-lg border border-border-subtle px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:bg-surface-2"
            >
              {showAll ? "Show fewer" : `View more (${buzz.length - INITIAL})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
