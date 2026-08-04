"use client";

import { useState } from "react";
import { Play, Clapperboard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { watch, type Video } from "@/data/watch";

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = video.youtubeId.length > 0;
  const thumb = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="group overflow-hidden rounded-[22px] border border-line bg-bg-card transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {hasVideo && playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : hasVideo ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt={video.title}
              className="h-full w-full object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white pl-1 text-ink shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="h-6 w-6 fill-ink" />
              </span>
            </span>
          </button>
        ) : (
          // Designed placeholder until a YouTube id is added
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#15131f] via-ink to-[#101820] text-white/40">
            <Clapperboard className="h-8 w-8" />
            <span className="label">Recording soon</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold leading-snug text-ink">
          {video.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          {video.event} · {video.date}
        </p>
      </div>
    </div>
  );
}

export default function Watch() {
  return (
    <section id="watch" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading
        index="05"
        kicker="Watch"
        title="In motion."
        description="Recorded talks, workshop clips, and live demos — grab a coffee and dive in."
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
