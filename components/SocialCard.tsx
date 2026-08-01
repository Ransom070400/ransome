import type { Mention } from "@/data/buzz";
import { formatMonthYear } from "@/lib/format";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function SocialCard({ mention }: { mention: Mention }) {
  const Wrapper = mention.url ? "a" : "div";
  return (
    <Wrapper
      {...(mention.url ? { href: mention.url } : {})}
      className="block break-inside-avoid rounded-lg border border-border-subtle bg-surface-2/60 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
          {initials(mention.author)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-text">{mention.author}</p>
          <p className="truncate text-sm text-text-muted">{mention.handle}</p>
        </div>
        <span className="ml-auto text-accent" aria-hidden>
          𝕏
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text">{mention.text}</p>

      <p className="mt-3 text-xs text-text-muted">
        {formatMonthYear(mention.date)}
      </p>
    </Wrapper>
  );
}
