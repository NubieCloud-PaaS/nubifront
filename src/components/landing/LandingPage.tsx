import Navbar from '@/components/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SovereigntySection from '@/components/landing/SovereigntySection';
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
import { jsonLdPour } from '@/content/jsonld';
import type { DocsLang } from '@/lib/i18n';

/**
 * LA PAGE D'ACCUEIL, DANS UNE LANGUE.
 *
 * Elle existe pour que l'ORDRE DES ONZE SECTIONS ne soit écrit qu'une fois. Recopier cette
 * liste dans `(en)/en/page.tsx` aurait fait deux séquences à tenir : une section insérée
 * d'un côté et pas de l'autre ne lève rien et ne se voit qu'en comparant les deux pages à
 * l'œil. C'est le défaut déjà payé trois fois dans ce dépôt — la FAQ en était la dernière
 * occurrence, recopiée entre le composant et le balisage JSON-LD.
 *
 * Chaque section porte un `lang` OPTIONNEL par défaut à 'fr' : la page française n'a donc
 * rien à passer, et une section qu'on oublierait de câbler reste lisible en français au
 * lieu de casser.
 */
export default function LandingPage({ lang }: { lang: DocsLang }) {
  const jsonLd = jsonLdPour(lang);

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
      <Navbar lang={lang} />
      <main>
        <HeroSection lang={lang} />
        <SovereigntySection lang={lang} />
        <SocialProofBar lang={lang} />
        <PlatformSection lang={lang} />
        <ProcessSection lang={lang} />
        <FeaturesSection lang={lang} />
        <ComparisonTable lang={lang} />
        <PricingSection lang={lang} />
        <EnterpriseSection lang={lang} />
        <FAQSection lang={lang} />
        <CTASection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
