"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import StatBox from "@/components/StatBox";
import Reveal from "@/components/Reveal";
import { stats } from "@/data/stats";
import { experience } from "@/data/experience";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="Engineer first, community always"
        description="A journey from curious tinkerer to the person developers call when they're stuck at 2am."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-text-muted">
          <p>
            It started with a single question — <em>how does this thing
            actually work?</em> That curiosity turned into late nights taking
            apps apart, and eventually into building my own. React Native became
            home: the sweet spot where I could ship real, native experiences
            fast and put them in people&apos;s hands.
          </p>
          <p>
            From mobile, the rabbit hole went deeper — into Web3, decentralized
            storage, and verifiable compute. I fell for the idea that the
            infrastructure powering our apps could be open and owned by the
            people who use it.
          </p>

          {expanded && (
            <>
              <p>
                Somewhere along the way I realized the code was only half the
                job. The other half was the people writing it. So I leaned into
                Developer Relations — turning hard infrastructure into workshops,
                demos, and docs that make builders feel unstoppable.
              </p>
              <p>
                Today I split my time between shipping reference apps on
                decentralized AI infrastructure at 0G Labs and getting on stage
                and into Discord threads to help the next wave of African
                developers build things that matter. Four countries, 123+
                events, 100+ developers mentored — and I&apos;m just getting
                started.
              </p>
            </>
          )}

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="font-medium text-accent hover:underline"
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatBox key={s.label} {...s} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
              Experience
            </h3>
            <ul className="space-y-5">
              {experience.map((e) => (
                <li
                  key={e.id}
                  className="border-l-2 border-border-subtle pl-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-semibold text-text">{e.title}</p>
                    <span className="shrink-0 text-xs text-text-muted">
                      {e.startDate}
                      {e.endDate ? `–${e.endDate}` : "–Now"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-accent">{e.company}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {e.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
