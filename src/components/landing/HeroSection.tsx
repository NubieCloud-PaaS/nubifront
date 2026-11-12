'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import GradientText from '@/components/ui/GradientText';
import AnimatedTerminal from './AnimatedTerminal';
import type { DocsLang } from '@/lib/i18n';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

const LIBELLES = {
  fr: {
    badge: 'Région Afrique Centrale — bientôt disponible',
    titre: 'Déployer.',
    // Les mots qui defilent : une liste, donc TypeScript ne verifie que le TYPE. Garder
    // le meme NOMBRE d'entrees dans les deux langues -- la rotation est a duree fixe
    // (3 s), donc une liste plus courte d'un cote ferait boucler plus vite sans que rien
    // ne le signale.
    mots: ['En toute simplicité.', 'En quelques clics.', 'Sans effort.', 'Sans ops.', 'À votre rythme.'],
    accroche:
      'Nubiecloud simplifie votre cycle de vie DevOps du début à la fin. CI/CD automatisé, SSL, monitoring et scalabilité en quelques clics.',
    commencer: 'Commencer gratuitement',
    demo: 'Demander une demo',
  },
  en: {
    badge: 'Central Africa region — coming soon',
    titre: 'Deploy.',
    mots: ['Effortlessly.', 'In a few clicks.', 'Without the ops.', 'At your own pace.', 'And move on.'],
    accroche:
      'Nubiecloud simplifies your DevOps lifecycle end to end. Automated CI/CD, SSL, monitoring and scaling in a few clicks.',
    commencer: 'Start for free',
    demo: 'Request a demo',
  },
} satisfies Record<DocsLang, {
  badge: string;
  titre: string;
  mots: string[];
  accroche: string;
  commencer: string;
  demo: string;
}>;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HeroSection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  const rotatingWords = t.mots;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-28 pb-20 bg-surface-0 glow-blue bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Le badge porte l'annonce de la region, et MENE a la section qui dit
                l'etat reel des trois regions : une annonce qui ne se verifie nulle part
                est une affirmation, pas une information. */}
            <motion.div variants={item}>
              <a href="#souverainete" className="inline-block mb-6 group">
                <Badge className="gap-2 group-hover:border-accent-500/50 transition-colors">
                  <span className="relative flex items-center justify-center w-2 h-2">
                    <motion.span
                      animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-accent-400/30"
                    />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                  </span>
                  {t.badge}
                </Badge>
              </a>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6"
            >
              {t.titre}
              <br />
              <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    <GradientText from="from-accent-400" to="to-accent-600">
                      {rotatingWords[wordIndex]}
                    </GradientText>
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-text-secondary max-w-lg leading-relaxed mb-8"
            >
              {t.accroche}
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${CONSOLE_URL}/register`}
                className="btn-primary px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center justify-center transition-colors"
              >
                {t.commencer}
              </a>
              <a
                href="mailto:contact@nubitech.io"
                className="border border-border-1 text-text-primary px-6 py-3 rounded-lg font-medium text-sm hover:bg-surface-2 inline-flex items-center justify-center transition-colors"
              >
                {t.demo}
              </a>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatedTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
