"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

interface SmartImageProps {
  /** Path under /public, e.g. "/images/portrait.jpg". */
  src?: string;
  alt: string;
  /** Rendered when src is empty OR the file fails to load (e.g. not added yet). */
  fallback: ReactNode;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Drop-in image: renders an optimized next/image when the file exists,
 * and gracefully shows the fallback (a gradient, monogram, etc.) when it
 * doesn't — so the layout never breaks before real assets are added.
 *
 * Expects a positioned, sized parent (relative + overflow-hidden).
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

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className ?? "object-cover"}
      onError={() => setFailed(true)}
    />
  );
}
