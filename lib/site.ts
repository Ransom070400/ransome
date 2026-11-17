/**
 * Public base URL, used wherever a link has to be absolute (the RSS feed).
 *
 * Set `NEXT_PUBLIC_SITE_URL` once the domain is final. On Vercel it falls back
 * to the production URL automatically; locally it points at the dev server.
 */
const fallback = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallback).replace(
  /\/+$/,
  "",
);

export const siteName = "Ransom Eze";
