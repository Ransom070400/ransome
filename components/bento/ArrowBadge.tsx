import { ArrowUpRight } from "lucide-react";

/** Corner ↗ indicator that rotates/pops on card hover. */
export default function ArrowBadge({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const styles =
    tone === "light"
      ? "bg-white/15 text-white group-hover:bg-white/25"
      : "bg-ink/[0.06] text-ink group-hover:bg-ink group-hover:text-white";
  return (
    <span
      aria-hidden
      className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${styles}`}
    >
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
    </span>
  );
}
