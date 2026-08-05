"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { media } from "@/data/media";
import SmartImage from "@/components/SmartImage";
import VideoLightbox from "@/components/VideoLightbox";

/**
 * Featured media card. Priority order:
 *   1. If media.featured.youtubeId is set → thumbnail that plays inline.
 *   2. Else if media.featured.videoUrl is set → a silent ambient loop in the
 *      tile; clicking opens the full player in a lightbox.
 *   3. Else if a poster image exists → show it.
 *   4. Else → the designed gradient placeholder.
 */
export default function FeaturedCard() {
  const { youtubeId, videoUrl, poster, title, subtitle, duration } =
    media.featured;
  const [playing, setPlaying] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const hasFile = !youtubeId && Boolean(videoUrl);

  // Touch devices have no hover, so drive the ambient loop from visibility.
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

  if (youtubeId && playing) {
    return (
      <div className="relative h-full min-h-[220px] w-full bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const thumb = youtubeId
    ? `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
    : undefined;

  const gradient = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b1030] via-purple to-[#22d3ee]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
    </>
  );

  const playable = Boolean(youtubeId) || hasFile;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (hasFile) setLightbox(true);
          else if (youtubeId) setPlaying(true);
        }}
        onMouseEnter={hasFile ? startAmbient : undefined}
        onMouseLeave={hasFile ? stopAmbient : undefined}
        onFocus={hasFile ? startAmbient : undefined}
        onBlur={hasFile ? stopAmbient : undefined}
        className="relative h-full min-h-[220px] w-full text-left"
        aria-label={playable ? `Play ${title}` : title}
      >
        {/* thumbnail (yt) → ambient video loop → poster image → gradient */}
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        ) : hasFile ? (
          // #t=0.1 nudges Safari/Chrome to paint a real frame while paused.
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={`${videoUrl}#t=0.1`}
            preload="metadata"
            muted
            loop
            playsInline
            aria-hidden
          />
        ) : (
          <SmartImage src={poster} alt={title} sizes="(max-width:768px) 100vw, 40vw" fallback={gradient} />
        )}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="label w-fit rounded-full bg-black/30 px-3 py-1 text-white/90 backdrop-blur">
              Featured · On Stage
            </span>
            {playable && duration && (
              <span className="rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium tabular-nums text-white/90 backdrop-blur">
                {duration}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="h-5 w-5 translate-x-0.5 fill-ink" />
            </span>
            <div className="text-white">
              <p className="font-display text-lg font-semibold leading-tight">
                {title}
              </p>
              <p className="text-sm text-white/70">{subtitle}</p>
            </div>
          </div>
        </div>
      </button>

      {hasFile && (
        <VideoLightbox
          open={lightbox}
          onClose={() => setLightbox(false)}
          src={videoUrl}
          title={title}
          subtitle={subtitle}
        />
      )}
    </>
  );
}
