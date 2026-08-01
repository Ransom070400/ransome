"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

const journey = [
  {
    phase: "The Question",
    body: "It started with curiosity — late nights taking apps apart just to understand what made them tick.",
  },
  {
    phase: "React Native",
    body: "Mobile became home: ship real, native experiences fast and put them straight into people's hands.",
  },
  {
    phase: "Into Web3",
    body: "Fell for the idea that the infrastructure behind our apps could be open — owned by the people who use it.",
  },
  {
    phase: "Developer Relations",
    body: "Turned hard infrastructure into workshops, demos, and docs that make builders feel unstoppable.",
  },
  {
    phase: "Today · 0G Labs",
    body: "Shipping reference apps on decentralized AI — and lifting up the next wave of African developers.",
  },
];

export default function About() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 65%", "end 65%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading
        index="01"
        kicker="About"
        title="Every builder has a first question."
        description="Here's how mine turned into a career at the edge of mobile and Web3 — and a habit of bringing others along."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Narrative journey with a scroll-filled spine */}
        <div ref={lineRef} className="relative pl-9">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] bg-line" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] origin-top bg-gradient-to-b from-mint-deep via-purple to-purple-light"
          />
          <div className="space-y-9">
            {journey.map((m, i) => (
              <Reveal key={m.phase} delay={i * 0.04}>
                <div className="relative">
                  <motion.span
                    initial={{ scale: 0.4 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                    transition={{ duration: 0.4 }}
                    className="absolute -left-9 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-purple bg-bg-page"
                  />
                  <p className="label text-purple">{m.phase}</p>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Experience list */}
        <div>
          <Reveal>
            <p className="label mb-5 text-muted">Experience</p>
          </Reveal>
          <ul className="space-y-3">
            {experience.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.05}>
                <li className="rounded-2xl border border-line bg-bg-card p-5 transition-transform hover:-translate-y-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-display font-semibold text-ink">
                      {e.title}
                    </p>
                    <span className="shrink-0 text-xs text-muted">
                      {e.startDate}
                      {e.endDate ? `–${e.endDate}` : "–Now"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-purple">{e.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {e.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
