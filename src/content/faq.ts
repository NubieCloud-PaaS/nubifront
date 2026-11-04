/**
 * LA FAQ DE LA PAGE D'ACCUEIL — SOURCE UNIQUE.
 *
 * Elle était recopiée en DEUX endroits : le composant `FAQSection` et le balisage
 * JSON-LD `schema.org/FAQPage` de `(fr)/page.tsx`. Deux copies, donc deux occasions de
 * diverger — et la seconde est la plus dangereuse : c'est elle que Google affiche dans
 * ses résultats, donc une réponse périmée y survit à la correction de l'écran.
 *
 * TROIS RÉPONSES CONTREDISAIENT LE CONTRAT (relevé le 2026-11-04, avant de traduire la
 * page en anglais — traduire aurait propagé l'écart dans une seconde langue) :
 *
 *   annonce sur le site                 conditions d'utilisation v1.0
 *   « SLA 95 % » sur le Gratuit         « aucun engagement de disponibilité »
 *   « 99,9 % » sur Business             « 99,5 % pour les plans payants »
 *   « 99,99 % avec pénalités »          « ni avoir ni remboursement »
 *
 * En droit français une offre publique engage : un client pouvait invoquer le 99,99 % et
 * les pénalités affichés ici, que le contrat refuse. Décision de l'utilisateur : aligner
 * le SITE sur le contrat, ce qui évite une version 1.1 des conditions — donc une nouvelle
 * acceptation à redemander à tous les comptes.
 *
 * TOUTE VALEUR CONTRACTUELLE ÉCRITE ICI DOIT SE RETROUVER DANS /conditions. Avant d'en
 * ajouter une — disponibilité, délai de support, durée de conservation, remboursement —
 * la vérifier là-bas. Ce qui n'y figure pas n'est pas dû.
 */
export type EntreeFaq = {
  question: string;
  reponse: string;
};

const fr: EntreeFaq[] = [
  {
    question: "Qu'est-ce que Nubiecloud ?",
    reponse:
      "Nubiecloud est une plateforme cloud PaaS (Platform as a Service) qui permet de deployer des applications web, des SaaS et des ERP en quelques minutes. Nous gerons l'infrastructure pour que vous puissiez vous concentrer sur votre code.",
  },
  {
    question: 'Quels langages et frameworks sont supportes ?',
    reponse:
      "Nubiecloud supporte Node.js, Python, PHP, Go, Java, .NET, ainsi que les frameworks populaires comme Next.js, React, Django, Laravel, et bien d'autres. Nous detectons automatiquement votre stack technique.",
  },
  {
    question: 'Comment fonctionne le deploiement ?',
    reponse:
      "Connectez votre depot GitHub ou GitLab, configurez vos variables d'environnement, et poussez votre code. A chaque git push, Nubiecloud build, teste et deploie automatiquement votre application.",
  },
  {
    question: 'Puis-je deployer WordPress ou Odoo en un clic ?',
    reponse:
      "Oui ! Nubiecloud propose des templates preconfigures pour WordPress, Odoo, Dolibarr et d'autres SaaS/ERP. Le deploiement se fait en un clic avec base de donnees et SSL inclus.",
  },
  {
    // « Starter » a ete retire : ce plan est deprecie depuis la migration V029 (remappe
    // sur Professional). Le citer envoyait vers une offre qui n'existe plus.
    question: 'Quelle est la difference entre les plans Gratuit, Professional et Enterprise ?',
    reponse:
      "Le plan Gratuit est ideal pour tester avec 1 projet et des ressources limitees, sans limite de duree. Le plan Professional offre plus de puissance avec 5 projets et du load balancing. Enterprise propose une infrastructure dediee, avec des engagements negocies au contrat.",
  },
  {
    question: 'Pourquoi les tarifs sont en FCFA ?',
    reponse:
      "Nubiecloud est concu pour les developpeurs et les entreprises d'Afrique. Nos tarifs en FCFA eliminent les complications liees au change et offrent une facturation locale transparente, avec des prix differencies selon la region.",
  },
  {
    question: 'Puis-je essayer gratuitement ?',
    reponse:
      'Oui, le plan Gratuit vous permet de tester Nubiecloud gratuitement, sans limite de temps et sans carte bancaire. Vous pouvez deployer une application avec 0,5 vCPU, 1 Go RAM et 5 Go SSD.',
  },
  {
    // Repris mot pour mot sur les conditions d'utilisation, point 4. Le plan Gratuit n'a
    // AUCUN engagement, et il faut le dire plutot que de laisser le silence s'interpreter.
    question: 'Quel est le SLA garanti ?',
    reponse:
      "Nous nous engageons sur une disponibilite de 99,5 % par mois civil pour les organisations sur un plan payant. Le plan Gratuit ne porte aucun engagement de disponibilite. Si l'engagement n'est pas tenu, il n'y a ni avoir ni remboursement, mais une disponibilite restee sous 99,5 % pendant trois mois civils consecutifs vous permet de resilier sans frais et sans preavis. Le detail figure dans nos conditions d'utilisation.",
  },
];

/**
 * MEME NOMBRE D'ENTREES, DANS LE MEME ORDRE.
 *
 * `EntreeFaq[]` ne verifie que le type, pas la longueur : une question ajoutee au seul
 * francais passerait la compilation. Le balisage JSON-LD etant derive de la langue
 * rendue, l'ecart se verrait dans les resultats de recherche d'une langue et pas de
 * l'autre. `npm run verifier:legal` compte les deux.
 */
const en: EntreeFaq[] = [
  {
    question: 'What is Nubiecloud?',
    reponse:
      'Nubiecloud is a cloud PaaS (Platform as a Service) that lets you deploy web applications, SaaS products and ERPs in minutes. We run the infrastructure so that you can focus on your code.',
  },
  {
    question: 'Which languages and frameworks are supported?',
    reponse:
      'Nubiecloud supports Node.js, Python, PHP, Go, Java and .NET, along with popular frameworks such as Next.js, React, Django and Laravel. We detect your stack automatically.',
  },
  {
    question: 'How does deployment work?',
    reponse:
      'Connect your GitHub or GitLab repository, set your environment variables, and push your code. On every git push, Nubiecloud builds, tests and deploys your application automatically.',
  },
  {
    question: 'Can I deploy WordPress or Odoo in one click?',
    reponse:
      'Yes. Nubiecloud offers preconfigured templates for WordPress, Odoo, Dolibarr and other SaaS and ERP products. Deployment takes one click, database and SSL included.',
  },
  {
    question: 'What is the difference between the Free, Professional and Enterprise plans?',
    reponse:
      'The Free plan is ideal for testing, with 1 project and limited resources, and with no time limit. The Professional plan offers more power, with 5 projects and load balancing. Enterprise provides dedicated infrastructure, with commitments negotiated in the contract.',
  },
  {
    question: 'Why are prices in FCFA?',
    reponse:
      'Nubiecloud is built for developers and companies in Africa. Pricing in FCFA removes the friction of currency conversion and gives you transparent local billing, with prices that differ by region.',
  },
  {
    question: 'Can I try it for free?',
    reponse:
      'Yes. The Free plan lets you try Nubiecloud at no cost, with no time limit and no credit card. You can deploy one application with 0.5 vCPU, 1 GB RAM and 5 GB SSD.',
  },
  {
    // Reprend mot pour mot les conditions d'utilisation, point 4 -- version anglaise.
    question: 'What availability do you commit to?',
    reponse:
      "We commit to 99.5% availability per calendar month for organisations on a paid plan. The Free plan carries no availability commitment. If the commitment is not met there is no credit and no refund, but availability that stays below 99.5% for three consecutive calendar months lets you terminate at no cost and with no notice period. The details are in our terms of service.",
  },
];

export const FAQ = { fr, en };
