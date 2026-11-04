'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import type { DocsLang } from '@/lib/i18n';
import {
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

const LIBELLES = {
  fr: {
    titre: 'Pret a deployer ?',
    accroche: 'Commencez gratuitement en 30 secondes. Pas de carte bancaire requise.',
    demarrer: 'Demarrer gratuitement',
    contact: 'Nous contacter',
    securite: 'Securite',
    automatise: 'Automatise',
    scalable: 'Scalable',
  },
  en: {
    titre: 'Ready to deploy?',
    accroche: 'Get started for free in 30 seconds. No credit card required.',
    demarrer: 'Start for free',
    contact: 'Contact us',
    securite: 'Secure',
    automatise: 'Automated',
    scalable: 'Scalable',
  },
} satisfies Record<DocsLang, Record<string, string>>;

export default function CTASection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  return (
    <SectionWrapper className="py-20 bg-gradient-to-b from-surface-0 to-accent-900/20 glow-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          {t.titre}
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          {t.accroche}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={`${CONSOLE_URL}/register`}
            className="btn-primary px-8 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center transition-colors"
          >
            {t.demarrer}
            <RocketLaunchIcon className="ml-2 h-4 w-4" />
          </a>
          <a
            href="mailto:contact@nubitech.io"
            className="border border-border-1 text-text-primary px-8 py-3 rounded-lg text-sm font-medium hover:bg-surface-2 inline-flex items-center justify-center transition-colors"
          >
            {t.contact}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-text-tertiary">
            <ShieldCheckIcon className="w-5 h-5 text-accent-500" />
            <span className="text-sm">{t.securite}</span>
          </div>
          <div className="flex items-center gap-2 text-text-tertiary">
            <CloudIcon className="w-5 h-5 text-accent-500" />
            <span className="text-sm">{t.automatise}</span>
          </div>
          <div className="flex items-center gap-2 text-text-tertiary">
            <RocketLaunchIcon className="w-5 h-5 text-violet-500" />
            <span className="text-sm">{t.scalable}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
