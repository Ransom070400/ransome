import type { ComponentType } from "react";
import ZeroGravityDeck from "@/components/deck/ZeroGravityDeck";
import VibeCodingDeck from "@/components/deck/VibeCodingDeck";

export interface DeckEntry {
  /** URL segment under /slides. */
  slug: string;
  title: string;
  description: string;
  /** Short topic label shown on the index card. */
  tag: string;
  /** Where and when the deck was presented. */
  context: string;
  slides: number;
  /** The deck itself. Rendered full-bleed at /slides/[slug]. */
  component: ComponentType<{ title: string }>;
}

export const decks: DeckEntry[] = [
  {
    slug: "0g",
    title: "Understanding 0G — Intro for Builders",
    description:
      "The first blockchain built for AI. Storage, compute, data availability — explained for builders.",
    tag: "Web3 · AI",
    context: "Workshop deck",
    slides: 13,
    component: ZeroGravityDeck,
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding Starter Guide",
    description:
      "Plan with the smartest, code with the fastest. 13 best practices, common pitfalls, and the BMAD method.",
    tag: "Dev · AI",
    context: "Workshop deck",
    slides: 14,
    component: VibeCodingDeck,
  },
];

export function getDeck(slug: string) {
  return decks.find((deck) => deck.slug === slug);
}
