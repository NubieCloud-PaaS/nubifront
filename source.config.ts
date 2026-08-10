import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Sources de la documentation utilisateur Nubiecloud (MDX).
// Cf. PLAN-documentation-utilisateur.md (§8) — la doc vit dans nubifront.
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // useImport:false → les images sont servies depuis /public à l'exécution au
    // lieu d'être importées statiquement au build. Déposer un fichier au bon
    // chemin suffit à l'afficher, sans casser le build s'il manque encore.
    remarkImageOptions: {
      useImport: false,
    },
  },
});
