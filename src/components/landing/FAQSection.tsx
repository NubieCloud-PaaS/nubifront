'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ } from '@/content/faq';
import type { DocsLang } from '@/lib/i18n';


const LIBELLES = {
  fr: { titre: 'Questions frequentes', accroche: 'Tout ce que vous devez savoir pour demarrer.' },
  en: { titre: 'Frequently asked questions', accroche: 'Everything you need to know to get started.' },
} satisfies Record<DocsLang, Record<string, string>>;

export default function FAQSection({ lang = 'fr' }: { lang?: DocsLang } = {}) {
  const t = LIBELLES[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className="py-20 bg-surface-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {t.titre}
          </h2>
          <p className="text-lg text-text-secondary">
            {t.accroche}
          </p>
        </div>

        <div>
          {FAQ[lang].map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.reponse}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
