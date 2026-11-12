'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { StarIcon } from '@heroicons/react/24/solid';
import type { DocsLang } from '@/lib/i18n';

/**
 * LES CITATIONS SONT TRADUITES, LES PERSONNES NE LE SONT PAS.
 *
 * Noms, intitules de poste et entreprises restent identiques dans les deux langues :
 * ce sont des personnes reelles, pas du contenu. Traduire une citation est l'usage
 * courant sur un site bilingue ; inventer un temoignage ou en modifier l'attribution ne
 * l'est pas.
 */
const TEMOIGNAGES = {
  fr: [
    {
      quote:
        "Nubiecloud a réduit notre temps de déploiement de 45 minutes à moins de 3 minutes. L'équipe peut maintenant se concentrer sur le produit.",
      name: 'Amadou Diallo',
      title: 'CTO, FinTech Dakar',
      initials: 'AD',
    },
    {
      quote:
        'Le déploiement WordPress en un clic nous a fait gagner des semaines. Plus besoin de configurer des serveurs manuellement.',
      name: 'Fatou Ndiaye',
      title: 'Directrice Technique, AgriSaaS',
      initials: 'FN',
    },
    {
      quote:
        "Le support francophone et la tarification en FCFA font toute la différence. Enfin une plateforme cloud pensée pour l'Afrique.",
      name: 'Ibrahim Kone',
      title: 'Fondateur, EduTech CI',
      initials: 'IK',
    },
  ],
  en: [
    {
      quote:
        'Nubiecloud cut our deployment time from 45 minutes to under 3. The team can now focus on the product.',
      name: 'Amadou Diallo',
      title: 'CTO, FinTech Dakar',
      initials: 'AD',
    },
    {
      quote:
        'One-click WordPress deployment saved us weeks. No more configuring servers by hand.',
      name: 'Fatou Ndiaye',
      title: 'Chief Technology Officer, AgriSaaS',
      initials: 'FN',
    },
    {
      quote:
        'French-speaking support and pricing in FCFA make all the difference. At last, a cloud platform designed for Africa.',
      name: 'Ibrahim Kone',
      title: 'Founder, EduTech CI',
      initials: 'IK',
    },
  ],
} satisfies Record<DocsLang, { quote: string; name: string; title: string; initials: string }[]>;

const LIBELLES = {
  fr: {
    titre: 'Ce que disent nos utilisateurs',
    accroche: 'Des équipes en Afrique font confiance à Nubiecloud.',
  },
  en: {
    titre: 'What our users say',
    accroche: 'Teams across Africa trust Nubiecloud.',
  },
} satisfies Record<DocsLang, Record<string, string>>;

export default function TestimonialsSection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const testimonials = TEMOIGNAGES[lang];
  const l = LIBELLES[lang];
  return (
    <SectionWrapper className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {l.titre}
          </h2>
          <p className="text-lg text-text-secondary">
            {l.accroche}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedCard key={t.name} delay={i * 0.1}>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-tertiary">{t.title}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
