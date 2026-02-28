'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { StarIcon, TrophyIcon } from '@heroicons/react/24/solid';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

interface Plan {
  name: string;
  subtitle: string;
  price: string;
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

const row1: Plan[] = [
  {
    name: 'FREE',
    subtitle: 'Test et POC',
    price: '0 XOF',
    period: '/30 jours',
    cta: 'Essayer gratuitement',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'default',
    features: [
      '1 vCPU, 1 GB RAM, 10 GB SSD',
      '1 projet, 100 GB transfert',
      '30 builds/mois',
      'Backup hebdomadaire (7j)',
      'Support communautaire',
      'SLA 95%',
    ],
  },
  {
    name: 'STARTER',
    subtitle: 'Projets personnels',
    price: '120K XOF',
    period: '/mois',
    cta: 'Commencer',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'default',
    features: [
      '2 vCPU, 4 GB RAM, 40 GB SSD',
      '2 projets, 500 GB transfert',
      'Builds illimites',
      'Deploiement < 10 min',
      'Backup quotidien (7j)',
      'Support email (< 24h)',
      'SLA 99%',
    ],
  },
  {
    name: 'PROFESSIONAL',
    subtitle: 'Production PME',
    price: '250K XOF',
    period: '/mois',
    cta: 'Choisir Pro',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'primary',
    highlighted: true,
    badge: 'LE PLUS POPULAIRE',
    badgeIcon: 'star',
    badgeGradient: 'from-blue-500 to-blue-600',
    accentBorder: 'border-blue-500',
    features: [
      '4 vCPU, 8 GB RAM, 80 GB SSD',
      '5 projets, 1 TB transfert',
      'Builds prioritaires paralleles',
      'Deploiement < 5 min (Blue/Green)',
      'Backup quotidien (30j)',
      'Support email + chat (< 4h)',
      'Load balancing, SLA 99.5%',
    ],
  },
];

const row2: Plan[] = [
  {
    name: 'BUSINESS',
    subtitle: 'Applications critiques',
    price: '450K XOF',
    period: '/mois',
    cta: 'Choisir Business',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'default',
    features: [
      '8 vCPU, 16 GB RAM, 160 GB SSD',
      '10 projets, 2 TB transfert',
      'Build dedie (4 vCPU, 8 GB)',
      'Canary + Blue/Green deployment',
      'Backup quotidien (90j)',
      'Support 24/7 (< 1h)',
      'Account Manager, SLA 99.9%',
    ],
  },
  {
    name: 'SCALE',
    subtitle: 'Grandes applications',
    price: '800K XOF',
    period: '/mois',
    cta: 'Choisir Scale',
    ctaHref: `${CONSOLE_URL}/register`,
    ctaStyle: 'default',
    features: [
      '16 vCPU, 32 GB RAM, 320 GB SSD',
      'Projets illimites, 5 TB transfert',
      'Build dedie (8 vCPU, 16 GB)',
      'Multi-region + CDN premium',
      'Backup geo-replique (90j)',
      'Support VIP (< 30 min)',
      'Architecture review, SLA 99.99%',
    ],
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'Sur-mesure dedie',
    price: 'Contactez-nous',
    period: 'Tarification personnalisee',
    cta: 'Contacter Nubiecloud',
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

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const isHighlighted = plan.highlighted;
  const isEnterprise = plan.ctaStyle === 'enterprise';

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
          <div className={`text-3xl font-bold ${isEnterprise ? 'text-xl' : ''} text-text-primary`}>{plan.price}</div>
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
              isHighlighted ? 'text-blue-400' : isEnterprise ? 'text-violet-400' : 'text-blue-500/70'
            }`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <SectionWrapper id="tarifs" className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {row1.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {row2.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i + 3} />
          ))}
        </div>

        <p className="text-center text-text-quaternary text-xs mt-8">
          Tous les plans incluent SSL, monitoring et support. -10% sur paiement annuel.
        </p>
      </div>
    </SectionWrapper>
  );
}
