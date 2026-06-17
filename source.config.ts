import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Sources de la documentation utilisateur Nubiecloud (MDX).
// Cf. PLAN-documentation-utilisateur.md (§8) — la doc vit dans nubifront.
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // Les captures sont des placeholders fournis plus tard par l'équipe (cf. §3.4
    // du plan). useImport:false → les images sont référencées depuis /public à
    // l'exécution au lieu d'être importées statiquement au build (qui échouerait
    // tant que le PNG n'existe pas). Dès qu'un PNG est déposé au bon chemin, il
    // s'affiche sans rebuild.
    remarkImageOptions: {
      useImport: false,
    },
  },
});
