import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import 'fumadocs-ui/style.css';

// RootProvider est monté ICI (sous-arbre /docs) et non dans le layout racine
// pour ne pas interférer avec la landing/blog. Le thème est isolé du
// ThemeProvider du site (storageKey dédié, défaut dark = marque Nubiecloud).
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider
      theme={{
        defaultTheme: 'dark',
        enableSystem: false,
        storageKey: 'docs-theme',
        // Fumadocs marque le thème clair par l'ABSENCE de classe sur <html>, alors
        // que globals.css est dark-first : sans classe, ce sont les tokens sombres
        // qui s'appliquent au body (texte clair) sous les panneaux clairs de
        // Fumadocs. On force donc la classe `light` attendue par le site.
        value: { light: 'light', dark: 'dark' },
      }}
    >
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
