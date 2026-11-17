import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Global styling for every MDX file. Required at the project root by
 * @next/mdx — the App Router won't compile MDX without it.
 *
 * These map markdown's plain HTML output onto the site's own tokens (ink,
 * ink-soft, purple, line, font-display) instead of a generic prose theme, so
 * a post reads like the rest of the portfolio rather than a bolted-on blog.
 */

type Props<T extends keyof React.JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<T>;

const components: MDXComponents = {
  h1: (props: Props<"h1">) => (
    <h1
      className="mt-12 mb-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: Props<"h2">) => (
    <h2
      className="mt-12 mb-4 scroll-mt-24 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
      {...props}
    />
  ),
  h3: (props: Props<"h3">) => (
    <h3
      className="mt-9 mb-3 scroll-mt-24 font-display text-xl font-semibold tracking-tight text-ink"
      {...props}
    />
  ),
  h4: (props: Props<"h4">) => (
    <h4
      className="mt-8 mb-2 scroll-mt-24 font-display text-lg font-semibold text-ink"
      {...props}
    />
  ),

  p: (props: Props<"p">) => (
    <p className="my-5 text-[1.0625rem] leading-[1.75] text-ink-soft" {...props} />
  ),

  // Internal hrefs go through <Link> for client-side navigation; anything
  // starting with a scheme or // is treated as leaving the site.
  a: ({ href = "", ...props }: Props<"a">) => {
    const external = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");
    const className =
      "font-medium text-purple underline decoration-purple/30 underline-offset-[3px] transition-colors hover:decoration-purple";

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        />
      );
    }
    return <Link href={href} className={className} {...props} />;
  },

  ul: (props: Props<"ul">) => (
    <ul className="my-5 list-disc space-y-2 pl-6 marker:text-purple/60" {...props} />
  ),
  ol: (props: Props<"ol">) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-6 marker:font-medium marker:text-muted"
      {...props}
    />
  ),
  li: (props: Props<"li">) => (
    <li className="text-[1.0625rem] leading-[1.7] text-ink-soft" {...props} />
  ),

  blockquote: (props: Props<"blockquote">) => (
    <blockquote
      className="my-7 border-l-[3px] border-purple/40 bg-purple/[0.04] py-1 pl-5 pr-4 text-ink-soft italic [&>p]:my-2"
      {...props}
    />
  ),

  // Inline code. Fenced blocks arrive as <pre><code>, and the pre below owns
  // the padding, so reset the chip styling in that context.
  code: (props: Props<"code">) => (
    <code
      className="rounded-md bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.875em] text-ink [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-inherit"
      {...props}
    />
  ),
  pre: (props: Props<"pre">) => (
    <pre
      className="my-7 overflow-x-auto rounded-2xl bg-bg-dark p-5 font-mono text-sm leading-relaxed text-[#cdd6f4]"
      {...props}
    />
  ),

  hr: () => <hr className="my-12 border-t border-line" />,

  // Markdown images carry no intrinsic dimensions, so next/image can't size
  // them. Same trade-off SmartImage makes for remote sources.
  img: ({ alt = "", ...props }: Props<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      loading="lazy"
      className="my-8 w-full rounded-2xl border border-line"
      {...props}
    />
  ),

  table: (props: Props<"table">) => (
    <div className="my-7 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props: Props<"th">) => (
    <th
      className="border-b border-line bg-ink/[0.03] px-4 py-3 font-display text-xs font-semibold uppercase tracking-wider text-ink"
      {...props}
    />
  ),
  td: (props: Props<"td">) => (
    <td className="border-b border-line px-4 py-3 align-top text-ink-soft" {...props} />
  ),

  strong: (props: Props<"strong">) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
