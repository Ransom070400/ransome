import { Play } from "lucide-react";

/** Featured media card — gradient placeholder with a play affordance. */
export default function FeaturedCard() {
  return (
    <div className="relative h-full min-h-[220px] w-full">
      {/* Placeholder visual until a real screenshot/photo is dropped in */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b1030] via-purple to-[#22d3ee]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.28),transparent_55%)]" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="label w-fit rounded-full bg-black/25 px-3 py-1 text-white/90 backdrop-blur">
          Featured · On Stage
        </span>

        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 translate-x-0.5 fill-ink" />
          </span>
          <div className="text-white">
            <p className="font-display text-lg font-semibold leading-tight">
              Building on Decentralized AI
            </p>
            <p className="text-sm text-white/70">0G Ecosystem Summit · 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
