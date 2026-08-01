export type ExperienceType = "DevRel" | "Engineering" | "Both";

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string; // e.g. "2024"
  endDate?: string; // omit for current
  description: string;
  type: ExperienceType;
}

export const experience: Experience[] = [
  {
    id: "0g-labs",
    title: "Developer Relations & Mobile Engineer",
    company: "0G Labs",
    startDate: "2025",
    description:
      "Building reference apps on decentralized AI infrastructure and growing the developer community through workshops, docs, and hands-on support.",
    type: "Both",
  },
  {
    id: "sui-ecosystem",
    title: "Ecosystem Engineer & Advocate",
    company: "Sui Ecosystem",
    startDate: "2024",
    endDate: "2025",
    description:
      "Shipped mobile-first onboarding demos, ran zkLogin sessions, and mentored teams building on Sui across Africa.",
    type: "Both",
  },
  {
    id: "react-native-eng",
    title: "Senior React Native Engineer",
    company: "Independent / Client Work",
    startDate: "2021",
    endDate: "2024",
    description:
      "Delivered production mobile apps with a focus on performance, native modules, camera/AR pipelines, and delightful UX.",
    type: "Engineering",
  },
  {
    id: "community-lead",
    title: "Community Lead & Mentor",
    company: "Developer Communities (GDG, Web3Bridge)",
    startDate: "2020",
    description:
      "Organized hackathons and mentored 100+ developers taking their first steps into mobile and Web3 engineering.",
    type: "DevRel",
  },
];
