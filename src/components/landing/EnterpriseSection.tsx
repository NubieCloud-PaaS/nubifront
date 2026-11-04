'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import type { DocsLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import {
  ServerStackIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const ICONES = [ServerStackIcon, ShieldCheckIcon, PhoneIcon, ArrowsPointingOutIcon];

const AVANTAGES = {
  fr: [
    {
      title: 'Infrastructure Dediee et Isolee',
      description:
        "Beneficiez d'une infrastructure de qualite enterprise, completement isolee et dediee a votre organisation.",
    },
    {
      title: 'Securite Renforcee',
      description: 'Architecture securisee avec conformite RGPD, audit complet et logs detailles.',
    },
    {
      title: 'Support dedie',
      description:
        'Account Manager personnel, support prioritaire et engagements negocies au contrat.',
    },
    {
      title: 'Scalabilite Illimitee',
      description:
        'Projets illimites, bande passante illimitee et capacite de scaling automatique sans limites.',
    },
  ],
  en: [
    {
      title: 'Dedicated, isolated infrastructure',
      description:
        'Enterprise-grade infrastructure, fully isolated and dedicated to your organisation.',
    },
    {
      title: 'Hardened security',
      description: 'A secure architecture with GDPR compliance, full auditing and detailed logs.',
    },
    {
      title: 'Dedicated support',
      description:
        'A personal account manager, priority support and commitments negotiated in the contract.',
    },
    {
      title: 'Unlimited scalability',
      description:
        'Unlimited projects, unlimited bandwidth and automatic scaling with no ceiling.',
    },
  ],
} satisfies Record<DocsLang, { title: string; description: string }[]>;

const LIBELLES = {
  fr: {
    accroche:
      'Une solution de deploiement dediee, concue sur mesure pour les besoins operationnels de votre organisation.',
    ventes: 'Parler aux ventes',
    demo: 'Demander une demo',
    bandeau: 'Chiffrement \u00b7 RGPD \u00b7 SLA 99,5%',
    couches: ['Votre Application', 'Load Balancer', 'Nodes (Auto-scaling)'],
    infra: ['Database', 'CDN Global', 'SSL/TLS', 'Monitoring'],
  },
  en: {
    accroche:
      "A dedicated deployment solution, built to fit your organisation's operational needs.",
    ventes: 'Talk to sales',
    demo: 'Request a demo',
    bandeau: 'Encryption \u00b7 GDPR \u00b7 99.5% SLA',
    couches: ['Your application', 'Load balancer', 'Nodes (auto-scaling)'],
    infra: ['Database', 'Global CDN', 'SSL/TLS', 'Monitoring'],
  },
} satisfies Record<DocsLang, {
  accroche: string;
  ventes: string;
  demo: string;
  bandeau: string;
  couches: string[];
  infra: string[];
}>;

const COULEURS_COUCHES = [
  'border-accent-500/40 bg-accent-500/5',
  'border-accent-500/40 bg-accent-500/5',
  'border-violet-500/40 bg-violet-500/5',
];



export default function EnterpriseSection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  const benefits = AVANTAGES[lang].map((a, i) => ({ ...a, icon: ICONES[i] }));
  const archLayers = t.couches.map((label, i) => ({ label, color: COULEURS_COUCHES[i] }));
  const infraItems = t.infra;
  return (
    <SectionWrapper id="enterprise" className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Passez a l&apos;echelle avec{' '}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {t.accroche}
            </p>

            <div className="space-y-5 mb-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">{b.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@nubitech.io"
                className="bg-gradient-to-r from-violet-600 to-pink-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all text-center"
              >
                {t.ventes}
              </a>
              <a
                href="mailto:contact@nubitech.io"
                className="border border-border-1 text-text-primary px-6 py-3 rounded-lg text-sm font-medium hover:bg-surface-2 transition-colors text-center"
              >
                {t.demo}
              </a>
            </div>
          </div>

          {/* Right – Architecture Diagram */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 border border-violet-500/20">
              <div className="space-y-4">
                {archLayers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                    className={`rounded-lg p-4 border ${layer.color} text-center`}
                  >
                    <span className="text-sm font-mono text-text-secondary">{layer.label}</span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {infraItems.map((item) => (
                    <div key={item} className="rounded-lg p-3 border border-border-0 bg-surface-2 text-center">
                      <span className="text-xs font-mono text-text-tertiary">{item}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85, duration: 0.4 }}
                  className="flex items-center justify-center gap-2 pt-2"
                >
                  <LockClosedIcon className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-mono">{t.bandeau}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
