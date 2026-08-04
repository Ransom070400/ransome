import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading
        index="04"
        kicker="Gallery"
        title="Moments."
        description="Photos from 100+ events across Africa and beyond — keynotes, workshops, and the late-night hackathon grind."
      />

      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((g, i) => (
          <Reveal
            key={g.id}
            mode="scale"
            delay={(i % 4) * 0.05}
            className={
              g.span === "tall"
                ? "row-span-2"
                : g.span === "wide"
                  ? "col-span-2"
                  : ""
            }
          >
            <div className="group relative h-full w-full overflow-hidden rounded-[22px]">
              <SmartImage
                src={g.src}
                alt={g.caption}
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                fallback={
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${g.from}, ${g.to})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
                  </>
                }
              />
              <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display font-semibold text-white drop-shadow">
                  {g.caption}
                </p>
                <p className="label text-white/80">{g.date}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
