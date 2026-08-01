export type ProjectStatus = "In Progress" | "Shipped" | "Archived";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "askzero",
    name: "AskZero",
    description:
      "An AI-powered mobile app that runs inference over decentralized infrastructure, pairing 0G Compute for verifiable answers with 0G Storage for durable context.",
    tech: ["React Native", "0G Compute", "AI", "TypeScript"],
    status: "In Progress",
    link: "#",
    github: "#",
  },
  {
    id: "knitnode",
    name: "KnitNode",
    description:
      "Decentralized vector search built on 0G Storage — an HNSW index with a native addon, packaged as developer-focused tooling for building semantic search without a central server.",
    tech: ["Node.js", "0G Storage", "HNSW", "Native Addon"],
    status: "In Progress",
    link: "#",
    github: "#",
  },
  {
    id: "pingou",
    name: "Pingou",
    description:
      "A social networking platform focused on meaningful real-world connections — built mobile-first across both frontend and backend, with an emphasis on smooth, real-time interactions.",
    tech: ["React Native", "Realtime", "Node.js"],
    status: "In Progress",
    link: "#",
    github: "#",
  },
  {
    id: "ar-face-filter",
    name: "AR Face Filter",
    description:
      "Real-time augmented-reality face filters combining VisionCamera frame processors with react-native-filament for GPU-accelerated 3D rendering on device.",
    tech: ["React Native", "VisionCamera", "Filament", "AR"],
    status: "Shipped",
    github: "#",
  },
  {
    id: "aula-f75-driver",
    name: "AULA F75 macOS Driver",
    description:
      "A userspace HID driver that unlocks the AULA F75 keyboard's custom features on macOS by decoding and speaking its raw HID protocol.",
    tech: ["Swift", "HID", "macOS", "C"],
    status: "Shipped",
    github: "#",
  },
];
