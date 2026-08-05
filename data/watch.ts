export interface Video {
  id: string;
  title: string;
  event: string;
  date: string; // human-readable
  /**
   * YouTube id (the part after `v=`). Takes priority when set: the card shows
   * a real thumbnail and plays inline.
   */
  youtubeId: string;
  /**
   * Direct link to an .mp4/.mov/.webm instead. The card uses the video's own
   * frames as a silent preview and opens the full player in a lightbox.
   */
  videoUrl?: string;
  /** Shown as a badge so people know the length up front. */
  duration?: string;
}

const BUCKET =
  "https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/My%20prtfolio";

export const watch: Video[] = [
  {
    id: "etf-hackathon-day1",
    title: "Hackathon Day 1 — Implementation Walkthrough",
    event: "Enugu Tech Fest Hackathon",
    date: "Feb 2026",
    youtubeId: "",
    videoUrl: `${BUCKET}/I%20Facilitated%20@enugutechfest.ng%20hackathon%20Day%201%20was%20succesful%20we%20had%20a%20implementation%20workthroug.mp4`,
    duration: "0:38",
  },
  {
    id: "etf-hackathon-workshop",
    title: "Hackathon Workshop",
    event: "Enugu Tech Fest Hackathon",
    date: "Feb 2026",
    youtubeId: "",
    videoUrl: `${BUCKET}/Hack.3.MOV`,
    duration: "0:29",
  },
  {
    id: "build-on-sui-enugu-video",
    title: "Build on Sui — Enugu",
    event: "Build on Sui Workshop",
    date: "2025",
    youtubeId: "",
    videoUrl: `${BUCKET}/-2517880602247388661.MP4`,
    duration: "2:03",
  },
];
