import fs from "node:fs";
import path from "node:path";

/**
 * Metadata each post exports. @next/mdx doesn't parse YAML frontmatter, so
 * posts declare this as a named export instead:
 *
 *   export const meta = {
 *     title: "…",
 *     description: "…",
 *     date: "2026-08-16",
 *   }
 */
export interface PostMeta {
  title: string;
  /** One or two sentences. Used on the index, in <meta>, and in the RSS feed. */
  description: string;
  /** ISO YYYY-MM-DD. Sorted on, so keep the format exact. */
  date: string;
  tags?: string[];
  /** Keeps a post out of the index, the feed, and the build. */
  draft?: boolean;
}

export interface Post extends PostMeta {
  slug: string;
  readingMinutes: number;
}

const POSTS_DIR = path.join(process.cwd(), "content/writing");
const WORDS_PER_MINUTE = 220;

function slugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Rough reading time from the raw source. Strips the `export const meta`
 * block, import lines, and fence markers so prose is all that's counted.
 */
function readingMinutes(slug: string): number {
  const source = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const prose = source
    .replace(/^export const meta = \{[\s\S]*?^\};?$/m, "")
    .replace(/^import .*$/gm, "")
    .replace(/^```.*$/gm, "");
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

async function load(slug: string): Promise<Post> {
  const { meta } = (await import(`@/content/writing/${slug}.mdx`)) as {
    meta: PostMeta;
  };
  return { slug, ...meta, readingMinutes: readingMinutes(slug) };
}

/** Published posts, newest first. Drafts are excluded. */
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(slugs().map(load));
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  if (!slugs().includes(slug)) return undefined;
  const post = await load(slug);
  return post.draft ? undefined : post;
}
