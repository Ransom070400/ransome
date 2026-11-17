import type { NextConfig } from "next";
import path from "node:path";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't get confused by parent lockfiles.
  turbopack: {
    root: path.join(__dirname),
  },
  // Lets .mdx files be imported as components. Posts live in content/writing,
  // outside app/, so none of them become routes on their own.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    // Turbopack runs the MDX pipeline in Rust and can't take JavaScript
    // functions, so plugins are named as strings rather than imported.
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
