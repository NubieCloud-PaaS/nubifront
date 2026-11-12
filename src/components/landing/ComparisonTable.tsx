'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import type { DocsLang } from '@/lib/i18n';
import { CheckIcon, XMarkIcon, MinusIcon } from '@heroicons/react/24/solid';

const CRITERES = {
  fr: [
    { label: 'Deploy time', nubi: '< 5 min', aws: '30+ min', heroku: '5-10 min', vercel: '< 1 min' },
    { label: 'SaaS 1-Click', nubi: true, aws: false, heroku: false, vercel: false },
    { label: 'SSL auto', nubi: true, aws: true, heroku: true, vercel: true },
    { label: 'Prix en FCFA', nubi: true, aws: false, heroku: false, vercel: false },
    { label: 'Support francophone', nubi: true, aws: false, heroku: false, vercel: false },
    { label: 'CI/CD intégré', nubi: true, aws: 'partial', heroku: true, vercel: true },
    { label: 'Monitoring', nubi: true, aws: 'partial', heroku: 'partial', vercel: 'partial' },
    { label: 'Complexité', nubi: 'Faible', aws: 'Élevée', heroku: 'Moyenne', vercel: 'Faible' },
  ],
  en: [
    { label: 'Deploy time', nubi: '< 5 min', aws: '30+ min', heroku: '5-10 min', vercel: '< 1 min' },
    { label: 'One-click SaaS', nubi: true, aws: false, heroku: false, vercel: false },
    { label: 'Automatic SSL', nubi: true, aws: true, heroku: true, vercel: true },
    { label: 'Pricing in FCFA', nubi: true, aws: false, heroku: false, vercel: false },
    { label: 'French-speaking support', nubi: true, aws: false, heroku: false, vercel: false },
    { label: 'Built-in CI/CD', nubi: true, aws: 'partial', heroku: true, vercel: true },
    { label: 'Monitoring', nubi: true, aws: 'partial', heroku: 'partial', vercel: 'partial' },
    { label: 'Complexity', nubi: 'Low', aws: 'High', heroku: 'Medium', vercel: 'Low' },
  ],
} satisfies Record<DocsLang, { label: string; nubi: string | boolean; aws: string | boolean; heroku: string | boolean; vercel: string | boolean }[]>;

const LIBELLES = {
  fr: {
    titre: 'Pourquoi choisir Nubiecloud ?',
    accroche: 'Comparez et decidez en toute confiance.',
    critere: 'Critere',
  },
  en: {
    titre: 'Why choose Nubiecloud?',
    accroche: 'Compare, and decide with confidence.',
    critere: 'Criterion',
  },
} satisfies Record<DocsLang, Record<string, string>>;

type CellValue = boolean | string;

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />;
  if (value === false) return <XMarkIcon className="w-5 h-5 text-red-400/60 mx-auto" />;
  if (value === 'partial') return <MinusIcon className="w-5 h-5 text-yellow-400/60 mx-auto" />;
  return <span>{value}</span>;
}

export default function ComparisonTable({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const criteria = CRITERES[lang];
  const t = LIBELLES[lang];
  return (
    <SectionWrapper className="py-20 bg-surface-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {t.titre}
          </h2>
          <p className="text-lg text-text-secondary">
            {t.accroche}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border-0">
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-text-tertiary font-medium">{t.critere}</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center font-semibold text-accent-500 bg-accent-500/5 rounded-t-lg">Nubiecloud</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary font-medium">AWS</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary font-medium">Heroku</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary font-medium">Vercel</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row) => (
                <tr key={row.label} className="border-b border-border-0/50">
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-text-secondary">{row.label}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-center bg-accent-500/5 font-medium text-text-primary">
                    <CellContent value={row.nubi} />
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary">
                    <CellContent value={row.aws} />
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary">
                    <CellContent value={row.heroku} />
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary">
                    <CellContent value={row.vercel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
