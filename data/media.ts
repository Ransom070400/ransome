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
 * For videos, set `youtubeId` to the part after `v=` in a YouTube URL.
 * Leave a value "" to keep the designed gradient/placeholder.
 *
 * Examples:
 *   portrait: "/images/portrait.jpg"
 *   portrait: "https://i.imgur.com/yourphoto.jpg"
 *   portrait: driveImage("https://drive.google.com/file/d/1AbC.../view")
 */
export const media = {
  // Portrait shown in the purple About card.
  portrait: "/images/portrait.jpg" as string,

  // Hero "Featured" card. youtubeId makes it play; poster is the still image.
  featured: {
    youtubeId: "" as string,
    poster: "/images/featured.jpg" as string,
    title: "Building on Decentralized AI",
    subtitle: "0G Ecosystem Summit · 2026",
  },
};

// Re-exported so `driveImage` is in scope right here when you want a Drive link,
// e.g.  portrait: driveImage("https://drive.google.com/file/d/<id>/view")
export { driveImage };
