"use client";

import { motion, useReducedMotion } from "framer-motion";
import { sections } from "@/lib/nav";
import { useActiveSection } from "@/lib/useActiveSection";

const ids = sections.map((s) => s.id);

/**
 * Floating vertical pill rail (desktop only). Rests as a column of dots and
 * expands to full labels on hover — the rail is right-anchored, so it grows
 * leftward. The active section is tracked by a spring-morphed capsule.
 */
export default function SideRail() {
  const active = useActiveSection(ids);
  const reduce = useReducedMotion();

  return (
    <nav
      aria-label="Sections"
      className="group fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-0.5 rounded-full border border-line bg-bg-card/70 p-2 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.28)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_16px_50px_-18px_rgba(0,0,0,0.34)] lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className="relative flex items-center justify-end gap-3 rounded-full py-2 pl-3 pr-2.5"
          >
            {/* Label is always in the DOM for screen readers; clipped until hover. */}
            <span
              className={`max-w-0 overflow-hidden whitespace-nowrap text-sm leading-none opacity-0 transition-all duration-300 ease-out group-hover:max-w-[7rem] group-hover:opacity-100 group-focus-within:max-w-[7rem] group-focus-within:opacity-100 ${
                isActive ? "text-ink" : "text-muted"
              }`}
            >
              {s.label}
            </span>

            <span
              className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                isActive
                  ? "scale-125 bg-purple shadow-[0_0_0_4px_rgba(139,92,246,0.16)]"
                  : "bg-ink/20 group-hover:bg-ink/35"
              }`}
            />

            {isActive && (
              <motion.span
                layoutId="rail-pill"
                className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 380, damping: 32 }
                }
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}
