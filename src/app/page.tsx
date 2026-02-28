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
      email: 'contact@nubiecloud.io',
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
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qu'est-ce que Nubiecloud ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nubiecloud est une plateforme cloud PaaS (Platform as a Service) qui permet de deployer des applications web, des SaaS et des ERP en quelques minutes. Nous gerons l'infrastructure pour que vous puissiez vous concentrer sur votre code.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quels langages et frameworks sont supportes ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nubiecloud supporte Node.js, Python, PHP, Go, Java, .NET, ainsi que les frameworks populaires comme Next.js, React, Django, Laravel, et bien d\'autres. Nous detectons automatiquement votre stack technique.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le deploiement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Connectez votre depot GitHub ou GitLab, configurez vos variables d'environnement, et poussez votre code. A chaque git push, Nubiecloud build, teste et deploie automatiquement votre application.",
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je deployer WordPress ou Odoo en un clic ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui ! Nubiecloud propose des templates preconfigures pour WordPress, Odoo, Dolibarr et d'autres SaaS/ERP. Le deploiement se fait en un clic avec base de donnees et SSL inclus.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle est la difference entre les plans Free, Pro et Enterprise ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plan Free est ideal pour tester avec 1 projet et des ressources limitees. Le plan Professional offre plus de puissance avec 5 projets et du load balancing. Enterprise propose une infrastructure 100% dediee avec SLA 99.99% et support 24/7.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi les tarifs sont en XOF ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nubiecloud est concu pour les developpeurs et entreprises d'Afrique de l'Ouest. Nos tarifs en XOF (Franc CFA) eliminent les complications liees au change et offrent une facturation locale transparente.",
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je essayer gratuitement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le plan Free vous permet de tester Nubiecloud gratuitement pendant 30 jours sans carte bancaire. Vous pouvez deployer une application avec 1 vCPU, 1 GB RAM et 10 GB SSD.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le SLA garanti ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le SLA varie selon le plan : 95% pour Free, 99% pour Starter, 99.5% pour Professional, 99.9% pour Business, et 99.99% pour Enterprise avec penalites contractuelles.',
        },
      },
    ],
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
