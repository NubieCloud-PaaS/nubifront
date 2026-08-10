import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { DocsLang } from '@/lib/i18n';

// Options communes aux layouts Fumadocs (nav, marque), déclinées par langue.
export function baseOptions(lang: DocsLang): BaseLayoutProps {
  return {
    i18n: true,
    nav: {
      title: 'Nubiecloud Docs',
      url: lang === 'en' ? '/en/docs' : '/docs',
    },
    // Lien de retour vers le site public.
    links: [
      {
        text: lang === 'en' ? 'Back to site' : 'Retour au site',
        url: '/',
      },
    ],
  };
}
