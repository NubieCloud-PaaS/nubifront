import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

import { i18n, type DocsLang } from '@/lib/i18n';

/**
 * OU VIVENT LES ARTICLES, PAR LANGUE.
 *
 * Le francais reste a la RACINE de `content/blog`, l'anglais dans `content/blog/en` --
 * exactement la convention de la documentation Fumadocs (`parser: 'dir'`, le francais a
 * la racine de `content/docs`). Reprendre la meme forme evite deux facons de ranger du
 * contenu dans le meme depot.
 *
 * `withFileTypes` est load-bearing : sans lui, `readdirSync` sur la racine rend AUSSI le
 * dossier `en`, qui deviendrait un article de slug « en » -- un article fantome qui
 * planterait a la lecture de son frontmatter.
 */
const RACINE = path.join(process.cwd(), 'content/blog');

function dossierDe(lang: DocsLang): string {
  return lang === i18n.defaultLanguage ? RACINE : path.join(RACINE, lang);
}

function fichiersDe(lang: DocsLang): string[] {
  const dossier = dossierDe(lang);
  if (!fs.existsSync(dossier)) return [];
  return fs
    .readdirSync(dossier, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => e.name);
}

export type PostData = {
  slug: string;
  date: string;
  title: string;
  author: string;
  tags: string[];
  description: string;
  image: string;
  readingTime?: number;
};

export function getSortedPostsData(lang: DocsLang = i18n.defaultLanguage): PostData[] {
  const fileNames = fichiersDe(lang);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(dossierDe(lang), fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<PostData, 'slug'>),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(lang: DocsLang = i18n.defaultLanguage) {
  const fileNames = fichiersDe(lang);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

/**
 * UN ARTICLE NON TRADUIT N'EST PAS SERVI EN ANGLAIS, et c'est volontaire.
 *
 * La documentation, elle, retombe sur le francais (`fallbackLanguage: 'fr'`) : on y
 * cherche une information precise, mieux vaut la lire dans l'autre langue que recevoir un
 * 404. Un ARTICLE de blog est different -- le servir en francais sous une URL anglaise
 * presenterait un contenu que le lecteur n'a pas demande, et le referencerait comme
 * anglais. Les listes et `generateStaticParams` ne nomment donc que ce qui existe.
 */
export async function getPostData(slug: string, lang: DocsLang = i18n.defaultLanguage) {
  const fullPath = path.join(dossierDe(lang), `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    // GFM : sans lui, les tableaux Markdown des articles sortaient en pipes bruts.
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<PostData, 'slug'>),
  };
}
