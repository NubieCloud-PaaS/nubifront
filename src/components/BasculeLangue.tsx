import { cheminDe, type PageLegale } from '@/lib/legal';
import type { DocsLang } from '@/lib/i18n';

/**
 * LE LIEN VERS L'AUTRE LANGUE D'UN DOCUMENT CONTRACTUEL.
 *
 * Il existe parce que rien d'autre ne mène à la version anglaise. Le sélecteur de langue
 * du site est celui de Fumadocs, et il ne vit QUE dans le sous-arbre `/docs` : hors de
 * là — landing, blog, pages juridiques — il n'y a aucune bascule. Une page anglaise que
 * personne ne peut atteindre depuis la française est une page qui n'existe pas en
 * pratique, et c'est exactement ce qu'un lecteur anglophone reprocherait.
 *
 * Il n'y a donc pas de détection de langue du navigateur, à dessein : le français est la
 * version de référence (droit français, `x-default`), et rediriger quelqu'un vers une
 * traduction sans qu'il l'ait demandé lui cacherait le texte qui fait foi.
 *
 * Composant SERVEUR : il ne fait que rendre un lien, aucun état. L'ajouter au bundle
 * client pour deux `<a>` serait du gaspillage.
 */
export default function BasculeLangue({
  page,
  lang,
}: {
  page: PageLegale;
  lang: DocsLang;
}) {
  const autre: DocsLang = lang === 'fr' ? 'en' : 'fr';

  // `hrefLang` + `lang` sur le lien : ils disent au lecteur d'écran et aux moteurs que la
  // cible change de langue. Sans eux, « English » serait prononcé à la française.
  return (
    <a
      href={cheminDe(page, autre)}
      hrefLang={autre}
      lang={autre}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border-1 bg-surface-1 px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:border-border-2 transition-colors"
    >
      <svg
        className="h-4 w-4 text-text-tertiary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a16 16 0 000 18M12 3a16 16 0 010 18"
        />
      </svg>
      {autre === 'en' ? 'Read in English' : 'Lire en français'}
    </a>
  );
}
