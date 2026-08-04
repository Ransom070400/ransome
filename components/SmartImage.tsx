"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

interface SmartImageProps {
  /**
   * Either a path under /public ("/images/portrait.jpg") or a full remote URL
   * ("https://…"). Remote links (incl. Google Drive) are rendered directly;
   * local files are optimized by next/image.
   */
  src?: string;
  alt: string;
  /** Rendered when src is empty OR the file/link fails to load. */
  fallback: ReactNode;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Drop-in image: shows a real photo when the src resolves, and gracefully
 * falls back to the designed gradient/monogram when it's missing or errors —
 * so the layout never breaks. Expects a positioned, sized parent
 * (relative + overflow-hidden).
 */
export default function SmartImage({
  src,
  alt,
  fallback,
  sizes,
  priority,
  className,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  const objectClass = className ?? "object-cover";
  const isRemote = /^https?:\/\//.test(src);

  // Remote links bypass the optimizer (avoids Drive redirect/rate-limit
  // breakage and needs no next.config allow-list). Still falls back on error.
  if (isRemote) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        // Google/Drive-hosted images 403 when a Referer is sent — strip it.
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={`absolute inset-0 h-full w-full ${objectClass}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={objectClass}
      onError={() => setFailed(true)}
    />
  );
}
