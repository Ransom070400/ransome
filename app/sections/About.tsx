"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

const journey = [
  {
    phase: "Curiosity",
    body: "It started at university. I was curious about almost everything — I explored data analytics, design, and entrepreneurship before deciding to focus on software engineering.",
  },
  {
    phase: "Full-Stack",
    body: "For several years I worked as a full-stack engineer, spending most of my time building with JavaScript and modern web technologies.",
  },
  {
    phase: "Into Web3",
    body: "I discovered Web3 through developer events on campus. It caught my attention immediately — I learned Solidity and completed a Web3 internship building decentralized applications.",
  },
  {
    phase: "React Native",
    body: "Then I found React Native: high-quality Android and iOS apps from a single codebase, no Swift or Kotlin required. I doubled down on mobile and shipped across consumer, AI, and Web3 products.",
  },
  {
    phase: "The Ecosystem",
    body: "Hackathons, tight-deadline builds, and collaboration grew into mentoring builders, judging hackathons, and — as a Sui ambassador — organizing workshops and programs focused on developer onboarding and retention.",
  },
  {
    phase: "Developer Relations",
    body: "The part I enjoyed most wasn't just writing code — it was helping developers succeed. So I pursued DevRel intentionally: technical writing, public speaking, community building, workshop facilitation, and ecosystem strategy.",
  },
  {
    phase: "Today",
    body: "My work sits at the intersection of software engineering and Developer Relations — building products that solve real problems while helping developers grow and become long-term contributors to the ecosystems they join.",
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
                      {e.role}
                    </p>
                    <span className="shrink-0 whitespace-nowrap text-xs text-muted">
                      {e.period}
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
