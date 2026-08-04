"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { media } from "@/data/media";
import SmartImage from "@/components/SmartImage";

/**
 * Featured media card. Priority order:
 *   1. If media.featured.youtubeId is set → thumbnail that plays inline.
 *   2. Else if media.featured.videoUrl is set → an .mp4/.webm that plays inline,
 *      using its own first frame as the still.
 *   3. Else if a poster image exists → show it.
 *   4. Else → the designed gradient placeholder.
 */
export default function FeaturedCard() {
  const { youtubeId, videoUrl, poster, title, subtitle } = media.featured;
  const [playing, setPlaying] = useState(false);

  if (!youtubeId && videoUrl && playing) {
    return (
      <div className="relative h-full min-h-[220px] w-full bg-black">
        {/* object-contain so a portrait stage clip is never cropped */}
        <video
          className="absolute inset-0 h-full w-full object-contain"
          src={videoUrl}
          title={title}
          autoPlay
          controls
          playsInline
        />
      </div>
    );
  }

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

  return (
    <button
      type="button"
      onClick={() => (youtubeId || videoUrl) && setPlaying(true)}
      className="relative h-full min-h-[220px] w-full text-left"
      aria-label={youtubeId || videoUrl ? `Play ${title}` : title}
    >
      {/* thumbnail (yt) → video first frame → poster image → gradient */}
      {thumb ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumb} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      ) : videoUrl ? (
        // #t=0.1 nudges Safari/Chrome to render a real frame, not a black box
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={`${videoUrl}#t=0.1`}
          preload="metadata"
          muted
          playsInline
          aria-hidden
        />
      ) : (
        <SmartImage src={poster} alt={title} sizes="(max-width:768px) 100vw, 40vw" fallback={gradient} />
      )}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="label w-fit rounded-full bg-black/30 px-3 py-1 text-white/90 backdrop-blur">
          Featured · On Stage
        </span>

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
  );
}
