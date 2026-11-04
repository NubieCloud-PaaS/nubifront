import { FAQ } from '@/content/faq';
import { langPrefix, type DocsLang } from '@/lib/i18n';
import { BASE_URL } from '@/lib/legal';

/**
 * LE BALISAGE schema.org DE LA PAGE D'ACCUEIL, PARAMÉTRÉ PAR LA LANGUE.
 *
 * Il vivait dans `(fr)/page.tsx`. En ajoutant une page d'accueil anglaise, le recopier
 * aurait fait une troisième copie de la FAQ — exactement le défaut qu'on vient de
 * corriger ici (les huit questions étaient dupliquées entre le composant et ce balisage,
 * et c'est CE balisage que Google affiche, donc une réponse périmée y survivait à la
 * correction de l'écran).
 *
 * Une fonction, donc, et pas deux constantes.
 */
const TEXTES = {
  fr: {
    description:
      'Plateforme cloud PaaS pour deployer applications, SaaS et bases de donnees en quelques minutes.',
    langue: 'French',
    fonctionnalites: [
      'Deploiement CI/CD automatise via Git',
      'Certificats SSL automatiques',
      'Monitoring et logs en temps reel',
      'SaaS 1-Click (WordPress, Odoo, Dolibarr)',
      'Bases de donnees managees (PostgreSQL, MySQL, MongoDB, Redis)',
      'Auto-scaling et load balancing',
    ],
  },
  en: {
    description:
      'Cloud PaaS platform to deploy applications, SaaS products and databases in minutes.',
    langue: 'English',
    fonctionnalites: [
      'Automated CI/CD deployment from Git',
      'Automatic SSL certificates',
      'Real-time monitoring and logs',
      'One-click SaaS (WordPress, Odoo, Dolibarr)',
      'Managed databases (PostgreSQL, MySQL, MongoDB, Redis)',
      'Auto-scaling and load balancing',
    ],
  },
} satisfies Record<DocsLang, { description: string; langue: string; fonctionnalites: string[] }>;

export function jsonLdPour(lang: DocsLang) {
  const t = TEXTES[lang];
  // L'URL de la page d'accueil de CETTE langue : `/` en français, `/en` en anglais.
  // Dérivée de `langPrefix`, la règle déjà en place pour la documentation.
  const url = `${BASE_URL}${langPrefix(lang) || '/'}`;

  return {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Nubiecloud',
      url: BASE_URL,
      logo: `${BASE_URL}/logo_v2.png`,
      description: t.description,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@nubitech.io',
        contactType: 'customer service',
        // Les DEUX langues sont servies par le support : le déclarer dans les deux
        // balisages, sinon l'anglais annonce un support qui ne parlerait qu'une langue.
        availableLanguage: ['French', 'English'],
      },
    },
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Nubiecloud',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web-based',
      url,
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '0',
        // XAF : la societe est au Cameroun, donc en zone CEMAC. « FCFA » couvre les
        // deux francs CFA et ne suffit pas ici -- `priceCurrency` exige un code ISO
        // 4217. Les montants affiches ne changent pas pour autant : les deux francs
        // CFA ont la meme parite fixe avec l'euro, seul le code differe.
        priceCurrency: 'XAF',
        offerCount: 4,
      },
      featureList: t.fonctionnalites,
    },
    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      // DÉRIVÉ de `src/content/faq.ts`, jamais recopié, et dans la langue rendue.
      mainEntity: FAQ[lang].map((entree) => ({
        '@type': 'Question',
        name: entree.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: entree.reponse,
        },
      })),
    },
  };
}
