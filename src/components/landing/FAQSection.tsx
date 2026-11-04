'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ } from '@/content/faq';


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className="py-20 bg-surface-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Questions frequentes
          </h2>
          <p className="text-lg text-text-secondary">
            Tout ce que vous devez savoir pour demarrer.
          </p>
        </div>

        <div>
          {FAQ.map((faq, i) => (
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
