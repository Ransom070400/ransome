import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { decks, getDeck } from "@/data/decks";

interface DeckPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }));
}

export async function generateMetadata({
  params,
}: DeckPageProps): Promise<Metadata> {
  const { slug } = await params;
  const deck = getDeck(slug);

  if (!deck) return {};

  return {
    title: `${deck.title} — Slides`,
    description: deck.description,
    openGraph: {
      title: deck.title,
      description: deck.description,
      type: "article",
    },
  };
}

export default async function DeckPage({ params }: DeckPageProps) {
  const { slug } = await params;
  const deck = getDeck(slug);

  if (!deck) notFound();

  const DeckComponent = deck.component;
  return <DeckComponent title={deck.title} />;
}
