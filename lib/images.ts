/**
 * Turn a Google Drive file id OR any share link into a hotlinkable image URL.
 *
 * Accepts:
 *   - a raw file id:            "1AbC...xyz"
 *   - a share link:             "https://drive.google.com/file/d/1AbC...xyz/view?usp=sharing"
 *   - a uc link:                "https://drive.google.com/uc?id=1AbC...xyz"
 *   - any other full image URL: returned unchanged (Imgur, Cloudinary, etc.)
 *
 * The Drive file must be shared as "Anyone with the link → Viewer".
 * Uses the drive.google.com/thumbnail endpoint — the most browser-hotlink-
 * friendly Drive format (works from an <img>, unlike uc?export=view).
 */
export function driveImage(idOrUrl: string, width = 1200): string {
  if (!idOrUrl) return "";

  const isUrl = /^https?:\/\//.test(idOrUrl);
  const isDrive =
    idOrUrl.includes("drive.google.com") ||
    idOrUrl.includes("googleusercontent.com");

  // A full, non-Drive URL (Imgur, Cloudinary, GitHub raw…) — use as-is.
  if (isUrl && !isDrive) return idOrUrl;

  // Extract the Drive file id (a run of 25+ url-safe chars).
  const match = idOrUrl.match(/[-\w]{25,}/);
  const id = match ? match[0] : idOrUrl;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
}
