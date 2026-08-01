export interface Mention {
  id: string;
  author: string;
  handle: string;
  avatar?: string;
  text: string;
  date: string; // ISO
  url?: string;
}

export const buzz: Mention[] = [
  {
    id: "b1",
    author: "0G Labs",
    handle: "@0G_labs",
    text: "Huge shoutout to Ransom for an incredible workshop on building verifiable AI apps. The energy in the room was unmatched. 🔥",
    date: "2026-06-15",
    url: "#",
  },
  {
    id: "b2",
    author: "Ada N.",
    handle: "@ada_builds",
    text: "Went from zero to a deployed React Native app in a weekend thanks to Ransom's mentorship. Best DevRel in the game.",
    date: "2026-05-02",
    url: "#",
  },
  {
    id: "b3",
    author: "Sui Devs",
    handle: "@SuiNetwork",
    text: "Loved Ransom's zkLogin session at Builder House — clear, practical, and genuinely made mobile onboarding feel easy.",
    date: "2026-03-09",
    url: "#",
  },
  {
    id: "b4",
    author: "Tobi O.",
    handle: "@tobicodes",
    text: "That AR face filter demo in React Native was wild. Ransom makes hard native stuff look effortless.",
    date: "2025-11-23",
    url: "#",
  },
  {
    id: "b5",
    author: "Web3Bridge",
    handle: "@Web3Bridge",
    text: "Grateful to have Ransom mentor our cohort. Countless builders shipped their first testnet project because of him.",
    date: "2025-09-01",
    url: "#",
  },
  {
    id: "b6",
    author: "Chidi E.",
    handle: "@chidi_eth",
    text: "If you get a chance to catch a Ransom talk, take it. Equal parts deep engineering and pure inspiration.",
    date: "2025-06-19",
    url: "#",
  },
  {
    id: "b7",
    author: "Grace K.",
    handle: "@grace_dev",
    text: "The performance patterns talk changed how I write React Native. My lists have never been smoother. 🙏",
    date: "2025-06-20",
    url: "#",
  },
  {
    id: "b8",
    author: "AI Engineers Lagos",
    handle: "@ai_eng_lagos",
    text: "Great panel today. Ransom's take on decentralized vs on-device inference was the highlight.",
    date: "2025-04-12",
    url: "#",
  },
];
