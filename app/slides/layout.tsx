import { IBM_Plex_Mono, Outfit } from "next/font/google";

/*
 * The decks are typeset in Outfit and IBM Plex Mono rather than the site's
 * Inter/Space Grotesk pairing. Loading them here keeps the extra two families
 * off every other route.
 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-deck-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function SlidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${outfit.variable} ${plexMono.variable}`}>{children}</div>;
}
