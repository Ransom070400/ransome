import { ArrowUpRight } from "lucide-react";
import type { Talk } from "@/data/speaking";
import { flagEmoji, formatMonthYear } from "@/lib/format";

const typeStyles: Record<Talk["type"], string> = {
  Keynote: "bg-purple/15 text-purple",
  Talk: "bg-mint-deep/20 text-emerald-700",
  Workshop: "bg-violet-500/15 text-violet-700",
  Panel: "bg-yellow/40 text-amber-800",
  Demo: "bg-pink/30 text-pink-700",
};

export default function TalkCard({ talk }: { talk: Talk }) {
  const Wrapper = talk.link ? "a" : "div";
  return (
    <Wrapper
      {...(talk.link ? { href: talk.link } : {})}
      className="group relative flex h-full flex-col rounded-[22px] border border-line bg-bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]"
    >
      {talk.link && (
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-ink/[0.05] text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      )}
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeStyles[talk.type]}`}
        >
          {talk.type}
        </span>
        <span className="text-xs text-muted">{formatMonthYear(talk.date)}</span>
      </div>

      <h3 className="max-w-[85%] font-display text-lg font-semibold leading-snug text-ink">
        {talk.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-purple">{talk.event}</p>

      {talk.description && (
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {talk.description}
        </p>
      )}

      <div className="mt-auto flex items-center gap-2 pt-4 text-sm text-muted">
        <span aria-hidden>{flagEmoji(talk.countryCode)}</span>
        <span>{talk.location}</span>
      </div>
    </Wrapper>
  );
}
