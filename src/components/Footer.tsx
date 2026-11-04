'use client';

import Logo from '@/components/Logo';
import { cheminDe } from '@/lib/legal';
import type { DocsLang } from '@/lib/i18n';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

/**
 * Les libellés, par langue.
 *
 * `Record<DocsLang, …>` plutôt qu'un objet libre : TypeScript exige alors les DEUX
 * langues, donc une traduction oubliée ne compile pas. Une garde par construction, qu'aucun
 * test n'a besoin de doubler.
 */
const LIBELLES = {
  fr: {
    accroche: 'Simplifying Cloud, Amplifying Business',
    plateforme: 'Plateforme',
    processus: 'Processus',
    plateformes: 'Plateformes',
    fonctionnalites: 'Fonctionnalites',
    tarifs: 'Tarifs',
    entreprise: 'Entreprise',
    contact: 'Contact',
    support: 'Support',
    conditions: "Conditions d'utilisation",
    confidentialite: 'Confidentialité',
    connexion: 'Connexion',
    demarrer: 'Demarrer',
    inscription: 'Inscription gratuite',
    demo: 'Demander une demo',
    sales: 'Sales',
    droits: 'Tous droits reserves.',
  },
  en: {
    accroche: 'Simplifying Cloud, Amplifying Business',
    plateforme: 'Platform',
    processus: 'How it works',
    plateformes: 'Services',
    fonctionnalites: 'Features',
    tarifs: 'Pricing',
    entreprise: 'Company',
    contact: 'Contact',
    support: 'Support',
    conditions: 'Terms of Service',
    confidentialite: 'Privacy',
    connexion: 'Sign in',
    demarrer: 'Get started',
    inscription: 'Create a free account',
    demo: 'Request a demo',
    sales: 'Sales',
    droits: 'All rights reserved.',
  },
} satisfies Record<DocsLang, Record<string, string>>;

/**
 * `lang` est OPTIONNEL et vaut 'fr' : les trois pages françaises existantes ne changent
 * pas d'un caractère. Les liens d'ancre pointent vers la landing, qui n'est PAS traduite —
 * c'est assumé, et c'est pourquoi seuls les libellés et les deux liens juridiques suivent
 * la langue ici.
 */
export default function Footer({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  return (
    <footer className="bg-surface-0 border-t border-border-0 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4">
              <Logo size="small" />
            </a>
            <p className="text-text-tertiary text-sm">
              {t.accroche}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-4">{t.plateforme}</h3>
            <ul className="space-y-2 text-sm text-text-tertiary">
              <li><a href="/#processus" className="hover:text-text-primary transition-colors">{t.processus}</a></li>
              <li><a href="/#plateformes" className="hover:text-text-primary transition-colors">{t.plateformes}</a></li>
              <li><a href="/#fonctionnalites" className="hover:text-text-primary transition-colors">{t.fonctionnalites}</a></li>
              <li><a href="/#tarifs" className="hover:text-text-primary transition-colors">{t.tarifs}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-4">{t.entreprise}</h3>
            <ul className="space-y-2 text-sm text-text-tertiary">
              <li><a href="mailto:contact@nubitech.io" className="hover:text-text-primary transition-colors">{t.contact}</a></li>
              <li><a href="mailto:support@nubitech.io" className="hover:text-text-primary transition-colors">{t.support}</a></li>
              <li><a href={cheminDe('conditions', lang)} className="hover:text-text-primary transition-colors">{t.conditions}</a></li>
              <li><a href={cheminDe('confidentialite', lang)} className="hover:text-text-primary transition-colors">{t.confidentialite}</a></li>
              <li><a href={`${CONSOLE_URL}/login`} className="hover:text-text-primary transition-colors">{t.connexion}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-4">{t.demarrer}</h3>
            <ul className="space-y-2 text-sm text-text-tertiary">
              <li><a href={`${CONSOLE_URL}/register`} className="hover:text-text-primary transition-colors">{t.inscription}</a></li>
              <li><a href="mailto:contact@nubitech.io" className="hover:text-text-primary transition-colors">{t.demo}</a></li>
              <li><a href="mailto:sales@nubitech.io" className="hover:text-text-primary transition-colors">{t.sales}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-0 mt-8 pt-8 text-center text-xs text-text-quaternary">
          <p>&copy; 2025 NUBIECLOUD PLATFORM. {t.droits} - {t.accroche}</p>
        </div>
      </div>
    </footer>
  );
}
