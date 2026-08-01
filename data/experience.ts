export type ExperienceType = "DevRel" | "Engineering" | "Both";

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: ExperienceType;
}

export const experience: Experience[] = [
  {
    id: "askzero",
    role: "Founder & Software Engineer",
    company: "AskZero",
    period: "Present",
    description:
      "Founded and built AskZero, an AI-powered mobile app leveraging decentralized infrastructure. Leading product, architecture, and technical direction across AI, mobile, and Web3 integration.",
    type: "Engineering",
  },
  {
    id: "knitnode",
    role: "Founder",
    company: "KnitNode",
    period: "Present",
    description:
      "Founded KnitNode to build developer-focused tools and products, with an emphasis on practical solutions for developers and emerging technologies.",
    type: "Engineering",
  },
  {
    id: "pingou",
    role: "Lead Full-Stack Developer",
    company: "Pingou",
    period: "Present",
    description:
      "Leading development of Pingou, a social networking platform focused on meaningful real-world connections — owning both frontend and backend architecture and feature delivery.",
    type: "Engineering",
  },
  {
    id: "0g-labs",
    role: "Technical Ambassador",
    company: "0G Labs",
    period: "Dec 2025 – Present",
    description:
      "Driving developer adoption across the 0G ecosystem through technical education, workshops, hackathons, community programs, content, and developer support — improving onboarding, engagement, and long-term growth.",
    type: "DevRel",
  },
  {
    id: "sui-tutor",
    role: "Sui Developer Tutor",
    company: "Sui",
    period: "May 2025 – Jan 2026",
    description:
      "Mentored developers learning the Sui ecosystem through workshops, educational sessions, and hands-on guidance, helping them build decentralized apps with Move.",
    type: "DevRel",
  },
  {
    id: "metamuse",
    role: "Frontend Engineer",
    company: "MetaMuse",
    period: "Nov 2024 – Jun 2025",
    description:
      "Developed frontend features for a decentralized platform, collaborating closely with the team to deliver performant, user-friendly Web3 experiences.",
    type: "Engineering",
  },
  {
    id: "flowx",
    role: "Frontend Engineer",
    company: "FlowX",
    period: "Mar 2025 – May 2025",
    description:
      "Built frontend interfaces for a Web3 financial application, translating product requirements into responsive and intuitive user experiences.",
    type: "Engineering",
  },
  {
    id: "verichain",
    role: "Frontend Engineer",
    company: "VeriChain",
    period: "Apr 2025",
    description:
      "Contributed to VeriChain's frontend, implementing product features and improving the overall user experience.",
    type: "Engineering",
  },
  {
    id: "bingo",
    role: "Technical Writer",
    company: "Bingo",
    period: "Feb 2024 – May 2024",
    description:
      "Created technical documentation and educational content, simplifying complex concepts into accessible resources for developers and users.",
    type: "DevRel",
  },
];
