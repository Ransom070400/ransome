# Images — drop-in guide

Everything here is **optional**. Drop a file at the path below and it appears
automatically; leave it out and the site shows a designed gradient/monogram
instead. No code changes needed. Images are optimized on the fly by
`next/image` (resizing, lazy-loading, WebP).

## Expected files

| What                     | Path                          | Suggested size        |
| ------------------------ | ----------------------------- | --------------------- |
| Portrait (About card)    | `public/images/portrait.jpg`  | square, ~800×800      |
| Featured card poster     | `public/images/featured.jpg`  | 16:9, ~1280×720       |
| Gallery photos           | `public/images/gallery/g1.jpg` … `g8.jpg` | ~1200px on long edge |

Filenames are matched in `data/media.ts` (portrait, featured) and
`data/gallery.ts` (`src` per item). To use different names or add more gallery
items, edit those files.

`.jpg`, `.png`, and `.webp` all work — just keep the filename/extension in sync
with the data file if you change it.

## Videos

Talk videos are handled in `data/watch.ts` and the hero Featured card
(`data/media.ts`). They use **YouTube** — set a `youtubeId` (the part after
`v=` in a YouTube URL) and the card shows a real thumbnail and plays inline.
No video files live in this repo.
