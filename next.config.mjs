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
  // L'URL canonique de la politique de confidentialité est `/confidentialite`
  // (les routes du site sont en français : /docs, /blog). Mais une URL de
  // politique de confidentialité est devinée par des tiers — annuaires de
  // connecteurs, robots, navigateurs — qui essaient d'abord les formes
  // habituelles. Un 404 sur /privacy se lit comme « pas de politique ».
  async redirects() {
    return [
      { source: '/privacy', destination: '/confidentialite', permanent: true },
      { source: '/privacy-policy', destination: '/confidentialite', permanent: true },
      {
        source: '/politique-de-confidentialite',
        destination: '/confidentialite',
        permanent: true,
      },
    ];
  },
};

// Fumadocs MDX est ESM-only → on passe la config Next en .mjs.
const withMDX = createMDX();

export default withMDX(nextConfig);
