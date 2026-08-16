import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { decks } from "@/data/decks";

export const metadata: Metadata = {
  title: "Slides — Ransom Eze",
  description:
    "Workshop and talk decks from Ransom Eze, presented in the browser. Arrow keys or swipe to move through them.",
};

export default function SlidesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
      <Link
        href="/"
        className="label inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
      >
        <span aria-hidden>&#8592;</span> Back to portfolio
      </Link>

      <Reveal className="mb-12 mt-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Slides
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft text-balance">
          The decks I present from, running live rather than trapped in a PDF.
          Open one and use the arrow keys, the dots, or a swipe to move through
          it.
        </p>
      </Reveal>

      <ul className="flex flex-col gap-4">
        {decks.map((deck, i) => (
          <li key={deck.slug}>
            <Reveal delay={i * 0.08}>
              <Link
                href={`/slides/${deck.slug}`}
                className="group block rounded-2xl border border-line bg-bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.3)] sm:p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Stacked-sheets mark, standing in for a deck thumbnail. */}
                  <span
                    aria-hidden
                    className="relative mt-1 hidden h-10 w-10 shrink-0 sm:block"
                  >
                    <span className="absolute inset-x-1 top-0 h-8 rounded-md border border-line bg-bg-page transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span className="absolute inset-x-0 top-2 h-8 rounded-md border border-ink/15 bg-bg-card transition-colors duration-300 group-hover:border-purple/50" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-purple">
                      {deck.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {deck.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
                      <span className="rounded-full bg-ink/[0.05] px-2.5 py-1">
                        {deck.tag}
                      </span>
                      <span>{deck.slides} slides</span>
                      <span aria-hidden>·</span>
                      <span>{deck.context}</span>
                    </div>
                  </div>

                  <span
                    aria-hidden
                    className="mt-1 text-2xl leading-none text-ink/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple"
                  >
                    &#8250;
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </main>
  );
}
