import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// Options communes aux layouts Fumadocs (nav, marque).
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Nubiecloud Docs',
      url: '/docs',
    },
    // Lien de retour vers le site public.
    links: [
      {
        text: 'Retour au site',
        url: '/',
      },
    ],
  };
}
