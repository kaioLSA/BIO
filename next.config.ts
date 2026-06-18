import type { NextConfig } from "next";

// On GitHub Pages this project is served from https://<user>.github.io/BIO/,
// so production needs a basePath. In dev (localhost) we keep it empty.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/BIO" : "";

const nextConfig: NextConfig = {
  output: "export", // static export -> ./out (works on GitHub Pages)
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
