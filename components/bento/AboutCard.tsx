import { Sparkles, Mail } from "lucide-react";
import { email } from "@/data/social";

const sideLabels = ["Speaking", "Projects", "Community", "Contact"];

/** Tall purple hero card: portrait, name, role, contact + vertical labels. */
export default function AboutCard() {
  return (
    <div className="relative flex h-full flex-col justify-between p-7">
      {/* Vertical side labels on the right edge */}
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 md:block">
        <span className="vertical-text label whitespace-nowrap text-white/45">
          {sideLabels.join("  ·  ")}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
          <Sparkles className="h-4 w-4" />
        </span>
        <span className="label text-white/80">About Me</span>
      </div>

      {/* Portrait — gradient-ringed monogram placeholder */}
      <div className="my-6 flex justify-center">
        <div className="rounded-full bg-gradient-to-br from-white/70 via-white/20 to-transparent p-[3px]">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-purple/40 backdrop-blur">
            <span className="font-display text-5xl font-bold text-white">RE</span>
          </div>
        </div>
      </div>

      <div>
        <p className="label text-white/70">I&apos;m</p>
        <h2 className="mt-1 font-display text-4xl font-bold leading-none text-white">
          Ransom EZE
        </h2>
        <div className="mt-4 inline-flex rounded-full bg-white/15 px-3 py-1">
          <span className="label text-white">React Native · DevRel</span>
        </div>

        <a
          href={`mailto:${email}`}
          className="mt-5 flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
        >
          <Mail className="h-4 w-4" />
          {email}
        </a>
      </div>
    </div>
  );
}
