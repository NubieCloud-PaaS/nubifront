'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import { usePathname, useRouter } from 'next/navigation';
import type { I18nProviderProps } from 'fumadocs-ui/contexts/i18n';

type I18nOptions = Omit<I18nProviderProps, 'children' | 'onLocaleChange'>;

/**
 * Providers du sous-arbre /docs.
 *
 * La locale est passée à `RootProvider` (et non à un I18nProvider imbriqué)
 * parce que c'est lui qui monte le dialogue de recherche : sans ça, la
 * recherche ne connaît pas la langue courante et renvoie les deux versions.
 *
 * Le sélecteur de langue par défaut de Fumadocs suppose que la locale est
 * toujours le premier segment de l'URL. Ici le français est masqué
 * (`hideLocale: 'default-locale'`) : /docs/... en FR, /en/docs/... en EN.
 * On réécrit donc nous-mêmes le chemin lors du changement de langue.
 */
export function DocsProviders({
  i18n,
  children,
}: {
  i18n: I18nOptions;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

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
      i18n={{
        ...i18n,
        onLocaleChange: (locale) => {
          const withoutPrefix = pathname.startsWith('/en/docs')
            ? pathname.slice('/en'.length)
            : pathname;

          router.push(locale === 'fr' ? withoutPrefix : `/en${withoutPrefix}`);
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
