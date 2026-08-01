import { ecosystems } from "@/data/ecosystems";

/** Dark card listing the ecosystems worked with, as clean wordmarks. */
export default function EcosystemCard() {
  return (
    <div className="flex h-full flex-col justify-between bg-bg-dark p-6 text-white">
      <span className="label text-white/50">Ecosystems</span>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {ecosystems.map((e) => (
          <span
            key={e.name}
            className="font-display text-base font-medium text-white/85 transition-colors hover:text-white"
          >
            {e.name}
          </span>
        ))}
      </div>
    </div>
  );
}
