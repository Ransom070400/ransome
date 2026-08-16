"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import s from "./deck.module.css";

/**
 * Colours and layout knobs a deck hands to the shared chrome. Everything lands
 * on the deck root as a custom property, so both this stylesheet and the deck's
 * own module can read them.
 */
export interface DeckTheme {
  /** Primary brand colour: tags, dots, dividers, primary CTA. */
  accent: string;
  /**
   * The accent as space-separated RGB channels, e.g. "146 0 225". The
   * stylesheets mix their own alphas off this for tints and hairline borders.
   */
  accentRgb: string;
  /** Gradient partner for the title and the hover state of the primary CTA. */
  accentAlt: string;
  /** Lighter tint used for card hover borders. */
  accentSoft: string;
  /** Column gap of `.split` slides. Defaults to 4rem. */
  splitGap?: string;
  /** Vertical alignment of `.split` columns. Defaults to `center`. */
  splitAlign?: string;
  /**
   * Height of the `.split` grid. Defaults to `100%`, which fills the stage and
   * lets `splitAlign` position the columns within it. Set `auto` to let the
   * grid shrink to its content and sit centred in the stage instead.
   */
  splitHeight?: string;
}

interface DeckProps {
  /** Deck title, announced on the stage and used for the document outline. */
  title: string;
  theme: DeckTheme;
  /** One node per slide; the first is the title slide and is left unnumbered. */
  slides: ReactNode[];
}

// Matches the .slide opacity/transform transition, plus a little slack. Paging
// is locked for this long so a held arrow key can't skip through the deck.
const TRANSITION_MS = 450;
const SWIPE_THRESHOLD_PX = 50;

// Keys that page the deck, and by how much.
const STEP_KEYS: Record<string, number> = {
  ArrowRight: 1,
  " ": 1,
  PageDown: 1,
  ArrowLeft: -1,
  PageUp: -1,
};

export default function Deck({ title, theme, slides }: DeckProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // `current` is mirrored into a ref so the key and touch handlers can read the
  // live slide without the effects re-binding on every step.
  const currentRef = useRef(0);
  const locked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= total) return;
      if (next === currentRef.current || locked.current) return;

      locked.current = true;
      currentRef.current = next;
      setCurrent(next);

      if (unlockTimer.current) clearTimeout(unlockTimer.current);
      unlockTimer.current = setTimeout(() => {
        locked.current = false;
      }, TRANSITION_MS);
    },
    [total],
  );

  useEffect(
    () => () => {
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    },
    [],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const step = STEP_KEYS[e.key];

      if (step) {
        e.preventDefault();
        goTo(currentRef.current + step);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, total]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(dx) > SWIPE_THRESHOLD_PX) {
        goTo(currentRef.current + (dx > 0 ? 1 : -1));
      }
    };

    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchend", onTouchEnd);
    };
  }, [goTo]);

  const style = {
    "--deck-accent": theme.accent,
    "--deck-accent-rgb": theme.accentRgb,
    "--deck-accent-alt": theme.accentAlt,
    "--deck-accent-soft": theme.accentSoft,
    "--deck-split-gap": theme.splitGap,
    "--deck-split-align": theme.splitAlign,
    "--deck-split-height": theme.splitHeight,
  } as CSSProperties;

  return (
    <div
      ref={stageRef}
      className={s.deck}
      style={style}
      role="region"
      aria-roledescription="slide deck"
      aria-label={title}
    >
      {slides.map((slide, i) => {
        const isActive = i === current;
        return (
          <div
            key={i}
            className={`${s.slide}${isActive ? ` ${s.active}` : ""}`}
            aria-hidden={!isActive}
            inert={!isActive}
          >
            {/* The title slide carries no number; the rest count from one. */}
            {i > 0 && (
              <div className={s.slideNum}>
                {String(i).padStart(2, "0")} / {total - 1}
              </div>
            )}
            {slide}
          </div>
        );
      })}

      <Link href="/slides" className={s.exit}>
        <span aria-hidden>&#8249;</span> All decks
      </Link>

      <nav className={s.nav} aria-label="Slide navigation">
        <button
          type="button"
          className={s.navBtn}
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <span aria-hidden>&#8249;</span>
        </button>

        <div className={s.navDots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${s.navDot}${i === current ? ` ${s.active}` : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>

        <span className={s.counter} aria-live="polite">
          {current + 1} / {total}
        </span>

        <button
          type="button"
          className={s.navBtn}
          onClick={() => goTo(current + 1)}
          disabled={current === total - 1}
          aria-label="Next slide"
        >
          <span aria-hidden>&#8250;</span>
        </button>
      </nav>
    </div>
  );
}
