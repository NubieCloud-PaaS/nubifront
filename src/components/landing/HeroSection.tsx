'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import GradientText from '@/components/ui/GradientText';
import AnimatedTerminal from './AnimatedTerminal';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

const rotatingWords = [
  'En toute simplicite.',
  'En quelques clics.',
  'Sans effort.',
  'Sans ops.',
  'A votre rythme.',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HeroSection() {
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
            <motion.div variants={item}>
              <Badge className="mb-6">Plateforme Cloud PaaS</Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6"
            >
              Deployer.
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
                    <GradientText from="from-blue-400" to="to-blue-600">
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
              Nubiecloud simplifie votre cycle de vie DevOps du debut a la fin.
              CI/CD automatise, SSL, monitoring et scalabilite en quelques clics.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${CONSOLE_URL}/register`}
                className="btn-primary px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center justify-center transition-colors"
              >
                Commencer gratuitement
              </a>
              <a
                href="mailto:demo@nubitech.io"
                className="border border-border-1 text-text-primary px-6 py-3 rounded-lg font-medium text-sm hover:bg-surface-2 inline-flex items-center justify-center transition-colors"
              >
                Demander une demo
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
