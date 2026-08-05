import { driveImage } from "@/lib/images";

/**
 * Central media config. Every value is optional and drop-in.
 *
 * For images you can use EITHER:
 *   - a local file:   "/images/portrait.jpg"  (drop it under /public)
 *   - a remote link:  "https://i.imgur.com/abc.jpg", a Cloudinary URL, etc.
 *   - Google Drive:   driveImage("<file id or share link>")
 *                     (the file must be shared "Anyone with the link")
 *
 * For videos you can use EITHER:
 *   - `youtubeId`: the part after `v=` in a YouTube URL, or
 *   - `videoUrl`:  a direct link to an .mp4/.webm file (Supabase Storage,
 *                  S3, etc. — the bucket must be public and CORS-open).
 * Leave a value "" to keep the designed gradient/placeholder.
 *
 * Examples:
 *   portrait: "/images/portrait.jpg"
 *   portrait: "https://i.imgur.com/yourphoto.jpg"
 *   portrait: driveImage("https://drive.google.com/file/d/1AbC.../view")
 */
export const media = {
  // Portrait shown in the purple About card.
  portrait:
    "https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/My%20prtfolio/photo_2026-08-04%2022.30.52.jpeg" as string,

  // Hero "Featured" card. youtubeId OR videoUrl makes it play; poster is the
  // still image used when neither is set (a video supplies its own first frame).
  featured: {
    youtubeId: "" as string,
    videoUrl:
      "https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/My%20prtfolio/v1c044g50000d6tbd3nog65ife0b2am0.MP4" as string,
    poster: "/images/featured.jpg" as string,
    title: "Building on 0G",
    subtitle: "Enugu Tech Fest · 15,000 attendees",
    /** Shown as a badge so people know what they're committing to. "" hides it. */
    duration: "0:53" as string,
  },
};

// Re-exported so `driveImage` is in scope right here when you want a Drive link,
// e.g.  portrait: driveImage("https://drive.google.com/file/d/<id>/view")
export { driveImage };
