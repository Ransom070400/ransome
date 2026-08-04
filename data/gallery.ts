export interface GalleryItem {
  id: string;
  caption: string;
  date: string; // human-readable
  /**
   * Optional photo — a local path ("/images/gallery/g1.jpg") OR a remote link
   * (Imgur/Cloudinary URL, or `driveImage("<drive id or link>")` from
   * "@/lib/images"). Replaces the gradient automatically; falls back to it if
   * the link fails.
   */
  src?: string;
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
    src: "/images/gallery/g1.jpg",
    from: "#1e3a8a",
    to: "#0ea5e9",
    span: "tall",
  },
  {
    id: "g2",
    caption: "ETHGlobal Lisbon — Workshop",
    date: "Apr 2026 · Lisbon",
    src: "/images/gallery/g2.jpg",
    from: "#312e81",
    to: "#6366f1",
  },
  {
    id: "g3",
    caption: "Sui Builder House",
    date: "Mar 2026 · Accra",
    src: "/images/gallery/g3.jpg",
    from: "#0f766e",
    to: "#22d3ee",
    span: "wide",
  },
  {
    id: "g4",
    caption: "Developer Workshop — AR Demo",
    date: "Nov 2025 · Lagos",
    src: "/images/gallery/g4.jpg",
    from: "#7c3aed",
    to: "#ec4899",
  },
  {
    id: "g5",
    caption: "Web3Bridge Hackathon Mentoring",
    date: "Aug 2025 · Abuja",
    src: "/images/gallery/g5.jpg",
    from: "#b45309",
    to: "#f59e0b",
    span: "tall",
  },
  {
    id: "g6",
    caption: "Mobile Nights — Nairobi",
    date: "Jun 2025 · Nairobi",
    src: "/images/gallery/g6.jpg",
    from: "#065f46",
    to: "#34d399",
  },
  {
    id: "g7",
    caption: "AI Engineers Meetup Panel",
    date: "Apr 2025 · Lagos",
    src: "/images/gallery/g7.jpg",
    from: "#1e40af",
    to: "#60a5fa",
    span: "wide",
  },
  {
    id: "g8",
    caption: "GDG Workshop",
    date: "Feb 2025 · Enugu",
    src: "/images/gallery/g8.jpg",
    from: "#9f1239",
    to: "#fb7185",
  },
];
