export type TalkType = "Talk" | "Workshop" | "Panel" | "Demo" | "Keynote";

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string; // ISO YYYY-MM-DD
  type: TalkType;
  location: string;
  countryCode: string; // ISO 3166-1 alpha-2 for flag emoji
  description?: string;
  link?: string;
  videoUrl?: string;
}

export const speaking: Talk[] = [
  {
    id: "0g-ai-infra-2026",
    title: "Building on Decentralized AI Infrastructure with 0G",
    event: "0G Ecosystem Summit",
    date: "2026-06-14",
    type: "Keynote",
    location: "Lagos, Nigeria",
    countryCode: "NG",
    description:
      "How verifiable compute and decentralized storage change what mobile AI apps can do.",
    link: "#",
  },
  {
    id: "ethglobal-lisbon-rn",
    title: "Shipping Web3 to Mobile with React Native",
    event: "ETHGlobal Lisbon",
    date: "2026-04-20",
    type: "Workshop",
    location: "Lisbon, Portugal",
    countryCode: "PT",
    description:
      "A hands-on workshop wiring wallets, signing, and on-chain reads into a React Native app.",
    link: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "sui-builder-house",
    title: "zkLogin & Mobile: Onboarding the Next Billion",
    event: "Sui Builder House",
    date: "2026-03-08",
    type: "Talk",
    location: "Accra, Ghana",
    countryCode: "GH",
    description:
      "Frictionless auth on Sui and why mobile-first onboarding matters for Africa.",
    link: "#",
  },
  {
    id: "devrel-panel-eth",
    title: "The Future of DevRel in Web3",
    event: "EthCC Community Track",
    date: "2026-02-11",
    type: "Panel",
    location: "Brussels, Belgium",
    countryCode: "BE",
    description:
      "Panel on measuring developer experience and building sustainable ecosystems.",
    link: "#",
  },
  {
    id: "rn-filament-ar",
    title: "Real-time AR Face Filters in React Native",
    event: "React Native Africa",
    date: "2025-11-22",
    type: "Demo",
    location: "Lagos, Nigeria",
    countryCode: "NG",
    description:
      "Live demo combining VisionCamera frame processors with react-native-filament.",
    link: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "0g-compute-workshop",
    title: "Verifiable AI Inference with 0G Compute",
    event: "0G Devs Workshop",
    date: "2025-10-05",
    type: "Workshop",
    location: "Remote",
    countryCode: "NG",
    description:
      "Calling models through the 0G Compute Network and verifying results on-chain.",
    link: "#",
  },
  {
    id: "hackathon-mentor-web3",
    title: "From Idea to Testnet in 36 Hours",
    event: "Web3Bridge Hackathon",
    date: "2025-08-30",
    type: "Talk",
    location: "Abuja, Nigeria",
    countryCode: "NG",
    description:
      "Mentorship keynote for first-time Web3 builders shipping under a deadline.",
    link: "#",
  },
  {
    id: "mobile-eng-perf",
    title: "Performance Patterns for Production React Native",
    event: "Droidcon / Mobile Nights",
    date: "2025-06-18",
    type: "Talk",
    location: "Nairobi, Kenya",
    countryCode: "KE",
    description:
      "Lists, native modules, and profiling techniques for buttery-smooth apps.",
    link: "#",
  },
  {
    id: "ai-mobile-panel",
    title: "On-device vs Decentralized AI for Mobile",
    event: "AI Engineers Meetup",
    date: "2025-04-12",
    type: "Panel",
    location: "Lagos, Nigeria",
    countryCode: "NG",
    description: "Trade-offs between on-device inference and decentralized compute.",
    link: "#",
  },
  {
    id: "intro-react-native",
    title: "Your First React Native App",
    event: "Google Developer Group",
    date: "2025-02-02",
    type: "Workshop",
    location: "Enugu, Nigeria",
    countryCode: "NG",
    description: "Beginner-friendly workshop that kicked off a semester of mentoring.",
    link: "#",
  },
];
