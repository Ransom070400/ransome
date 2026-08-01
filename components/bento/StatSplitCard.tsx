import CountUp from "@/components/CountUp";

interface Half {
  value: number;
  suffix?: string;
  label: string;
}

/** Two stacked stats sharing one tall card, each with its own tone. */
export default function StatSplitCard({
  top,
  bottom,
}: {
  top: Half;
  bottom: Half;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col justify-center bg-mint p-6 text-ink">
        <div className="font-display text-5xl font-bold leading-none">
          <CountUp to={top.value} suffix={top.suffix} />
        </div>
        <p className="label mt-2 text-ink/60">{top.label}</p>
      </div>
      <div className="flex flex-1 flex-col justify-center bg-purple p-6 text-white">
        <div className="font-display text-5xl font-bold leading-none">
          <CountUp to={bottom.value} suffix={bottom.suffix} />
        </div>
        <p className="label mt-2 text-white/70">{bottom.label}</p>
      </div>
    </div>
  );
}
