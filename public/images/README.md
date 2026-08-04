# Images & videos — drop-in guide

Everything is **optional**. Add a source and it appears; leave it out and the
site shows a designed gradient/monogram instead. No layout ever breaks.

You can point at images **two ways** — pick whichever is easier:

## Option A — a link (paste a URL)

In `data/media.ts` (portrait, featured) and `data/gallery.ts` (`src` per item),
set the value to any image URL:

```ts
portrait: "https://i.imgur.com/yourphoto.jpg"
```

Reliable link sources: **Imgur**, **Cloudinary** (free tier), a **GitHub** repo's
raw file URL, Vercel Blob, S3/R2 — anything that serves a direct image.

### Google Drive
Drive works but is the least reliable (rate limits / redirect pages), so use it
only if it's easiest for you. Share the file **"Anyone with the link → Viewer"**,
then wrap it with the helper:

```ts
import { driveImage } from "@/lib/images";

portrait: driveImage("https://drive.google.com/file/d/1AbC...xyz/view")
// works with a raw file id or a share/uc link too
```

If a link ever fails to load, the card quietly falls back to its gradient.

## Option B — a local file (drop it in this folder)

| What                  | Path                                       | Suggested size     |
| --------------------- | ------------------------------------------ | ------------------ |
| Portrait (About card) | `public/images/portrait.jpg`               | square, ~800×800   |
| Featured card poster  | `public/images/featured.jpg`               | 16:9, ~1280×720    |
| Gallery photos        | `public/images/gallery/g1.jpg` … `g8.jpg`  | ~1200px long edge  |

Local files are optimized automatically (resize, lazy-load, WebP).
`.jpg`, `.png`, `.webp` all work.

## Videos (YouTube)

In `data/watch.ts` (and `data/media.ts` for the hero Featured card), set a
`youtubeId` — the part after `v=` in a YouTube URL. The card then shows a real
thumbnail and plays inline. No video files live in this repo.
