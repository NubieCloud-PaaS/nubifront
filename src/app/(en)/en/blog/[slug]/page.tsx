import { Metadata } from 'next';
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import ArticleBlog from '@/components/blog/ArticleBlog';
import { BASE_URL } from '@/lib/legal';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug, 'en');
  return {
    title: `${postData.title} | Nubiecloud Blog`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
      authors: [postData.author],
      images: [postData.image],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    },
    alternates: {
      canonical: `${BASE_URL}/en/blog/${slug}`,
      languages: {
        fr: `${BASE_URL}/blog/${slug}`,
        en: `${BASE_URL}/en/blog/${slug}`,
        'x-default': `${BASE_URL}/blog/${slug}`,
      },
    },
  };
}

/**
 * SEULS LES ARTICLES TRADUITS SONT GENERES.
 *
 * `getAllPostSlugs('en')` ne liste que `content/blog/en` : un article non traduit n'a donc
 * pas d'URL anglaise, plutot qu'une URL anglaise servant du francais. Le choix est explique
 * dans `src/lib/posts.ts` -- il differe volontairement de la documentation, qui retombe sur
 * le francais.
 */
export async function generateStaticParams() {
  return getAllPostSlugs('en');
}

export default async function EnglishPostPage({ params }: Props) {
  const { slug } = await params;
  return <ArticleBlog slug={slug} lang="en" />;
}
