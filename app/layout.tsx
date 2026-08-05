import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideRail from "@/components/SideRail";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ransom Eze — Software Engineer & Developer Relations",
  description:
    "The portfolio of Ransom Eze — Software Engineer & DevRel building products on decentralized infrastructure and helping thousands of developers ship their own. Now at 0G Labs.",
  openGraph: {
    title: "Ransom Eze — Software Engineer & Developer Relations",
    description:
      "Building on decentralized AI infrastructure and growing developer communities. 4 countries, 123+ events, 1000+ developers mentored.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="canvas-grain min-h-full">
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <SideRail />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
