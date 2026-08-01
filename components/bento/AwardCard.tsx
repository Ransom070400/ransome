import { Terminal } from "lucide-react";
import CountUp from "@/components/CountUp";

/** Black + yellow split recognition card. */
export default function AwardCard() {
  return (
    <div className="flex h-full">
      <div className="flex flex-1 items-center justify-center bg-bg-dark p-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-yellow">
          <Terminal className="h-7 w-7" />
        </span>
      </div>
      <div className="flex flex-[1.4] flex-col justify-center bg-yellow p-5 text-ink">
        <div className="font-display text-4xl font-bold leading-none">
          <CountUp to={100} suffix="+" />
        </div>
        <p className="label mt-1.5 text-ink/60">Developers Mentored</p>
      </div>
    </div>
  );
}
