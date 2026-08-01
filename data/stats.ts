export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, label: "Countries" },
  { value: 123, suffix: "+", label: "Events" },
  { value: 1000, suffix: "+", label: "Developers Mentored" },
  { value: 10, suffix: "+", label: "Hackathons" },
];
