"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Play, Clapperboard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import VideoLightbox from "@/components/VideoLightbox";
import { watch, type Video } from "@/data/watch";

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const hasYouTube = video.youtubeId.length > 0;
  const hasFile = !hasYouTube && Boolean(video.videoUrl);
  const thumb = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  // No hover on touch devices — drive the silent preview from visibility.
  useEffect(() => {
    const el = videoRef.current;
    if (!hasFile || !el || reduce) return;
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasFile, reduce]);

  const startAmbient = () => {
    if (reduce) return;
    void videoRef.current?.play().catch(() => {});
  };

  const stopAmbient = () => {
    const el = videoRef.current;
    if (!el || reduce) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <div className="group overflow-hidden rounded-[22px] border border-line bg-bg-card transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {hasYouTube && playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : hasYouTube || hasFile ? (
          <button
            type="button"
            onClick={() => (hasFile ? setLightbox(true) : setPlaying(true))}
            onMouseEnter={hasFile ? startAmbient : undefined}
            onMouseLeave={hasFile ? stopAmbient : undefined}
            onFocus={hasFile ? startAmbient : undefined}
            onBlur={hasFile ? stopAmbient : undefined}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 h-full w-full"
          >
            {hasFile ? (
              // #t=0.1 nudges Safari/Chrome to paint a real frame while paused.
              <video
                ref={videoRef}
                className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                src={`${video.videoUrl}#t=0.1`}
                preload="metadata"
                muted
                loop
                playsInline
                aria-hidden
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumb}
                alt={video.title}
                className="h-full w-full object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white pl-1 text-ink shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="h-6 w-6 fill-ink" />
              </span>
            </span>
            {video.duration && (
              <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium tabular-nums text-white backdrop-blur">
                {video.duration}
              </span>
            )}
          </button>
        ) : (
          // Designed placeholder until a video is added
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

      {hasFile && video.videoUrl && (
        <VideoLightbox
          open={lightbox}
          onClose={() => setLightbox(false)}
          src={video.videoUrl}
          title={video.title}
          subtitle={`${video.event} · ${video.date}`}
        />
      )}
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
