"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { watch, type Video } from "@/data/watch";

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface-2/60 transition-colors hover:border-accent/50">
      <div className="relative aspect-video w-full bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt={video.title}
              className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-white shadow-lg transition-transform group-hover:scale-110">
                ▶
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-snug text-text">{video.title}</h3>
        <p className="mt-1 text-sm text-text-muted">
          {video.event} · {video.date}
        </p>
      </div>
    </div>
  );
}

export default function Watch() {
  return (
    <section id="watch" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Watch"
        title="Recorded"
        description="Recorded talks, workshop clips, and demos — grab a coffee and dive in."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {watch.map((video, i) => (
          <Reveal key={video.id} delay={(i % 2) * 0.06}>
            <VideoCard video={video} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
