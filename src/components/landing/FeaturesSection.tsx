'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import type { DocsLang } from '@/lib/i18n';

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── Mini Illustrations ── */

function DeployIllust() {
  return (
    <div className="glass-card rounded-lg p-3 text-[10px] font-mono space-y-1.5">
      {[
        { text: '$ nubi deploy', color: 'text-accent-400' },
        { text: '  Building... done (12s)', color: 'text-text-tertiary' },
        { text: '  ✓ Live in 18s', color: 'text-green-400' },
      ].map((l, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.12 }} className={l.color}>{l.text}</motion.div>
      ))}
    </div>
  );
}

function SecurityIllust() {
  return (
    <div className="glass-card rounded-lg p-3 text-[10px] font-mono space-y-1.5">
      {[
        { label: 'SSL', value: 'Auto-provisioned', color: 'text-green-400' },
        { label: 'DDoS', value: 'Protected', color: 'text-green-400' },
        { label: 'WAF', value: 'Active', color: 'text-accent-400' },
      ].map((item, i) => (
        <motion.div key={item.label} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex items-center justify-between p-1.5 rounded bg-surface-2 border border-border-0">
          <span className="text-text-tertiary">{item.label}</span>
          <span className={item.color}>✓ {item.value}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ScaleIllust() {
  return (
    <div className="glass-card rounded-lg p-3 text-[10px] font-mono">
      <div className="flex items-end gap-1 h-10 mb-2">
        {[20, 35, 28, 50, 45, 70, 90, 85].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: 'easeOut' as const }}
            className="flex-1 rounded-sm bg-gradient-to-t from-accent-500/40 to-accent-600/40"
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-text-quaternary">
        <span>Traffic</span>
        <span className="text-accent-400">Auto-scale ✓</span>
      </div>
    </div>
  );
}

function SaasIllust() {
  return (
    <div className="glass-card rounded-lg p-3 text-[10px] font-mono space-y-1.5">
      {['WordPress', 'Odoo ERP'].map((name, i) => (
        <motion.div key={name} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex items-center justify-between p-1.5 rounded bg-surface-2 border border-border-0">
          <span className="text-text-secondary">{name}</span>
          <span className="text-violet-400">1-Click →</span>
        </motion.div>
      ))}
    </div>
  );
}

function ConfigIllust() {
  return (
    <div className="glass-card rounded-lg p-3 text-[10px] font-mono space-y-1.5">
      {[
        { key: 'PORT', val: '3000' },
        { key: 'NODE_ENV', val: 'production' },
        { key: 'DB_URL', val: '●●●●●●' },
      ].map((env, i) => (
        <motion.div key={env.key} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex items-center gap-2 p-1.5 rounded bg-surface-2 border border-border-0">
          <span className="text-violet-400">{env.key}</span>
          <span className="text-text-quaternary">=</span>
          <span className="text-text-secondary">{env.val}</span>
        </motion.div>
      ))}
    </div>
  );
}

function StackIllust() {
  return (
    <div className="glass-card rounded-lg p-3 text-[10px] font-mono">
      <div className="grid grid-cols-3 gap-1.5">
        {['Next.js', 'Django', 'Laravel', 'Go', 'Spring', 'Rails'].map((fw, i) => (
          <motion.div
            key={fw}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06, type: 'spring', stiffness: 200 }}
            className="text-center p-1.5 rounded bg-surface-2 border border-border-0 text-text-tertiary"
          >
            {fw}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center text-text-quaternary mt-2"
      >
        Auto-detect ✓
      </motion.div>
    </div>
  );
}

const CARTES = {
  fr: [
    {
      title: 'Deploiement ultra-rapide',
      description:
        "Passez de l'idee a la production en quelques minutes grace a notre pipeline CI/CD optimise.",
    },
    {
      title: 'Securite Enterprise',
      description:
        'Protection DDoS, certificats SSL automatiques et surveillance continue de la securite.',
    },
    {
      title: 'Scalabilite Automatique',
      description:
        "Votre application s'adapte au trafic sans aucune intervention manuelle de votre part.",
    },
    {
      title: 'SaaS/ERP 1-Click',
      description: 'Deployez WordPress, Odoo et autres SaaS en un seul clic sans configuration.',
    },
    {
      title: 'Configuration Simplifiee',
      description:
        'Interface intuitive pour gerer tous les aspects de votre infrastructure sans complexite.',
    },
    {
      title: 'Multi-Stack Support',
      description: 'Node.js, Python, PHP, Go, Java, .NET, Next.js et React.',
    },
  ],
  en: [
    {
      title: 'Blazing-fast deployment',
      description:
        'Go from idea to production in minutes, through our optimised CI/CD pipeline.',
    },
    {
      title: 'Enterprise-grade security',
      description:
        'DDoS protection, automatic SSL certificates and continuous security monitoring.',
    },
    {
      title: 'Automatic scaling',
      description: 'Your application follows the traffic, with no manual work on your side.',
    },
    {
      title: 'One-click SaaS and ERP',
      description:
        'Deploy WordPress, Odoo and other SaaS products in a single click, with no configuration.',
    },
    {
      title: 'Configuration made simple',
      description:
        'An intuitive interface to manage every part of your infrastructure, without the complexity.',
    },
    {
      title: 'Multi-stack support',
      description: 'Node.js, Python, PHP, Go, Java, .NET, Next.js and React.',
    },
  ],
} satisfies Record<DocsLang, { title: string; description: string }[]>;

/**
 * Les illustrations sont APPARIEES PAR L'INDEX aux textes ci-dessus : leur contenu est du
 * texte de terminal et des noms de frameworks, identiques dans les deux langues. Ajouter
 * une carte demande donc une entree dans les DEUX langues et une illustration ici.
 */
const ILLUSTRATIONS = [
  DeployIllust,
  SecurityIllust,
  ScaleIllust,
  SaasIllust,
  ConfigIllust,
  StackIllust,
];

const LIBELLES = {
  fr: {
    titre: 'Fonctionnalites Principales',
    accroche: 'Tout ce dont vous avez besoin pour deployer et gerer vos applications en production.',
  },
  en: {
    titre: 'Key features',
    accroche: 'Everything you need to deploy and run your applications in production.',
  },
} satisfies Record<DocsLang, Record<string, string>>;

export default function FeaturesSection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  const features = CARTES[lang].map((carte, i) => ({ ...carte, Illustration: ILLUSTRATIONS[i] }));
  return (
    <SectionWrapper id="fonctionnalites" className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-14"
        >
          <motion.h2
            variants={titleVariants}
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            {t.titre}
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-lg text-text-secondary max-w-3xl mx-auto"
          >
            {t.accroche}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass-card rounded-xl p-6 hover:border-accent-500/30 hover:shadow-[var(--shadow-glow-blue)] transition-shadow duration-300"
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{f.description}</p>
              <div className="h-32 overflow-hidden illustration-mask">
                <f.Illustration />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
