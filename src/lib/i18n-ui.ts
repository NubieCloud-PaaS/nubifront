import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

// Libellés de l'interface Fumadocs (sidebar, recherche, TOC…). L'anglais est la
// langue native des composants : on ne surcharge que le nom affiché.
export const { provider: i18nProvider } = defineI18nUI(i18n, {
  en: {
    displayName: 'English',
  },
  fr: {
    displayName: 'Français',
    'Search(search dialog)': 'Rechercher',
    'Search(search trigger)': 'Rechercher',
    'No results found(search dialog)': 'Aucun résultat',
    'Close Search(search dialog)(aria-label)': 'Fermer la recherche',
    'Open Search(search trigger)(aria-label)': 'Ouvrir la recherche',
    'On this page(table of contents)': 'Sur cette page',
    'No Headings(table of contents)': 'Aucune section',
    'Table of Contents(inline table of contents)': 'Sommaire',
    'Next Page(pagination)': 'Page suivante',
    'Previous Page(pagination)': 'Page précédente',
    'Last updated on(page footer)': 'Dernière mise à jour le',
    'Choose a language(language switcher)': 'Choisir une langue',
    'Choose a language(language switcher)(aria-label)': 'Choisir une langue',
    'Toggle Theme(theme switcher)(aria-label)': 'Changer de thème',
    'Toggle Menu(mobile menu)(aria-label)': 'Ouvrir le menu',
    'Open Sidebar(sidebar)(aria-label)': 'Ouvrir la navigation',
    'Collapse Sidebar(sidebar)(aria-label)': 'Replier la navigation',
    'Light(theme switcher)(aria-label)': 'Clair',
    'Dark(theme switcher)(aria-label)': 'Sombre',
    'System(theme switcher)(aria-label)': 'Système',
    'Copy Text(code block)(aria-label)': 'Copier',
    'Copied Text(code block)(aria-label)': 'Copié',
    'Copy Anchor Link(heading anchor)(aria-label)': 'Copier le lien',
    'Copy Link(accordion)(aria-label)': 'Copier le lien',
    'Copy Markdown(page actions)': 'Copier le Markdown',
    'View as Markdown(page actions)': 'Voir en Markdown',
    'Edit on GitHub(edit page)': 'Modifier sur GitHub',
    'Page Not Found(404 page)': 'Page introuvable',
    'Back to Home(404 page)': "Retour à l'accueil",
    'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
      "La page recherchée a peut-être été supprimée, renommée, ou n'est temporairement pas disponible.",
    'Close Banner(banner)(aria-label)': 'Fermer la bannière',
    'Type(type table)': 'Type',
    'Prop(type table)': 'Propriété',
    'Default(type table)': 'Défaut',
    'Parameters(type table)': 'Paramètres',
    'Returns(type table)': 'Retourne',
  },
});
