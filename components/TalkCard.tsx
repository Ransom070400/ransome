import type { Talk } from "@/data/speaking";
import { flagEmoji, formatMonthYear } from "@/lib/format";

const typeStyles: Record<Talk["type"], string> = {
  Keynote: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  Talk: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  Workshop: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
  Panel: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  Demo: "bg-pink-500/15 text-pink-300 ring-pink-500/30",
};

export default function TalkCard({ talk }: { talk: Talk }) {
  const Wrapper = talk.link ? "a" : "div";
  return (
    <Wrapper
      {...(talk.link ? { href: talk.link } : {})}
      className="group flex h-full flex-col rounded-lg border border-border-subtle bg-surface-2/60 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${typeStyles[talk.type]}`}
        >
          {talk.type}
        </span>
        <span className="text-sm text-text-muted">
          {formatMonthYear(talk.date)}
        </span>
      </div>

      <h3 className="text-lg font-semibold leading-snug text-text group-hover:text-white">
        {talk.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-accent">{talk.event}</p>

      {talk.description && (
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {talk.description}
        </p>
      )}

      <div className="mt-auto flex items-center gap-2 pt-4 text-sm text-text-muted">
        <span aria-hidden>{flagEmoji(talk.countryCode)}</span>
        <span>{talk.location}</span>
        {talk.videoUrl && (
          <span className="ml-auto text-accent group-hover:underline">
            Watch →
          </span>
        )}
      </div>
    </Wrapper>
  );
}
