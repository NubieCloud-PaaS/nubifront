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
  // Les URL canoniques des pages légales sont en français, comme le reste du
  // site (/docs, /blog) : `/confidentialite` et `/conditions`. Mais ces deux
  // URL-là sont DEVINÉES par des tiers — annuaires de connecteurs, robots,
  // navigateurs — qui essaient d'abord les formes habituelles. Un 404 sur
  // /privacy ou /terms se lit comme « ce document n'existe pas ».
  async redirects() {
    return [
      { source: '/privacy', destination: '/confidentialite', permanent: true },
      { source: '/privacy-policy', destination: '/confidentialite', permanent: true },
      {
        source: '/politique-de-confidentialite',
        destination: '/confidentialite',
        permanent: true,
      },
      { source: '/cgu', destination: '/conditions', permanent: true },
      { source: '/terms', destination: '/conditions', permanent: true },
      { source: '/terms-of-service', destination: '/conditions', permanent: true },
    ];
  },
};

// Fumadocs MDX est ESM-only → on passe la config Next en .mjs.
const withMDX = createMDX();

export default withMDX(nextConfig);
