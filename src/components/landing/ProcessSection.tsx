'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── Step Illustrations (CSS-based UI mockups) ── */

function RepoIllustration() {
  return (
    <div className="glass-card rounded-lg p-4 text-xs font-mono space-y-2.5">
      <div className="flex items-center gap-2 text-text-tertiary mb-3">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <span>Connecter un depot</span>
      </div>
      {['acme/frontend', 'acme/api-server', 'acme/landing-page'].map((repo, i) => (
        <motion.div
          key={repo}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.12, duration: 0.3 }}
          className={`flex items-center justify-between p-2 rounded-md border ${i === 2 ? 'border-blue-500/40 bg-blue-500/5' : 'border-border-0 bg-surface-2'}`}
        >
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-blue-400' : 'bg-text-quaternary'}`} />
            <span className="text-text-secondary">{repo}</span>
          </div>
          {i === 2 && <span className="text-blue-400 text-[10px]">Selectionne</span>}
        </motion.div>
      ))}
    </div>
  );
}

function BuildIllustration() {
  return (
    <div className="glass-card rounded-lg p-4 text-xs font-mono space-y-2.5">
      <div className="flex items-center gap-2 text-text-tertiary mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span>Configuration du build</span>
      </div>
      {[
        { label: 'Framework', value: 'Next.js 16', detected: true },
        { label: 'Build cmd', value: 'npm run build', detected: false },
        { label: 'Node', value: '20.x', detected: true },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.12, duration: 0.3 }}
          className="flex items-center justify-between p-2 rounded-md border border-border-0 bg-surface-2"
        >
          <span className="text-text-tertiary">{item.label}</span>
          <div className="flex items-center gap-1.5">
            <span className="text-text-secondary">{item.value}</span>
            {item.detected && <span className="text-green-400 text-[10px]">auto</span>}
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.3 }}
        className="flex items-center gap-2 p-2 rounded-md bg-violet-500/10 border border-violet-500/20"
      >
        <span className="text-text-tertiary">ENV</span>
        <span className="text-violet-400">DATABASE_URL=***</span>
      </motion.div>
    </div>
  );
}

function PushIllustration() {
  return (
    <div className="glass-card rounded-lg p-4 text-xs font-mono">
      <div className="flex items-center gap-2 text-text-tertiary mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
        <span>Pipeline CI/CD</span>
      </div>
      <div className="space-y-2">
        {[
          { icon: '●', label: 'git push origin main', color: 'text-blue-400', delay: 0.4 },
          { icon: '◐', label: 'Building...', color: 'text-yellow-400', delay: 0.6 },
          { icon: '✓', label: 'Tests passes (12/12)', color: 'text-green-400', delay: 0.8 },
          { icon: '✓', label: 'Image built (234 MB)', color: 'text-green-400', delay: 1.0 },
          { icon: '✓', label: 'Deploying to prod...', color: 'text-green-400', delay: 1.2 },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: line.delay, duration: 0.3 }}
            className="flex items-center gap-2 p-1.5"
          >
            <span className={line.color}>{line.icon}</span>
            <span className="text-text-secondary">{line.label}</span>
          </motion.div>
        ))}
        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden mt-1">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.5, ease: 'easeOut' as const }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

function DeployIllustration() {
  return (
    <div className="glass-card rounded-lg p-4 text-xs font-mono">
      <div className="flex items-center gap-2 text-text-tertiary mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>En production</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="p-3 rounded-md bg-green-500/10 border border-green-500/20 mb-3"
      >
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
          <span className="text-green-400 font-medium">Live</span>
          <span className="text-text-quaternary ml-auto">4.2s</span>
        </div>
        <span className="text-blue-400">https://console.nubiecloud.io</span>
      </motion.div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'SSL', value: '✓', color: 'text-green-400' },
          { label: 'CDN', value: '✓', color: 'text-green-400' },
          { label: 'Uptime', value: '99.9%', color: 'text-blue-400' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
            className="text-center p-2 rounded-md bg-surface-2 border border-border-0"
          >
            <div className={`${stat.color} font-bold`}>{stat.value}</div>
            <div className="text-text-quaternary text-[10px]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const illustrations = [RepoIllustration, BuildIllustration, PushIllustration, DeployIllustration];

const steps = [
  {
    num: '01',
    title: 'Connectez votre depot',
    description: 'Liez GitHub ou GitLab en un clic. Nous detectons automatiquement votre configuration.',
  },
  {
    num: '02',
    title: 'Configurez votre build',
    description: 'Interface intuitive pour gerer commandes de build et variables d\'environnement.',
  },
  {
    num: '03',
    title: 'Poussez votre code',
    description: 'A chaque git push, Nubiecloud build, teste et prepare le deploiement automatiquement.',
  },
  {
    num: '04',
    title: 'En production',
    description: 'Votre application est live sur notre infrastructure globale avec SSL, CDN et monitoring.',
  },
];

export default function ProcessSection() {
  return (
    <SectionWrapper id="processus" className="py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={titleVariants}
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Du commit au deploiement
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-lg text-text-secondary"
          >
            4 etapes simples vers la production
          </motion.p>
        </motion.div>

        {/* Steps grid with illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {steps.map((step, i) => {
            const Illustration = illustrations[i];
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const }}
              >
                {/* Text */}
                <div className="flex items-start gap-3 mb-5">
                  <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Illustration */}
                <div className="h-52 overflow-hidden illustration-mask">
                  <Illustration />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
