import type { Stat } from "@/data/stats";

export default function StatBox({ value, label }: Stat) {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface-2/60 p-5 text-center backdrop-blur transition-colors hover:border-accent/50">
      <div className="text-3xl font-bold text-text sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </div>
  );
}
