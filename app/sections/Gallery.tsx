"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import GalleryLightbox from "@/components/GalleryLightbox";
import { gallery, type GalleryItem } from "@/data/gallery";

/**
 * One masonry tile. The photo is rendered at its natural aspect ratio — no
 * object-cover — so faces near the frame edge survive. width/height reserve
 * the exact box before the bytes land, so the column never reflows.
 */
function Photo({
  item,
  onOpen,
  priority,
}: {
  item: GalleryItem;
  onOpen: () => void;
  priority: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const ratio = `${item.width} / ${item.height}`;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View photo: ${item.caption}`}
      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[22px] text-left"
    >
      {item.src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.caption}
          width={item.width}
          height={item.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div style={{ aspectRatio: ratio }} className="relative w-full">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
        </div>
      )}

      {/* scrim only across the caption band, so the photo stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent pt-16">
        <div className="p-4">
          <p className="font-display font-semibold text-white drop-shadow">
            {item.caption}
          </p>
          <p className="label text-white/80">{item.date}</p>
        </div>
      </div>

      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading
        index="04"
        kicker="Gallery"
        title="Moments."
        description="Photos from 100+ events across Africa and beyond — keynotes, workshops, and the late-night hackathon grind."
      />

      {/* CSS multi-column masonry: every photo keeps its own height. */}
      <div className="columns-1 gap-3 [column-fill:balance] sm:columns-2 lg:columns-3">
        {gallery.map((g, i) => (
          <Reveal
            key={g.id}
            mode="scale"
            delay={(i % 3) * 0.05}
            className="mb-3 break-inside-avoid"
          >
            <Photo item={g} onOpen={() => setOpen(i)} priority={i < 3} />
          </Reveal>
        ))}
      </div>

      <GalleryLightbox
        items={gallery}
        index={open}
        onClose={() => setOpen(null)}
        onIndex={setOpen}
      />
    </section>
  );
}
