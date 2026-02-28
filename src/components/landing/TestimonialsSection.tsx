'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: 'Nubiecloud a reduit notre temps de deploiement de 45 minutes a moins de 3 minutes. L\'equipe peut maintenant se concentrer sur le produit.',
    name: 'Amadou Diallo',
    title: 'CTO, FinTech Dakar',
    initials: 'AD',
  },
  {
    quote: 'Le deploiement WordPress en un clic nous a fait gagner des semaines. Plus besoin de configurer des serveurs manuellement.',
    name: 'Fatou Ndiaye',
    title: 'Directrice Technique, AgriSaaS',
    initials: 'FN',
  },
  {
    quote: 'Le support francophone et la tarification en XOF font toute la difference. Enfin une plateforme cloud pensee pour l\'Afrique de l\'Ouest.',
    name: 'Ibrahim Koné',
    title: 'Fondateur, EduTech CI',
    initials: 'IK',
  },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-text-secondary">
            Des equipes en Afrique de l&apos;Ouest font confiance a Nubiecloud.
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
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
