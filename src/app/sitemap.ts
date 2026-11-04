import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { source } from '@/lib/source';
import { PAGES, cheminDe } from '@/lib/legal';
import { i18n, langPrefix } from '@/lib/i18n';

const BASE_URL = 'https://nubiecloud.io';

export default function sitemap(): MetadataRoute.Sitemap {
  // Les articles de CHAQUE langue : leurs slugs ne sont pas forcement les memes (un
  // article peut n'exister qu'en francais), donc on liste par langue au lieu de prefixer
  // une seule liste -- ce qui aurait declare des URL anglaises inexistantes.
  const blogEntries: MetadataRoute.Sitemap = i18n.languages.flatMap((lang) =>
    getSortedPostsData(lang).map((post) => ({
      url: `${BASE_URL}${langPrefix(lang)}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  // L'accueil et l'index du blog, dans les deux langues.
  const pagesPrincipales: MetadataRoute.Sitemap = i18n.languages.flatMap((lang) => [
    {
      url: `${BASE_URL}${langPrefix(lang) || '/'}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: lang === i18n.defaultLanguage ? 1 : 0.9,
    },
    {
      url: `${BASE_URL}${langPrefix(lang)}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]);

  // Toutes les pages de la doc Fumadocs, dans les deux langues.
  // page.url vaut déjà /docs/... (fr) ou /en/docs/... (en).
  const docsEntries: MetadataRoute.Sitemap = source
    .getLanguages()
    .flatMap(({ pages }) =>
      pages.map((page) => ({
        url: `${BASE_URL}${page.url}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: page.url === '/docs' || page.url === '/en/docs' ? 0.9 : 0.7,
      })),
    );

  // Les deux documents contractuels, dans TOUTES les langues déclarées — dérivé de
  // `PAGES` et de `i18n.languages`, jamais une liste à tenir. Une page ajoutée à l'un ou
  // une langue ajoutée à l'autre entre ici sans qu'on y pense ; une liste recopiée aurait
  // laissé la version anglaise hors du sitemap, donc introuvable pour un moteur.
  const legalEntries: MetadataRoute.Sitemap = (
    Object.keys(PAGES) as (keyof typeof PAGES)[]
  ).flatMap((page) =>
    i18n.languages.map((lang) => ({
      url: `${BASE_URL}${cheminDe(page, lang)}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  );

  return [
    ...pagesPrincipales,
    ...legalEntries,
    ...blogEntries,
    ...docsEntries,
  ];
}
