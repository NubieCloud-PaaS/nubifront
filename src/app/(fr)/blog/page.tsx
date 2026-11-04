import { Metadata } from 'next';
import BlogListe from '@/components/blog/BlogListe';
import { BASE_URL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Blog Nubiecloud',
  description: 'Actualites, articles et analyses de l\'equipe Nubiecloud sur le cloud, le deploiement et le PaaS en Afrique de l\'Ouest.',
  openGraph: {
    title: 'Blog Nubiecloud',
    description: 'Actualites, articles et analyses de l\'equipe Nubiecloud sur le cloud, le deploiement et le PaaS en Afrique de l\'Ouest.',
    url: 'https://nubiecloud.io/blog',
    siteName: 'Nubiecloud',
    locale: 'fr_FR',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Nubiecloud',
    description: 'Actualites, articles et analyses de l\'equipe Nubiecloud sur le cloud et le deploiement.',
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
    languages: {
      fr: `${BASE_URL}/blog`,
      en: `${BASE_URL}/en/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
};

export default function BlogPage() {
  return <BlogListe lang="fr" />;
}
