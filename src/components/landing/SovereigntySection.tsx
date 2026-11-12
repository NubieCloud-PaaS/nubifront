"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import type { DocsLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { GlobeAltIcon, ShieldCheckIcon, BanknotesIcon } from '@heroicons/react/24/outline';

/**
 * LA SOUVERAINETÉ, DITE PAR L'ÉTAT RÉEL DES RÉGIONS.
 *
 * Le discours ne tient pas dans un adjectif : il tient dans trois lignes qu'on peut
 * vérifier. D'où une carte qui montre les régions telles qu'elles SONT — « Europe,
 * disponible », « Afrique Centrale, prochainement », « votre pays, sur demande » — plutôt
 * qu'une promesse en prose. C'est le seul affichage qui ne puisse pas se lire comme une
 * affirmation fausse : un visiteur qui le lit sait exactement où tournent ses applications
 * aujourd'hui.
 *
 * MESURÉ AVANT D'ÉCRIRE, le 2026-11-12, et c'est ce qui a décidé de la rédaction :
 *   table `regions` en prod  ->  UNE ligne, `eu-west-1` « Europe », par défaut
 *   noeuds Headscale         ->  hub-router + client-router, tous deux en Europe
 *                                AUCUN spoke en Afrique, meme en cours
 * Donc « vos données restent en Afrique » aurait été FAUX, sur une page publique, sur le
 * point précis pour lequel un client nous choisirait. L'annonce est au futur, et elle le
 * reste tant que la ligne n'existe pas en base.
 *
 * `ETATS` porte cette règle : `disponible` ne se pose que sur une région qui tourne.
 * Le jour où la région Afrique Centrale ouvre, une seule valeur change ici — et la date
 * d'ouverture, quand elle sera arrêtée, se pose dans `echeance` sans toucher au reste.
 */

type Etat = 'disponible' | 'prochainement' | 'sur_demande';

const ETATS: Record<Etat, { pastille: string; halo: string; texte: string }> = {
  disponible: { pastille: 'bg-green-400', halo: 'bg-green-400/20', texte: 'text-green-400' },
  prochainement: { pastille: 'bg-accent-400', halo: 'bg-accent-400/20', texte: 'text-accent-400' },
  sur_demande: { pastille: 'bg-text-quaternary', halo: 'bg-transparent', texte: 'text-text-tertiary' },
};

const LIBELLES = {
  fr: {
    surtitre: 'Souveraineté',
    titre: 'Où vivent vos données,',
    titreAccent: 'et qui les opère',
    accroche:
      "Nous ne vous demandons pas de nous croire sur parole : voici où tournent vos applications aujourd'hui, et ce qui arrive. Aucune région n'est annoncée disponible avant d'exister.",
    regions: [
      {
        nom: 'Europe',
        etat: 'disponible' as Etat,
        badge: 'Disponible',
        detail: 'Région par défaut. Données hébergées dans l’Union européenne, sous RGPD.',
      },
      {
        nom: 'Afrique Centrale',
        etat: 'prochainement' as Etat,
        badge: 'Prochainement',
        detail: 'Ouverture annoncée. Vos données hébergées sur le continent, au plus près de vos utilisateurs.',
      },
      {
        nom: 'Votre pays',
        etat: 'sur_demande' as Etat,
        badge: 'Sur demande',
        detail: 'Un cluster dédié, sur votre matériel ou dans votre datacenter, rattaché à la plateforme par un lien chiffré. Vous restez propriétaire du substrat, nous opérons.',
      },
    ],
    faits: [
      { titre: 'Opéré depuis le Cameroun', detail: 'Une équipe francophone, votre fuseau horaire, pas un centre d’appels à l’autre bout du monde.' },
      { titre: 'Hébergé sous RGPD', detail: 'Chiffrement au repos et en transit, journal d’audit complet, sauvegardes restaurables et vérifiées.' },
      { titre: 'Facturé en FCFA', detail: 'Des prix en francs CFA, sans conversion ni carte internationale obligatoire.' },
    ],
    prevenir: 'Être prévenu de l’ouverture',
    dedie: 'Parler d’une région dédiée',
    sujetPrevenir: 'Région Afrique Centrale — me prévenir de l’ouverture',
    sujetDedie: 'Une région dédiée pour mon organisation',
  },
  en: {
    surtitre: 'Sovereignty',
    titre: 'Where your data lives,',
    titreAccent: 'and who operates it',
    accroche:
      "We are not asking you to take our word for it: here is where your applications run today, and what is coming. No region is announced as available before it exists.",
    regions: [
      {
        nom: 'Europe',
        etat: 'disponible' as Etat,
        badge: 'Available',
        detail: 'Default region. Data hosted in the European Union, under GDPR.',
      },
      {
        nom: 'Central Africa',
        etat: 'prochainement' as Etat,
        badge: 'Coming soon',
        detail: 'Announced. Your data hosted on the continent, as close as possible to your users.',
      },
      {
        nom: 'Your country',
        etat: 'sur_demande' as Etat,
        badge: 'On request',
        detail: 'A dedicated cluster, on your hardware or in your datacenter, attached to the platform over an encrypted link. You keep ownership of the substrate, we operate it.',
      },
    ],
    faits: [
      { titre: 'Operated from Cameroon', detail: 'A French-speaking team in your time zone, not a call centre on the other side of the world.' },
      { titre: 'Hosted under GDPR', detail: 'Encryption at rest and in transit, a full audit trail, and backups that are restored and verified.' },
      { titre: 'Billed in FCFA', detail: 'Prices in CFA francs, with no conversion and no international card required.' },
    ],
    prevenir: 'Tell me when it opens',
    dedie: 'Talk about a dedicated region',
    sujetPrevenir: 'Central Africa region — let me know when it opens',
    sujetDedie: 'A dedicated region for my organisation',
  },
} satisfies Record<DocsLang, {
  surtitre: string;
  titre: string;
  titreAccent: string;
  accroche: string;
  regions: { nom: string; etat: Etat; badge: string; detail: string }[];
  faits: { titre: string; detail: string }[];
  prevenir: string;
  dedie: string;
  sujetPrevenir: string;
  sujetDedie: string;
}>;

const ICONES_FAITS = [GlobeAltIcon, ShieldCheckIcon, BanknotesIcon];

export default function SovereigntySection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  const faits = t.faits.map((f, i) => ({ ...f, Icone: ICONES_FAITS[i] }));

  return (
    <SectionWrapper
      id="souverainete"
      className="py-20 bg-surface-1 border-t border-b border-border-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Le discours */}
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-500 font-semibold mb-4">
              {t.surtitre}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-5">
              {t.titre}{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                {t.titreAccent}
              </span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{t.accroche}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={`mailto:contact@nubitech.io?subject=${encodeURIComponent(t.sujetPrevenir)}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-button bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors"
              >
                {t.prevenir}
              </a>
              <a
                href={`mailto:contact@nubitech.io?subject=${encodeURIComponent(t.sujetDedie)}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-button border border-border-1 text-text-primary hover:bg-surface-2 font-medium transition-colors"
              >
                {t.dedie}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {faits.map(({ titre, detail, Icone }) => (
                <div key={titre}>
                  <Icone className="w-5 h-5 text-accent-500 mb-2" />
                  <p className="text-sm font-semibold text-text-primary mb-1">{titre}</p>
                  <p className="text-xs text-text-tertiary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* L'etat reel des regions */}
          <div className="glass-card rounded-card p-5 sm:p-6 space-y-3">
            {t.regions.map((r, i) => {
              const e = ETATS[r.etat];
              return (
                <motion.div
                  key={r.nom}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border-0 bg-surface-2"
                >
                  <span className="relative flex items-center justify-center w-3 h-3 mt-1.5 shrink-0">
                    {r.etat === 'prochainement' && (
                      <motion.span
                        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full ${e.halo}`}
                      />
                    )}
                    <span className={`w-2 h-2 rounded-full ${e.pastille}`} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-semibold text-text-primary">{r.nom}</span>
                      <span className={`text-[11px] font-medium ${e.texte}`}>{r.badge}</span>
                    </div>
                    <p className="text-sm text-text-tertiary leading-relaxed">{r.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
