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

      // Les mêmes mots, sous le préfixe de langue, vers la version ANGLAISE. Un
      // anglophone qui connaît déjà `/en/docs` essaie `/en/terms` ; sans ces entrées il
      // reçoit un 404 là où le document existe.
      //
      // Les redirections SANS préfixe ci-dessus continuent de viser le français, et ce
      // n'est pas un oubli : le français est le texte de référence (droit français,
      // `x-default`), il porte désormais un lien « Read in English », et une 301 déjà
      // servie reste en cache côté navigateur — la retourner vers l'anglais ne changerait
      // rien pour ceux qui l'ont déjà suivie, tout en déplaçant la version qui fait foi.
      { source: '/en/terms', destination: '/en/conditions', permanent: true },
      { source: '/en/terms-of-service', destination: '/en/conditions', permanent: true },
      { source: '/en/privacy', destination: '/en/confidentialite', permanent: true },
      { source: '/en/privacy-policy', destination: '/en/confidentialite', permanent: true },
    ];
  },
};

// Fumadocs MDX est ESM-only → on passe la config Next en .mjs.
const withMDX = createMDX();

export default withMDX(nextConfig);
