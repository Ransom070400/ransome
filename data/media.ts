/**
 * Central media config. Everything here is optional and drop-in:
 *   - Add an image file at the given /public path and it appears automatically.
 *   - Set a `youtubeId` and the player/thumbnail lights up.
 * Leave a value empty ("") to keep the designed gradient/placeholder.
 *
 * See public/images/README.md for the expected filenames.
 */
export const media = {
  /** Portrait shown in the purple About card. Drop a file at this path. */
  portrait: "/images/portrait.jpg" as string,

  /** Hero "Featured" card. Set youtubeId to make it play; poster is optional. */
  featured: {
    youtubeId: "" as string,
    poster: "/images/featured.jpg" as string,
    title: "Building on Decentralized AI",
    subtitle: "0G Ecosystem Summit · 2026",
  },
};
