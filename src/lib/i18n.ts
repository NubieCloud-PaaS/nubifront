import { defineI18n } from 'fumadocs-core/i18n';

/**
 * Documentation bilingue.
 *
 * - `parser: 'dir'` → les traductions vivent dans `content/docs/<lang>/…`.
 *   Les fichiers qui ne sont sous aucun dossier de langue appartiennent à la
 *   langue par défaut (le français, déjà en place à la racine de content/docs).
 * - `hideLocale: 'default-locale'` → le français garde ses URLs historiques
 *   (`/docs/...`) et l'anglais est préfixé (`/en/docs/...`).
 * - `fallbackLanguage: 'fr'` → une page non encore traduite reste accessible
 *   en anglais avec son contenu français plutôt que de renvoyer un 404.
 */
export const i18n = defineI18n({
  languages: ['fr', 'en'],
  defaultLanguage: 'fr',
  hideLocale: 'default-locale',
  parser: 'dir',
  fallbackLanguage: 'fr',
});

export type DocsLang = 'fr' | 'en';

/** Préfixe d'URL de la langue (vide pour la langue par défaut). */
export function langPrefix(lang: DocsLang): string {
  return lang === i18n.defaultLanguage ? '' : `/${lang}`;
}
