'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import {
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

export default function CTASection() {
  return (
    <SectionWrapper className="py-20 bg-gradient-to-b from-surface-0 to-blue-950/20 glow-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Pret a deployer ?
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Commencez gratuitement en 30 secondes. Pas de carte bancaire requise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={`${CONSOLE_URL}/register`}
            className="btn-primary px-8 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center transition-colors"
          >
            Demarrer gratuitement
            <RocketLaunchIcon className="ml-2 h-4 w-4" />
          </a>
          <a
            href="mailto:contact@nubitech.io"
            className="border border-border-1 text-text-primary px-8 py-3 rounded-lg text-sm font-medium hover:bg-surface-2 inline-flex items-center justify-center transition-colors"
          >
            Nous contacter
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-text-tertiary">
            <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Securite</span>
          </div>
          <div className="flex items-center gap-2 text-text-tertiary">
            <CloudIcon className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Automatise</span>
          </div>
          <div className="flex items-center gap-2 text-text-tertiary">
            <RocketLaunchIcon className="w-5 h-5 text-violet-500" />
            <span className="text-sm">Scalable</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
