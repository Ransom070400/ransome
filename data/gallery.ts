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

const BUCKET =
  "https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/My%20prtfolio";

export const gallery: GalleryItem[] = [
  {
    id: "etf-2026",
    caption: "Enugu Tech Fest",
    date: "2026 · Enugu",
    src: `${BUCKET}/IMG_1950.jpg`,
    from: "#1b1030",
    to: "#8b5cf6",
    span: "wide",
  },
  {
    id: "etf-hackathon-2026",
    caption: "Enugu Tech Fest Hackathon",
    date: "2026 · Enugu",
    src: `${BUCKET}/IMG_1951.jpg`,
    from: "#4c1d95",
    to: "#a78bfa",
  },
  {
    id: "0g-onsite-lagos-2026",
    caption: "0G Onsite",
    date: "2026 · Lagos",
    src: `${BUCKET}/IMG_1952.JPG`,
    from: "#0b0b0d",
    to: "#475569",
  },
  {
    id: "0g-etf-bootcamp-2026",
    caption: "0G Bootcamp — Enugu Tech Fest",
    date: "2026 · Enugu",
    src: `${BUCKET}/IMG_1953.JPG`,
    from: "#134e4a",
    to: "#2dd4bf",
  },
  {
    id: "0g-event-lagos-2026",
    caption: "0G Event",
    date: "2026 · Lagos",
    src: `${BUCKET}/IMG_1954.JPG`,
    from: "#164e63",
    to: "#38bdf8",
  },
  {
    id: "suinami-lagos-2025",
    caption: "Suinami",
    date: "2025 · Lagos",
    src: `${BUCKET}/IMG_1955.JPG`,
    from: "#075985",
    to: "#7dd3fc",
    span: "wide",
  },
  {
    id: "sui-bus-ride-enugu",
    caption: "Sui Community Bus Ride",
    date: "2025 · Enugu",
    src: `${BUCKET}/IMG_1937.jpg`,
    from: "#0f766e",
    to: "#22d3ee",
    span: "wide",
  },
  {
    id: "sui-community-enugu",
    caption: "Sui Community Event",
    date: "2025 · Enugu",
    src: `${BUCKET}/IMG_1938.jpg`,
    from: "#1e3a8a",
    to: "#0ea5e9",
  },
  {
    id: "sui-bootcamp-lagos",
    caption: "Sui Bootcamp — Sui Hub",
    date: "2025 · Lagos",
    src: `${BUCKET}/IMG_1939.jpg`,
    from: "#312e81",
    to: "#6366f1",
    span: "wide",
  },
  {
    id: "sui-move-anambra",
    caption: "Sui Move Workshop",
    date: "2025 · Anambra",
    src: `${BUCKET}/IMG_1940.jpg`,
    from: "#065f46",
    to: "#34d399",
  },
  {
    id: "sui-move-lokoja",
    caption: "Sui Move Workshop",
    date: "2025 · Lokoja",
    src: `${BUCKET}/IMG_1941.jpg`,
    from: "#7c3aed",
    to: "#ec4899",
  },
  {
    id: "build-on-sui-enugu",
    caption: "Build on Sui Workshop",
    date: "2025 · Enugu",
    src: `${BUCKET}/IMG_1942.jpg`,
    from: "#1e40af",
    to: "#60a5fa",
    span: "wide",
  },
  {
    id: "sui-move-unn",
    caption: "Sui Move Workshop — University of Nigeria, Nsukka",
    date: "2025 · Nsukka",
    src: `${BUCKET}/IMG_1943.jpg`,
    from: "#b45309",
    to: "#f59e0b",
  },
  {
    id: "sui-community-ph",
    caption: "Sui Community",
    date: "2025 · Port Harcourt",
    src: `${BUCKET}/IMG_1945.jpg`,
    from: "#9f1239",
    to: "#fb7185",
  },
  {
    id: "sui-lagos-hackfest",
    caption: "Sui Lagos Hackfest",
    date: "2024 · Lagos",
    src: `${BUCKET}/IMG_1946.jpg`,
    from: "#0e7490",
    to: "#67e8f9",
    span: "wide",
  },
  {
    id: "avax-meetup",
    caption: "Avalanche Meetup",
    date: "2023",
    src: `${BUCKET}/IMG_1947.jpg`,
    from: "#991b1b",
    to: "#f87171",
  },
  {
    id: "google-dev-event",
    caption: "Google Developer Event",
    date: "2024",
    src: `${BUCKET}/IMG_1948.jpg`,
    from: "#1d4ed8",
    to: "#facc15",
    span: "wide",
  },
];
