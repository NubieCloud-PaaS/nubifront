import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { langPrefix, type DocsLang } from '@/lib/i18n';

const BASE_URL = 'https://nubiecloud.io';

// Rendu partagé par les deux routes de doc (/docs et /en/docs).
export function DocsPageView({
  slug,
  lang,
}: {
  slug: string[] | undefined;
  lang: DocsLang;
}) {
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function docsMetadata(
  slug: string[] | undefined,
  lang: DocsLang,
): Metadata {
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const path = [...(slug ?? [])].join('/');
  const suffix = path.length > 0 ? `/${path}` : '';

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: `${BASE_URL}${langPrefix(lang)}/docs${suffix}`,
      languages: {
        fr: `${BASE_URL}/docs${suffix}`,
        en: `${BASE_URL}/en/docs${suffix}`,
      },
    },
  };
}

export function docsStaticParams(lang: DocsLang) {
  return source.getPages(lang).map((page) => ({ slug: page.slugs }));
}
