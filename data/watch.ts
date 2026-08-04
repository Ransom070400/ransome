export interface Video {
  id: string;
  title: string;
  event: string;
  date: string; // human-readable
  /**
   * YouTube (or leave empty). Set this and the card shows a real thumbnail
   * and plays inline; empty shows a designed "coming soon" placeholder.
   */
  youtubeId: string;
}

export const watch: Video[] = [
  {
    id: "v1",
    title: "Building on Decentralized AI Infrastructure with 0G",
    event: "0G Ecosystem Summit",
    date: "Jun 2026",
    youtubeId: "",
  },
  {
    id: "v2",
    title: "Onboarding the Next Wave of Web3 Developers",
    event: "Sui Builder House",
    date: "Mar 2026",
    youtubeId: "",
  },
  {
    id: "v3",
    title: "Shipping Cross-Platform Apps with React Native",
    event: "Developer Workshop",
    date: "Nov 2025",
    youtubeId: "",
  },
  {
    id: "v4",
    title: "Developer Relations: Building Communities That Last",
    event: "DevRel Panel",
    date: "Jun 2025",
    youtubeId: "",
  },
];
