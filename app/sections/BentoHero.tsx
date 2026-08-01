"use client";

import { motion } from "framer-motion";
import BentoCard from "@/components/bento/BentoCard";
import AboutCard from "@/components/bento/AboutCard";
import FeaturedCard from "@/components/bento/FeaturedCard";
import StatSplitCard from "@/components/bento/StatSplitCard";
import EcosystemCard from "@/components/bento/EcosystemCard";
import AwardCard from "@/components/bento/AwardCard";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BentoHero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6">
      {/* Headline */}
      <div className="mb-6 px-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between"
        >
          <span className="label text-muted">Ransom EZE</span>
          <span className="label flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-deep" />
            Portfolio © 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mt-2 font-display text-[clamp(3.5rem,13vw,10rem)] font-bold leading-[0.86] tracking-[-0.03em] text-ink"
        >
          Portfolio
          <span className="align-top text-purple">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-3 max-w-xl text-lg text-ink-soft text-balance"
        >
          Software Engineer &amp; Developer Relations — building on
          decentralized infrastructure and mentoring builders across Africa.
        </motion.p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-2 gap-3 md:h-[660px] md:grid-cols-4 md:grid-rows-4">
        <BentoCard
          span="col-span-2 min-h-[440px] md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-4 md:min-h-0"
          tone="bg-gradient-to-br from-purple-light to-purple text-white"
          interactive={false}
        >
          <AboutCard />
        </BentoCard>

        <BentoCard
          span="col-span-2 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-2"
          tone=""
          arrow
          arrowTone="light"
          href="#gallery"
          ariaLabel="Featured moment"
        >
          <FeaturedCard />
        </BentoCard>

        <BentoCard
          span="col-span-1 min-h-[240px] md:col-start-3 md:row-start-3 md:row-span-2 md:min-h-0"
          tone=""
          interactive={false}
        >
          <StatSplitCard
            top={{ value: 123, suffix: "+", label: "Events" }}
            bottom={{ value: 4, label: "Countries" }}
          />
        </BentoCard>

        <BentoCard
          span="col-span-1 min-h-[140px] md:col-start-4 md:row-start-3 md:min-h-0"
          tone=""
          arrow
          arrowTone="light"
          href="#speaking"
          ariaLabel="Ecosystems"
        >
          <EcosystemCard />
        </BentoCard>

        <BentoCard
          span="col-span-2 min-h-[120px] md:col-start-4 md:col-span-1 md:row-start-4 md:min-h-0"
          tone=""
          arrow
          arrowTone="dark"
          href="#about"
          ariaLabel="Developers mentored"
        >
          <AwardCard />
        </BentoCard>
      </div>
    </section>
  );
}
