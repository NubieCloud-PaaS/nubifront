import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

// Endpoint interrogé par la barre de recherche de Fumadocs (`/api/search?query=…`).
// La source étant i18n, un index est construit par langue et le dialogue de
// recherche transmet automatiquement la locale courante — une recherche dans
// /en/docs ne remonte donc que des pages anglaises.
// `localeMap` associe chaque langue à son tokenizer Orama (stop-words, stemming).
export const { GET } = createFromSource(source, {
  localeMap: {
    fr: 'french',
    en: 'english',
  },
});
