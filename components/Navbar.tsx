"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/lib/nav";
import { useActiveSection } from "@/lib/useActiveSection";

const ids = sections.map((s) => s.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "border-line bg-bg-card/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "border-transparent bg-bg-card/50 backdrop-blur-sm"
        }`}
      >
        <a
          href="#top"
          className="pl-3 font-display text-lg font-bold tracking-tight text-ink"
        >
          Ransom<span className="text-purple">.</span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {s.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] md:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mr-1 flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-[68px] rounded-2xl border border-line bg-bg-card p-3 shadow-lg md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-ink-soft transition-colors hover:bg-ink/[0.04]"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-white"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
