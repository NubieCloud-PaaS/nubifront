'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AccordionItem from '@/components/ui/AccordionItem';

const faqs = [
  {
    question: 'Qu\'est-ce que Nubiecloud ?',
    answer: 'Nubiecloud est une plateforme cloud PaaS (Platform as a Service) qui permet de deployer des applications web, des SaaS et des ERP en quelques minutes. Nous gerons l\'infrastructure pour que vous puissiez vous concentrer sur votre code.',
  },
  {
    question: 'Quels langages et frameworks sont supportes ?',
    answer: 'Nubiecloud supporte Node.js, Python, PHP, Go, Java, .NET, ainsi que les frameworks populaires comme Next.js, React, Django, Laravel, et bien d\'autres. Nous detectons automatiquement votre stack technique.',
  },
  {
    question: 'Comment fonctionne le deploiement ?',
    answer: 'Connectez votre depot GitHub ou GitLab, configurez vos variables d\'environnement, et poussez votre code. A chaque git push, Nubiecloud build, teste et deploie automatiquement votre application.',
  },
  {
    question: 'Puis-je deployer WordPress ou Odoo en un clic ?',
    answer: 'Oui ! Nubiecloud propose des templates preconfigures pour WordPress, Odoo, Dolibarr et d\'autres SaaS/ERP. Le deploiement se fait en un clic avec base de donnees et SSL inclus.',
  },
  {
    question: 'Quelle est la difference entre les plans Free, Pro et Enterprise ?',
    answer: 'Le plan Free est ideal pour tester avec 1 projet et des ressources limitees. Le plan Professional offre plus de puissance avec 5 projets et du load balancing. Enterprise propose une infrastructure 100% dediee avec SLA 99.99% et support 24/7.',
  },
  {
    question: 'Pourquoi les tarifs sont en XOF ?',
    answer: 'Nubiecloud est concu pour les developpeurs et entreprises d\'Afrique de l\'Ouest. Nos tarifs en XOF (Franc CFA) eliminent les complications liees au change et offrent une facturation locale transparente.',
  },
  {
    question: 'Puis-je essayer gratuitement ?',
    answer: 'Oui, le plan Free vous permet de tester Nubiecloud gratuitement pendant 30 jours sans carte bancaire. Vous pouvez deployer une application avec 1 vCPU, 1 GB RAM et 10 GB SSD.',
  },
  {
    question: 'Quel est le SLA garanti ?',
    answer: 'Le SLA varie selon le plan : 95% pour Free, 99% pour Starter, 99.5% pour Professional, 99.9% pour Business, et 99.99% pour Enterprise avec penalites contractuelles.',
  },
];

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
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
