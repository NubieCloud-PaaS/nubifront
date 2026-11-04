#!/usr/bin/env node
/**
 * LES DEUX LANGUES D'UN DOCUMENT CONTRACTUEL DOIVENT AVOIR LA MÊME STRUCTURE.
 *
 * Le mode de panne que ce script existe pour attraper : quelqu'un ajoute une clause au
 * français — une exclusion de responsabilité, une durée de conservation — et oublie
 * l'anglais. Rien ne lève, les deux pages s'affichent, et on publie DEUX CONTRATS
 * DIFFÉRENTS. C'est celui que la personne a lu qui l'engage, donc l'écart ne se découvre
 * qu'au litige.
 *
 * Ce dépôt n'a pas de runner de tests (ni jest, ni vitest) : ce script est donc lancé à
 * la main, `npm run verifier:legal`, et avant toute publication d'une modification de ces
 * pages.
 *
 * LES COMPARAISONS SONT STRUCTURELLES, JAMAIS TEXTUELLES. Un contrôle qui chercherait une
 * chaîne finirait par trouver sa propre explication dans un commentaire — piège payé
 * quatre fois dans ce dépôt le 2026-10-25. On compte des balises, après avoir retiré les
 * commentaires.
 */
import { readFileSync } from 'node:fs';

const DOCUMENTS = [
  {
    nom: 'conditions',
    fr: 'src/app/(fr)/conditions/page.tsx',
    en: 'src/app/(en)/en/conditions/page.tsx',
  },
  {
    nom: 'confidentialite',
    fr: 'src/app/(fr)/confidentialite/page.tsx',
    en: 'src/app/(en)/en/confidentialite/page.tsx',
  },
];

/** Retire les commentaires : un commentaire a le DROIT de nommer ce qu'il explique. */
function sansCommentaires(source) {
  return source
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '') // {/* commentaire JSX */}
    .replace(/\/\*[\s\S]*?\*\//g, '') // /* bloc */ et /** docstring */
    .replace(/^\s*\/\/.*$/gm, ''); // // ligne
}

/** Ce qui doit concorder, et pourquoi chaque élément y figure. */
const MESURES = [
  { cle: '<h2>', libelle: 'sections de premier niveau' },
  { cle: '<h3>', libelle: 'sous-sections' },
  { cle: '<table>', libelle: 'tableaux' },
  { cle: '<tr>', libelle: 'lignes de tableau (une clause ou une durée par ligne)' },
  { cle: '<li>', libelle: 'puces (une obligation ou une exclusion par puce)' },
];

let defauts = 0;
const dire = (m) => console.log(m);

for (const doc of DOCUMENTS) {
  dire(`\n=== ${doc.nom} ===`);
  const fr = sansCommentaires(readFileSync(doc.fr, 'utf8'));
  const en = sansCommentaires(readFileSync(doc.en, 'utf8'));

  for (const { cle, libelle } of MESURES) {
    const nFr = fr.split(cle).length - 1;
    const nEn = en.split(cle).length - 1;
    const verdict = nFr === nEn ? 'ok' : 'ECART';
    dire(`  ${cle.padEnd(9)} fr=${String(nFr).padStart(3)}  en=${String(nEn).padStart(3)}  ${verdict}   ${libelle}`);
    if (nFr !== nEn) defauts++;
  }

  // La VERSION et la DATE ne doivent pas être écrites en dur dans une page : elles
  // viennent de src/lib/legal.ts, sans quoi les deux langues peuvent les afficher
  // différemment — une acceptation enregistrée pour un texte que personne n'a lu.
  for (const [langue, source] of [['fr', fr], ['en', en]]) {
    if (/=\s*'\d+\.\d+'\s*;/.test(source)) {
      dire(`  ${langue} : VERSION ecrite en dur -- elle doit venir de src/lib/legal.ts`);
      defauts++;
    }
    if (!source.includes('alternatesDe(')) {
      dire(`  ${langue} : pas d'alternates derives -- la page de l'autre langue n'est pas declaree (hreflang)`);
      defauts++;
    }
    if (!source.includes('BasculeLangue')) {
      dire(`  ${langue} : aucun lien vers l'autre langue -- une page qu'on ne peut pas atteindre n'existe pas`);
      defauts++;
    }
  }

  // L'anglais doit dire qu'il est une traduction et que le français fait foi : sans cette
  // mention, deux textes se présentent comme deux contrats de même rang.
  if (!/reference/i.test(en)) {
    dire(`  en : la page ne dit pas que le francais est le texte de reference`);
    defauts++;
  }
}

dire(
  defauts === 0
    ? '\nLes deux langues concordent.'
    : `\n${defauts} ecart(s) -- corriger avant publication.`,
);
process.exit(defauts === 0 ? 0 : 1);
