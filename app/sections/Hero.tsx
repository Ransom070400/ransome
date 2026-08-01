"use client";

import { motion, type Variants } from "framer-motion";
import StatBox from "@/components/StatBox";
import { stats } from "@/data/stats";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-radial-accent pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-2/60 px-3 py-1 text-sm text-text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Now at 0G Labs
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Ransom EZE
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl text-text-muted sm:text-2xl"
          >
            React Native Engineer &amp; Developer Relations
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl leading-relaxed text-text-muted text-balance"
          >
            I build performant mobile apps on decentralized infrastructure — and
            help thousands of developers ship their own. Based in Nigeria,
            available worldwide.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Latest Project
            </a>
            <a
              href="#speaking"
              className="rounded-lg border border-border-subtle px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:bg-surface-2"
            >
              See me on stage
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <StatBox key={s.label} {...s} />
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait — gradient monogram placeholder until a real photo is added. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-white/90">RE</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
              <p className="text-sm font-medium text-white">
                Ransom EZE · Lagos, Nigeria 🇳🇬
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
