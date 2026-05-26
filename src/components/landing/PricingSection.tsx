'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { StarIcon, TrophyIcon } from '@heroicons/react/24/solid';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

type Region = 'afrique' | 'europe';

interface Plan {
  name: string;
  subtitle: string;
  // Region-differentiated price, or null for "sur devis" (Enterprise)
  price: Record<Region, string> | null;
  period: string;
  cta: string;
  ctaHref: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  badgeIcon?: 'star' | 'trophy';
  badgeGradient?: string;
  accentBorder?: string;
  ctaStyle: 'default' | 'primary' | 'enterprise';
}

const plans: Plan[] = [
  {
    name: 'GRATUIT',
    subtitle: 'Test et POC',
    price: { afrique: '0 FCFA', europe: '0 FCFA' },
    period: '/30 jours',
    cta: 'Essayer gratuitement',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'default',
    features: [
      '0,5 vCPU, 1 Go RAM, 5 Go SSD',
      '1 projet',
      '30 builds/mois',
      'Backup hebdomadaire (7j)',
      'Support communautaire',
      'SLA 95%',
    ],
  },
  {
    name: 'PROFESSIONNEL',
    subtitle: 'Production PME',
    price: { afrique: '145 000 FCFA', europe: '100 000 FCFA' },
    period: '/mois',
    cta: 'Choisir Pro',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'primary',
    highlighted: true,
    badge: 'LE PLUS POPULAIRE',
    badgeIcon: 'star',
    badgeGradient: 'from-accent-500 to-accent-600',
    accentBorder: 'border-accent-500',
    features: [
      '8 vCPU, 16 Go RAM, 200 Go SSD',
      '5 projets',
      'Builds prioritaires paralleles',
      'Deploiement < 5 min (Blue/Green)',
      'Backup quotidien (30j)',
      'Support email + chat (< 4h)',
      'Load balancing, SLA 99.5%',
    ],
  },
  {
    name: 'BUSINESS',
    subtitle: 'Production intensive',
    price: { afrique: '445 000 FCFA', europe: '305 000 FCFA' },
    period: '/mois',
    cta: 'Choisir Business',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'default',
    features: [
      '24 vCPU, 48 Go RAM, 600 Go SSD',
      'Projets illimites',
      'Builds illimites prioritaires',
      'Deploiement < 5 min (Blue/Green)',
      'Backup quotidien (90j)',
      'Support prioritaire (< 2h)',
      'Load balancing avance, SLA 99.9%',
    ],
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'Sur-mesure dedie',
    price: null,
    period: 'Tarification personnalisee',
    cta: 'Contacter NubieCloud',
    ctaHref: 'mailto:contact@nubitech.io',
    ctaStyle: 'enterprise',
    badge: 'PREMIUM',
    badgeIcon: 'trophy',
    badgeGradient: 'from-violet-600 to-pink-600',
    accentBorder: 'border-violet-500/30',
    features: [
      'Infrastructure 100% dediee',
      'Isolation complete et securisee',
      'Serveur Build & Deploy dedies',
      'Support Enterprise 24/7 (< 30 min)',
      'Account + Technical Manager dedies',
      'Conformite (ISO, SOC2, RGPD)',
      'SLA 99.99% avec penalites',
    ],
  },
];

function PricingCard({ plan, index, region }: { plan: Plan; index: number; region: Region }) {
  const isHighlighted = plan.highlighted;
  const isEnterprise = plan.ctaStyle === 'enterprise';
  const priceLabel = plan.price ? plan.price[region] : 'Sur devis';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass-card rounded-2xl p-6 flex flex-col relative ${
        isHighlighted ? `border-2 ${plan.accentBorder} lg:scale-105` : ''
      } ${isEnterprise ? `border-2 ${plan.accentBorder} bg-violet-500/5` : ''}`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className={`bg-gradient-to-r ${plan.badgeGradient} text-white px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1`}>
            {plan.badgeIcon === 'star' && <StarIcon className="w-3 h-3" />}
            {plan.badgeIcon === 'trophy' && <TrophyIcon className="w-3 h-3" />}
            {plan.badge}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold mb-1 ${isEnterprise ? 'bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent' : 'text-text-primary'}`}>
          {plan.name}
        </h3>
        <p className="text-text-tertiary text-xs mb-4 h-8 flex items-center justify-center">{plan.subtitle}</p>
        <div className="mb-4">
          <div className={`font-bold text-text-primary ${isEnterprise ? 'text-xl' : 'text-2xl'}`}>{priceLabel}</div>
          <p className="text-text-quaternary text-xs">{plan.period}</p>
        </div>
        <a
          href={plan.ctaHref}
          className={`w-full inline-block py-2 px-4 rounded-lg text-sm font-medium transition-all ${
            plan.ctaStyle === 'primary'
              ? 'btn-primary'
              : plan.ctaStyle === 'enterprise'
              ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg hover:shadow-violet-500/30'
              : 'bg-surface-3 text-text-primary hover:bg-surface-4'
          }`}
        >
          {plan.cta}
        </a>
      </div>

      <ul className="space-y-2 flex-grow text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start text-text-secondary">
            <CheckIcon className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
              isHighlighted ? 'text-accent-400' : isEnterprise ? 'text-violet-400' : 'text-accent-500/70'
            }`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PricingSection() {
  const [region, setRegion] = useState<Region>('europe');

  const regions: { id: Region; label: string }[] = [
    { id: 'afrique', label: '🌍 Afrique' },
    { id: 'europe', label: '🇪🇺 Europe' },
  ];

  return (
    <SectionWrapper id="tarifs" className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Tarification Simple et Transparente
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-3">
            Choisissez le plan qui correspond a vos besoins. Pas de frais caches, jamais.
          </p>
          <p className="text-text-tertiary text-sm">
            -10% sur paiement annuel &middot; SSL automatique &middot; Support inclus
          </p>
        </div>

        {/* Region selector — prices differ by region */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-surface-2 border border-border-0">
            {regions.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRegion(r.id)}
                aria-pressed={region === r.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  region === r.id
                    ? 'bg-accent-500 text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          <p className="text-text-quaternary text-xs">
            Prix selon la region de deploiement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} region={region} />
          ))}
        </div>

        {/* Connect — BYO-VM add-on (tarif unique, hors grille) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 mt-10 border-2 border-accent-500/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Pitch + prix + CTA */}
            <div>
              <span className="inline-block bg-accent-500/12 text-accent-emphasis text-xs font-bold px-3 py-1 rounded-full mb-3">
                CONNECT &middot; BYO-VM
              </span>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Votre infrastructure, notre plateforme
              </h3>
              <p className="text-text-secondary text-sm mb-5">
                Vous avez deja vos serveurs (on-premise, OVH, Hetzner, AWS, Azure...) ?
                Connectez-les a NubieCloud et profitez de toute la plateforme — sans migrer.
              </p>
              <div className="mb-5">
                <span className="text-3xl font-bold text-text-primary">100 000 FCFA</span>
                <span className="text-text-tertiary text-sm"> / VM / mois</span>
                <p className="text-text-quaternary text-xs mt-1">
                  En plus de votre plan (Pro ou Business) &middot; Inclus avec Enterprise
                </p>
              </div>
              <a
                href={`${CONSOLE_URL}/register`}
                className="btn-primary inline-block py-2.5 px-6 rounded-lg text-sm font-medium"
              >
                Connecter mon infrastructure
              </a>
            </div>

            {/* Inclus par VM */}
            <div className="lg:border-l lg:border-border-0 lg:pl-8">
              <p className="text-text-tertiary text-xs font-semibold uppercase tracking-wide mb-3">
                Inclus pour chaque VM connectee
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {[
                  'Deploiement via GitOps',
                  'Builds automatises',
                  'Monitoring et logs centralises',
                  'Backups orchestres',
                  'Services manages (Postgres, Redis, Mongo...)',
                  'Console unifiee avec tout votre parc',
                ].map((f) => (
                  <li key={f} className="flex items-start text-text-secondary">
                    <CheckIcon className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-accent-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-quaternary text-xs mt-4">
                Vous gardez le controle total : compute, RAM, stockage et disponibilite de la VM restent les votres.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-text-quaternary text-xs mt-8">
          Tous les plans incluent SSL, monitoring et support. -10% sur paiement annuel.
        </p>
      </div>
    </SectionWrapper>
  );
}
