'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { CheckIcon, XMarkIcon, MinusIcon } from '@heroicons/react/24/solid';

const criteria = [
  { label: 'Deploy time', nubi: '< 5 min', aws: '30+ min', heroku: '5-10 min', vercel: '< 1 min' },
  { label: 'SaaS 1-Click', nubi: true, aws: false, heroku: false, vercel: false },
  { label: 'SSL auto', nubi: true, aws: true, heroku: true, vercel: true },
  { label: 'Prix en XOF', nubi: true, aws: false, heroku: false, vercel: false },
  { label: 'Support francophone', nubi: true, aws: false, heroku: false, vercel: false },
  { label: 'CI/CD integre', nubi: true, aws: 'partial', heroku: true, vercel: true },
  { label: 'Monitoring', nubi: true, aws: 'partial', heroku: 'partial', vercel: 'partial' },
  { label: 'Complexite', nubi: 'Faible', aws: 'Elevee', heroku: 'Moyenne', vercel: 'Faible' },
];

type CellValue = boolean | string;

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />;
  if (value === false) return <XMarkIcon className="w-5 h-5 text-red-400/60 mx-auto" />;
  if (value === 'partial') return <MinusIcon className="w-5 h-5 text-yellow-400/60 mx-auto" />;
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <SectionWrapper className="py-20 bg-surface-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Pourquoi choisir Nubiecloud ?
          </h2>
          <p className="text-lg text-text-secondary">
            Comparez et decidez en toute confiance.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border-0">
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-text-tertiary font-medium">Critere</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center font-semibold text-blue-500 bg-blue-500/5 rounded-t-lg">Nubiecloud</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary font-medium">AWS</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary font-medium">Heroku</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-center text-text-tertiary font-medium">Vercel</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row) => (
                <tr key={row.label} className="border-b border-border-0/50">
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-text-secondary">{row.label}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-center bg-blue-500/5 font-medium text-text-primary">
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
