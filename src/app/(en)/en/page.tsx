import type { Metadata } from 'next';
import LandingPage from '@/components/landing/LandingPage';
import { BASE_URL } from '@/lib/legal';

/**
 * PAGE D'ACCUEIL ANGLAISE — `/en`.
 *
 * Le chemin suit la règle déjà en place pour la documentation (`/docs` ↔ `/en/docs`) :
 * le français garde l'URL racine, l'anglais est préfixé. `hreflang` déclare les deux et
 * `x-default` pointe sur le français, qui reste la version de référence.
 *
 * La structure vient de `LandingPage` : seules les métadonnées sont propres à cette page.
 */
export const metadata: Metadata = {
  title: 'Nubiecloud — Deploy your applications in minutes',
  description:
    'Cloud PaaS platform to deploy web applications, SaaS products and managed databases in minutes. Automated CI/CD, SSL, monitoring and scaling.',
  openGraph: {
    title: 'Nubiecloud — Deploy your applications in minutes',
    description:
      'Cloud PaaS platform to deploy web applications, SaaS products and managed databases in minutes.',
    url: `${BASE_URL}/en`,
    siteName: 'Nubiecloud',
    locale: 'en_US',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nubiecloud — Deploy your applications in minutes',
    description: 'Automated CI/CD, SSL, monitoring and scaling, in a few clicks.',
  },
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      fr: BASE_URL,
      en: `${BASE_URL}/en`,
      'x-default': BASE_URL,
    },
  },
};

export default function EnglishHomePage() {
  return <LandingPage lang="en" />;
}
