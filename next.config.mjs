import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

// Fumadocs MDX est ESM-only → on passe la config Next en .mjs.
const withMDX = createMDX();

export default withMDX(nextConfig);
