import { Metadata } from 'next';
import BlogListe from '@/components/blog/BlogListe';
import { BASE_URL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Nubiecloud Blog',
  description:
    'News, articles and analysis from the Nubiecloud team on cloud, deployment and PaaS in Africa.',
  openGraph: {
    title: 'Nubiecloud Blog',
    description:
      'News, articles and analysis from the Nubiecloud team on cloud, deployment and PaaS in Africa.',
    url: `${BASE_URL}/en/blog`,
    siteName: 'Nubiecloud',
    locale: 'en_US',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nubiecloud Blog',
    description: 'News, articles and analysis from the Nubiecloud team.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog`,
    languages: {
      fr: `${BASE_URL}/blog`,
      en: `${BASE_URL}/en/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
};

export default function EnglishBlogPage() {
  return <BlogListe lang="en" />;
}
