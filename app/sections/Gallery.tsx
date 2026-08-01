import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments"
          description="Photos from 100+ events across Africa and beyond — keynotes, workshops, and late-night hackathons."
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.id}
              delay={(i % 4) * 0.05}
              className={
                g.span === "tall"
                  ? "row-span-2"
                  : g.span === "wide"
                    ? "col-span-2"
                    : ""
              }
            >
              <div
                className="group relative h-full w-full overflow-hidden rounded-lg border border-border-subtle"
                style={{
                  background: `linear-gradient(135deg, ${g.from}, ${g.to})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">
                    {g.caption}
                  </p>
                  <p className="text-xs text-white/70">{g.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
