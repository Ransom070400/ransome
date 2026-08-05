"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface VideoLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
  subtitle?: string;
}

/**
 * Full-screen video player.
 *
 * Portalled to <body> on purpose: the bento cards animate with a transform,
 * and a transformed ancestor makes `position: fixed` resolve against the card
 * instead of the viewport — so an in-tree overlay would be trapped in the card.
 */
export default function VideoLightbox({
  open,
  onClose,
  src,
  title,
  subtitle,
}: VideoLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // SSR-safe "are we on the client yet" — document only exists after mount.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Esc to close + focus trap, and lock body scroll while open.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], video, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:-top-12"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Sound is on here: this plays only after a deliberate click. */}
            <video
              className="max-h-[80vh] w-full rounded-2xl bg-black shadow-2xl"
              src={src}
              title={title}
              autoPlay
              controls
              playsInline
            />

            <div className="mt-3 text-white">
              <p className="font-display text-base font-semibold">{title}</p>
              {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
