import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ransom EZE — React Native Engineer & Developer Relations",
  description:
    "Ransom EZE builds performant mobile apps on decentralized infrastructure and helps thousands of developers ship their own. React Native Engineer & DevRel, now at 0G Labs.",
  openGraph: {
    title: "Ransom EZE — React Native Engineer & Developer Relations",
    description:
      "Building on decentralized AI infrastructure and growing developer communities. 4 countries, 123+ events, 100+ developers mentored.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
