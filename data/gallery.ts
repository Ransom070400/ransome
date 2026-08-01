export interface GalleryItem {
  id: string;
  caption: string;
  date: string; // human-readable
  // Gradient tokens used as tasteful placeholders until real photos are added.
  from: string;
  to: string;
  span?: "tall" | "wide";
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    caption: "0G Ecosystem Summit — Keynote",
    date: "Jun 2026 · Lagos",
    from: "#1e3a8a",
    to: "#0ea5e9",
    span: "tall",
  },
  {
    id: "g2",
    caption: "ETHGlobal Lisbon — Workshop",
    date: "Apr 2026 · Lisbon",
    from: "#312e81",
    to: "#6366f1",
  },
  {
    id: "g3",
    caption: "Sui Builder House",
    date: "Mar 2026 · Accra",
    from: "#0f766e",
    to: "#22d3ee",
    span: "wide",
  },
  {
    id: "g4",
    caption: "React Native Africa — AR Demo",
    date: "Nov 2025 · Lagos",
    from: "#7c3aed",
    to: "#ec4899",
  },
  {
    id: "g5",
    caption: "Web3Bridge Hackathon Mentoring",
    date: "Aug 2025 · Abuja",
    from: "#b45309",
    to: "#f59e0b",
    span: "tall",
  },
  {
    id: "g6",
    caption: "Mobile Nights — Nairobi",
    date: "Jun 2025 · Nairobi",
    from: "#065f46",
    to: "#34d399",
  },
  {
    id: "g7",
    caption: "AI Engineers Meetup Panel",
    date: "Apr 2025 · Lagos",
    from: "#1e40af",
    to: "#60a5fa",
    span: "wide",
  },
  {
    id: "g8",
    caption: "GDG Workshop — First RN App",
    date: "Feb 2025 · Enugu",
    from: "#9f1239",
    to: "#fb7185",
  },
];
