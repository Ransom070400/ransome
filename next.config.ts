import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't get confused by parent lockfiles.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
