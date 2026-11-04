import Navbar from '@/components/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SocialProofBar from '@/components/landing/SocialProofBar';
import PlatformSection from '@/components/landing/PlatformSection';
import ProcessSection from '@/components/landing/ProcessSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ComparisonTable from '@/components/landing/ComparisonTable';
import PricingSection from '@/components/landing/PricingSection';
import EnterpriseSection from '@/components/landing/EnterpriseSection';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/Footer';
import { FAQ } from '@/content/faq';

const jsonLd = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nubiecloud',
    url: 'https://nubiecloud.io',
    logo: 'https://nubiecloud.io/logo_v2.png',
    description:
      'Plateforme cloud PaaS pour deployer applications, SaaS et bases de donnees en quelques minutes.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@nubitech.io',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
  },
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Nubiecloud',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web-based',
    url: 'https://nubiecloud.io',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      // XOF ou XAF ? La grille affiche « FCFA », qui couvre les DEUX zones, et
      // `priceCurrency` exige un code ISO 4217. La valeur d'origine est conservée
      // faute d'avoir pu la trancher : à confirmer selon la zone facturée.
      priceCurrency: 'XOF',
      offerCount: 4,
    },
    featureList: [
      'Deploiement CI/CD automatise via Git',
      'Certificats SSL automatiques',
      'Monitoring et logs en temps reel',
      'SaaS 1-Click (WordPress, Odoo, Dolibarr)',
      'Bases de donnees managees (PostgreSQL, MySQL, MongoDB, Redis)',
      'Auto-scaling et load balancing',
    ],
  },
  faqPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // DÉRIVÉ de `src/content/faq.ts`, jamais recopié. Les huit questions l'étaient
    // mot pour mot ici, et c'est la copie la plus coûteuse à laisser dériver : Google
    // affiche ce balisage dans ses résultats, donc une réponse périmée y survit à la
    // correction de l'écran. Trois d'entre elles contredisaient les conditions
    // d'utilisation (SLA du plan Gratuit, 99,9 %, pénalités).
    mainEntity: FAQ.map((entree) => ({
      '@type': 'Question',
      name: entree.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entree.reponse,
      },
    })),
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLd.organization,
            jsonLd.softwareApplication,
            jsonLd.faqPage,
          ]),
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <PlatformSection />
        <ProcessSection />
        <FeaturesSection />
        <ComparisonTable />
        <PricingSection />
        <EnterpriseSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
