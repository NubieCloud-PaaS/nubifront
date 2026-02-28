'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── Illustrations ── */

function CodeIllustration() {
  return (
    <div className="glass-card rounded-lg p-3 text-xs font-mono space-y-2">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <div className="w-2 h-2 rounded-full bg-green-500/70" />
        <span className="text-text-quaternary text-[10px] ml-1">app.js</span>
      </div>
      {[
        { text: 'const app = express();', color: 'text-blue-400' },
        { text: 'app.get("/", (req, res) => {', color: 'text-text-secondary' },
        { text: '  res.send("Hello Nubi!");', color: 'text-green-400' },
        { text: '});', color: 'text-text-secondary' },
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.25 }}
          className={`${line.color} leading-5`}
        >
          {line.text}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="flex items-center gap-1.5 pt-1 border-t border-border-0 mt-1"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span className="text-green-400 text-[10px]">Deployed in 3.1s</span>
      </motion.div>
    </div>
  );
}

function SaasIllustration() {
  return (
    <div className="glass-card rounded-lg p-3 text-xs font-mono space-y-2">
      <div className="text-text-tertiary text-[10px] mb-2 flex items-center gap-1.5">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
        Templates 1-Click
      </div>
      {[
        { name: 'WordPress', status: 'Pret', icon: 'W' },
        { name: 'Odoo ERP', status: 'Pret', icon: 'O' },
        { name: 'Dolibarr', status: 'Pret', icon: 'D' },
      ].map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.25 }}
          className="flex items-center justify-between p-2 rounded-md border border-border-0 bg-surface-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-violet-500/20 flex items-center justify-center text-violet-400 text-[10px] font-bold">
              {item.icon}
            </div>
            <span className="text-text-secondary">{item.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-400">✓</span>
            <span className="text-[10px] text-green-400">{item.status}</span>
          </div>
        </motion.div>
      ))}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="w-full p-1.5 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] text-center"
      >
        Deployer en 1 clic →
      </motion.button>
    </div>
  );
}

function DbIllustration() {
  return (
    <div className="glass-card rounded-lg p-3 text-xs font-mono space-y-2">
      <div className="text-text-tertiary text-[10px] mb-2 flex items-center gap-1.5">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
        Databases managees
      </div>
      {[
        { name: 'PostgreSQL 16', size: '10 GB', status: 'active' },
        { name: 'Redis 7', size: '256 MB', status: 'active' },
        { name: 'MongoDB 7', size: '5 GB', status: 'standby' },
      ].map((db, i) => (
        <motion.div
          key={db.name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.25 }}
          className="flex items-center justify-between p-2 rounded-md border border-border-0 bg-surface-2"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={db.status === 'active' ? { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className={`w-1.5 h-1.5 rounded-full ${db.status === 'active' ? 'bg-green-400' : 'bg-text-quaternary'}`}
            />
            <span className="text-text-secondary">{db.name}</span>
          </div>
          <span className="text-text-quaternary">{db.size}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="flex items-center justify-between pt-1 border-t border-border-0 mt-1"
      >
        <span className="text-[10px] text-text-quaternary">Backup auto</span>
        <span className="text-[10px] text-emerald-400">Quotidien ✓</span>
      </motion.div>
    </div>
  );
}

const illustrations = [CodeIllustration, SaasIllustration, DbIllustration];

const platforms = [
  {
    title: 'Applications Code',
    techs: ['Node.js', 'Python', 'PHP', 'Go', 'Java', '.NET'],
    description:
      'Concentrez-vous sur votre code, pas sur l\'infrastructure. Deployez en quelques secondes avec des environnements de previsualisation.',
    accent: 'from-blue-400 to-blue-600',
  },
  {
    title: 'SaaS / ERP',
    techs: ['WordPress', 'Odoo', 'Dolibarr', 'Ghost'],
    description:
      'Deployez WordPress, Odoo et autres SaaS en un clic. Templates preconfigures, bases de donnees incluses.',
    accent: 'from-violet-500 to-pink-500',
  },
  {
    title: 'Databases',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    description:
      'Bases de donnees managees avec backups automatiques, replications et monitoring integre.',
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function PlatformSection() {
  return (
    <SectionWrapper id="plateformes" className="py-20 bg-surface-0">
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
            Une plateforme pour chaque projet
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Nubiecloud s&apos;adapte a vos besoins, que vous soyez un developpeur solo ou une grande entreprise.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {platforms.map((p, i) => {
            const Illustration = illustrations[i];
            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card rounded-xl p-6 relative overflow-hidden hover:border-blue-500/30 hover:shadow-[var(--shadow-glow-blue)] transition-shadow duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.accent}`} />
                <h3 className="text-lg font-semibold text-text-primary mb-1">{p.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.techs.map((t, j) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.05, duration: 0.3 }}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-surface-3 text-text-tertiary"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{p.description}</p>
                <div className="h-44 overflow-hidden illustration-mask">
                  <Illustration />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
