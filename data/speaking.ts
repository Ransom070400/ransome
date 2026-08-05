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
  /** Audience size, shown as a badge when set. */
  attendance?: number;
}

export const speaking: Talk[] = [
  {
    id: "0g-onsite-lagos-robotics",
    title: "Robotics with the 0G Compute API",
    event: "0G Onsite Lagos",
    date: "2026-05-29",
    type: "Workshop",
    location: "Lagos, Nigeria",
    countryCode: "NG",
    description:
      "Hands-on robotics session where builders used the 0G Compute API with Hugging Face models.",
    link: "https://x.com/ezeransome/status/2060272990814663064",
  },
  {
    id: "finnahq-enugu",
    title: "On-ramps and the Road to Decentralized AI",
    event: "FinnaHQ",
    date: "2026-04-21",
    type: "Talk",
    location: "Enugu, Nigeria",
    countryCode: "NG",
    description:
      "On the growing need for reliable on- and off-ramps and the deepening dependency on crypto infrastructure. Even in a down market the demand holds — crypto still powers inference and model fine-tuning, and that need only grows as we move toward decentralized AI computing.",
    link: "https://x.com/ezeransome/status/2046462943152189933",
  },
  {
    id: "0g-hackafest-lagos",
    title: "0G Onsite Hackafest",
    event: "0G Labs",
    date: "2026-04-08",
    type: "Workshop",
    location: "Lagos, Nigeria",
    countryCode: "NG",
    description:
      "0G's onsite build weekend in Lagos — walking teams through the stack and supporting them from first commit to demo.",
    link: "https://x.com/ezeransome/status/2041843292267041023",
  },
  {
    id: "enugu-tech-fest-0g",
    title: "Building on 0G",
    event: "Enugu Tech Fest",
    date: "2026-02-28",
    type: "Keynote",
    location: "Enugu, Nigeria",
    countryCode: "NG",
    description:
      "Main-stage keynote on building for decentralized AI infrastructure.",
    link: "https://x.com/ezeransome/status/2027640644764639641",
    videoUrl:
      "https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/My%20prtfolio/v1c044g50000d6tbd3nog65ife0b2am0.MP4",
    attendance: 15000,
  },
  {
    id: "etf-hackathon-enugu",
    title: "Technical Workshops, Judging & Mentorship",
    event: "Enugu Tech Fest Hackathon",
    date: "2026-02-22",
    type: "Workshop",
    location: "Enugu, Nigeria",
    countryCode: "NG",
    description:
      "Coordinated the technical workshop track, judged hackathon submissions, and mentored teams through the build.",
    link: "https://x.com/ezeransome/status/2025694589902795222",
  },
  {
    id: "sui-ethiopia-activation",
    title: "Sui Ethiopia Activation",
    event: "Sui Ethiopia",
    date: "2025-11-12",
    type: "Talk",
    location: "Ethiopia",
    countryCode: "ET",
    description:
      "Sui's activation event in Ethiopia — meeting the local developer community and introducing them to building on Sui.",
    link: "https://x.com/SuiEthiopia/status/1988598953064210466",
  },
  {
    id: "sui-move-abuja",
    title: "Developer Onboarding to Sui & Move",
    event: "Sui Move Workshop",
    date: "2025-11-23",
    type: "Workshop",
    location: "Abuja, Nigeria",
    countryCode: "NG",
    description:
      "Developer onboarding workshop for Sui and the Move programming language.",
    link: "https://x.com/ezeransome/status/1992645584084451476",
  },
  {
    id: "sui-move-ebonyi",
    title: "Onboarding Devs to Sui Move",
    event: "Sui Move Workshop",
    date: "2025-11-02",
    type: "Workshop",
    location: "Ebonyi, Nigeria",
    countryCode: "NG",
    description: "Onboarding developers to Sui Move and the wider Sui stack.",
    link: "https://x.com/ezeransome/status/1984922182737093016",
  },
  {
    id: "eth-enugu-workshop",
    title: "ETH Enugu Workshop",
    event: "ETH Enugu",
    date: "2025-08-20",
    type: "Workshop",
    location: "Enugu, Nigeria",
    countryCode: "NG",
    description:
      "Hands-on Ethereum workshop with the Enugu developer community, taking builders from fundamentals to a working contract.",
    link: "https://x.com/ezeransome/status/1958131031355134123",
  },
  {
    id: "build-on-sui-port-harcourt",
    title: "Build on Sui",
    event: "Build on Sui Workshop",
    date: "2025-08-04",
    type: "Workshop",
    location: "Port Harcourt, Nigeria",
    countryCode: "NG",
    description:
      "Introducing Port Harcourt developers to the Sui stack and what it takes to ship their first on-chain app.",
    link: "https://x.com/ezeransome/status/1952303956530544837",
  },
];
