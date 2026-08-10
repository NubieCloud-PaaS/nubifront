import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { i18nProvider } from '@/lib/i18n-ui';
import type { DocsLang } from '@/lib/i18n';
import { DocsProviders } from '@/components/docs/DocsProviders';

// Les providers sont montés ICI (sous-arbre /docs) et non dans le layout racine
// pour ne pas interférer avec la landing/blog. Le thème est isolé du
// ThemeProvider du site (storageKey dédié, défaut dark = marque Nubiecloud).
export function DocsShell({
  lang,
  children,
}: {
  lang: DocsLang;
  children: React.ReactNode;
}) {
  return (
    <DocsProviders i18n={i18nProvider(lang)}>
      <DocsLayout tree={source.getPageTree(lang)} {...baseOptions(lang)}>
        {children}
      </DocsLayout>
    </DocsProviders>
  );
}
