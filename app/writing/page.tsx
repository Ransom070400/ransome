import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getPosts } from "@/lib/writing";
import { formatMonthYear } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing — Ransom Eze",
  description:
    "Notes on decentralized AI infrastructure, developer relations, and building for developers in Africa.",
  alternates: {
    types: { "application/rss+xml": "/writing/feed.xml" },
  },
};

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
      <Link
        href="/"
        className="label inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
      >
        <span aria-hidden>&#8592;</span> Back to portfolio
      </Link>

      <Reveal className="mb-14 mt-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft text-balance">
          Notes on decentralized infrastructure, developer relations, and what
          actually works when you&apos;re teaching a room full of builders.
        </p>
        <a
          href="/writing/feed.xml"
          className="label mt-6 inline-flex items-center gap-2 text-muted transition-colors hover:text-purple"
        >
          RSS
          <span aria-hidden>&#8599;</span>
        </a>
      </Reveal>

      {posts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line px-6 py-12 text-center text-muted">
          Nothing published yet.
        </p>
      ) : (
        <ul className="flex flex-col">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 0.06}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group flex flex-col border-b border-line py-7 transition-colors first:border-t"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                    <time dateTime={post.date}>{formatMonthYear(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingMinutes} min read</span>
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink/[0.05] px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-purple">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {post.description}
                  </p>

                  <span className="mt-3 text-sm font-medium text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read &#8594;
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
