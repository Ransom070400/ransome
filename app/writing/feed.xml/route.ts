import { getPosts } from "@/lib/writing";
import { siteName, siteUrl } from "@/lib/site";

// Prerender the feed at build time rather than serving it per request.
export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[char]!,
  );

export async function GET() {
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/writing/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)} — Writing</title>
    <link>${siteUrl}/writing</link>
    <description>Notes on decentralized infrastructure, developer relations, and building for developers in Africa.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/writing/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
