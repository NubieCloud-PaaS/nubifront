import { langPrefix, type DocsLang } from '@/lib/i18n';

/**
 * LES DOCUMENTS CONTRACTUELS, ET CE QUI DOIT RESTER IDENTIQUE ENTRE LES DEUX LANGUES.
 *
 * Les conditions d'utilisation et la politique de confidentialité existent en français
 * et en anglais. Les deux versions sont le MÊME contrat : ce qui diverge est la langue,
 * jamais le fond.
 *
 * `VERSION_CONDITIONS` est ici parce que c'est la valeur la plus dangereuse à dupliquer.
 * L'acceptation est enregistrée côté serveur AVEC cette version (`users.conditions_
 * version_acceptee`), et la console l'envoie depuis sa propre constante. Si la page
 * anglaise affichait « 1.1 » quand la française affiche « 1.0 », on enregistrerait une
 * acceptation pour un texte que la personne n'a pas lu — une preuve fausse, pire qu'une
 * preuve absente.
 *
 * À INCRÉMENTER AVEC LE DOCUMENT, et dans les DEUX langues à la fois : une modification
 * de fond apportée au seul français publierait deux contrats différents. C'est le mode de
 * panne de ce lot, et `scripts/verifier-pages-legales.mjs` est là pour l'attraper.
 *
 * Miroir côté console : `nubitech-frontend/src/constants/legal.ts`.
 */
export const VERSION_CONDITIONS = '1.0';

/** La même date, dite dans chaque langue. Un seul jour, deux écritures. */
export const DATE_VERSION = {
  fr: '3 novembre 2026',
  en: 'November 3, 2026',
} as const;

/** Dernière mise à jour de la politique de confidentialité (elle n'est pas versionnée :
 *  elle n'est pas « acceptée », elle est informée). */
export const DATE_CONFIDENTIALITE = {
  fr: '3 novembre 2026',
  en: 'November 3, 2026',
} as const;

/**
 * Les deux pages, par leur chemin FRANÇAIS — l'anglais s'en DÉRIVE.
 *
 * `langPrefix` est la convention déjà en place pour la documentation (`/docs` ↔
 * `/en/docs`, cf. `src/lib/i18n.ts`) : le français garde son URL, l'anglais est préfixé.
 * La réemployer ici évite une table de correspondance, qui divergerait au premier ajout —
 * et un sélecteur de langue n'a alors qu'une seule règle à connaître, pas deux.
 *
 * `/en/terms` et `/en/privacy` existent quand même, en REDIRECTION (`next.config.mjs`) :
 * ce sont les mots qu'un anglophone essaie, et un 404 s'y lirait comme « ce document
 * n'existe pas ».
 */
export const PAGES = {
  conditions: '/conditions',
  confidentialite: '/confidentialite',
} as const;

/** Le nom d'un des deux documents. Derive de PAGES : ajouter une page suffit. */
export type PageLegale = keyof typeof PAGES;

/** Le chemin d'une page dans une langue. Une seule règle, dérivée. */
export function cheminDe(page: PageLegale, lang: DocsLang): string {
  return `${langPrefix(lang)}${PAGES[page]}`;
}

export const BASE_URL = 'https://nubiecloud.io';

/** L'identité de l'éditeur, citée par les deux documents dans les deux langues. */
export const EDITEUR = {
  raisonSociale: 'NUBITECH SAS',
  siren: '105 358 543',
  adresse: '200 rue de la Croix Nivert, 75015 Paris, France',
  contact: 'contact@nubitech.io',
  support: 'support@nubitech.io',
} as const;

/**
 * Les deux liens `hreflang` d'une page, pour `metadata.alternates`.
 *
 * `x-default` pointe sur le français : c'est la version de référence, celle que le droit
 * français régit. Sans cette entrée, un moteur choisit lui-même et peut servir l'anglais
 * comme version canonique d'un contrat rédigé en français.
 */
export function alternatesDe(page: PageLegale, lang: DocsLang) {
  return {
    canonical: `${BASE_URL}${cheminDe(page, lang)}`,
    languages: {
      fr: `${BASE_URL}${cheminDe(page, 'fr')}`,
      en: `${BASE_URL}${cheminDe(page, 'en')}`,
      'x-default': `${BASE_URL}${cheminDe(page, 'fr')}`,
    },
  };
}
