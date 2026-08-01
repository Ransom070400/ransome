export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  href: string;
}

export const email = "hello@ransomeze.com";

export const social: SocialLink[] = [
  { id: "x", label: "Twitter / X", handle: "@ransomeze", href: "https://x.com/" },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/ransomeze",
    href: "https://linkedin.com/",
  },
  { id: "github", label: "GitHub", handle: "@ransomeze", href: "https://github.com/" },
  { id: "telegram", label: "Telegram", handle: "@ransomeze", href: "https://t.me/" },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@ransomeze",
    href: "https://youtube.com/",
  },
  {
    id: "medium",
    label: "Medium",
    handle: "@ransomeze",
    href: "https://medium.com/",
  },
];
