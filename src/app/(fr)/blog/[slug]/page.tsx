import { Metadata } from 'next';
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import ArticleBlog from '@/components/blog/ArticleBlog';
import { BASE_URL } from '@/lib/legal';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: `${postData.title} | Blog Nubiecloud`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
      authors: [postData.author],
      images: [postData.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
      languages: {
        fr: `${BASE_URL}/blog/${slug}`,
        en: `${BASE_URL}/en/blog/${slug}`,
        'x-default': `${BASE_URL}/blog/${slug}`,
      },
    },
  };
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  return <ArticleBlog slug={slug} lang="fr" />;
}
