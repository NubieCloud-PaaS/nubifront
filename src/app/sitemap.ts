import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { source } from '@/lib/source';

const BASE_URL = 'https://nubiecloud.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

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

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
    ...docsEntries,
  ];
}
