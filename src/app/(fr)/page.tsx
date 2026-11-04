import type { Metadata } from 'next';
import LandingPage from '@/components/landing/LandingPage';
import { BASE_URL } from '@/lib/legal';

/**
 * Les `alternates` sont ici et non dans le layout : le layout couvre AUSSI /blog et les
 * pages legales, qui ont chacune leurs propres paires de langues. Declares au layout, ils
 * annonceraient la page d'accueil anglaise comme la contrepartie de chaque page du site.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
    languages: {
      fr: BASE_URL,
      en: `${BASE_URL}/en`,
      'x-default': BASE_URL,
    },
  },
};

export default function HomePage() {
  return <LandingPage lang="fr" />;
}
