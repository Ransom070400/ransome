import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/writing";
import { formatMonthYear } from "@/lib/format";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Drafts never reach generateStaticParams, so this also keeps them un-routable.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  return {
    title: `${post.title} — Ransom Eze`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const { default: Content } = (await import(
    `@/content/writing/${slug}.mdx`
  )) as { default: ComponentType };

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-24">
      <Link
        href="/writing"
        className="label inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
      >
        <span aria-hidden>&#8592;</span> Writing
      </Link>

      <header className="mt-8 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <time dateTime={post.date}>{formatMonthYear(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
          {post.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-ink/[0.05] px-2.5 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft text-balance">
          {post.description}
        </p>
      </header>

      <article>
        <Content />
      </article>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
        <Link
          href="/writing"
          className="rounded-full border border-ink/15 bg-bg-card px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          &#8592; All posts
        </Link>
        <a
          href="https://x.com/ezeransome"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-purple"
        >
          Reply on X &#8599;
        </a>
      </footer>
    </main>
  );
}
