"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sections } from "@/lib/nav";

/**
 * Slim top bar: wordmark and CTA only. Desktop section links live in the
 * floating vertical rail (see SideRail); below lg they fold into the sheet.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc to dismiss, tap outside to dismiss, and lock the page behind the sheet.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        !sheetRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // Release the lock synchronously: the browser performs the hash jump right
  // after this handler, before React has flushed the state change, so waiting
  // on the effect cleanup would leave the page frozen and the link dead.
  const close = () => {
    document.body.style.overflow = "";
    setOpen(false);
  };

  const surface = scrolled
    ? "border-line bg-bg-card/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md"
    : "border-transparent bg-bg-card/50 backdrop-blur-sm";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#top"
          className={`rounded-full border px-4 py-2 font-display text-lg font-bold tracking-tight text-ink transition-all duration-300 ${surface}`}
        >
          Ransom<span className="text-purple">.</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] md:inline-block"
          >
            Get in Touch
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border text-ink transition-all duration-300 lg:hidden ${surface}`}
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
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={sheetRef}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-6xl origin-top rounded-2xl border border-line bg-bg-card p-3 shadow-lg lg:hidden"
          >
            {sections.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                onClick={close}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 + i * 0.035, duration: 0.25 }}
                className="block rounded-xl px-4 py-3 text-sm text-ink-soft transition-colors hover:bg-ink/[0.04]"
              >
                {s.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-1 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-white"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
