export interface Video {
  id: string;
  title: string;
  event: string;
  date: string; // human-readable
  // YouTube video id used for the embed + thumbnail.
  youtubeId: string;
}

export const watch: Video[] = [
  {
    id: "v1",
    title: "Building on Decentralized AI Infrastructure with 0G",
    event: "0G Ecosystem Summit",
    date: "Jun 2026",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "Shipping Web3 to Mobile with React Native",
    event: "ETHGlobal Lisbon",
    date: "Apr 2026",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Real-time AR Face Filters in React Native",
    event: "React Native Africa",
    date: "Nov 2025",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: "Performance Patterns for Production React Native",
    event: "Droidcon / Mobile Nights",
    date: "Jun 2025",
    youtubeId: "dQw4w9WgXcQ",
  },
];
