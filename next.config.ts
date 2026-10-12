import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',
  experimental: {
    globalNotFound: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
