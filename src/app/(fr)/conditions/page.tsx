import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BasculeLangue from '@/components/BasculeLangue';
import {
  VERSION_CONDITIONS,
  DATE_VERSION as DATES,
  alternatesDe,
  cheminDe,
} from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Conditions d’utilisation — Nubiecloud',
  description:
    'Les conditions d’utilisation de Nubiecloud : objet, compte, répartition des responsabilités entre la plateforme et le client, disponibilité, usages interdits, tarifs, résiliation.',
  openGraph: {
    title: 'Conditions d’utilisation — Nubiecloud',
    description:
      'Les conditions d’utilisation de Nubiecloud : objet, compte, répartition des responsabilités entre la plateforme et le client, disponibilité, usages interdits, tarifs, résiliation.',
    url: 'https://nubiecloud.io/conditions',
    siteName: 'Nubiecloud',
    locale: 'fr_FR',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conditions d’utilisation — Nubiecloud',
    description:
      'Objet, compte, répartition des responsabilités, disponibilité, usages interdits, tarifs et résiliation.',
  },
  alternates: alternatesDe('conditions', 'fr'),
};

/**
 * VERSION ET DATE SONT CONTRACTUELLES, pas décoratives — et PARTAGÉES avec la version
 * anglaise, d'où `src/lib/legal.ts`.
 *
 * L'acceptation de ces conditions est enregistrée côté serveur à l'inscription, avec la
 * version acceptée. Modifier le TEXTE sans incrémenter la version rend donc tous les
 * enregistrements inexploitables : on ne saurait plus ce que les personnes ont accepté.
 * Et afficher deux versions différentes selon la langue serait pire — on enregistrerait
 * une acceptation pour un texte que la personne n'a pas lu.
 *
 * Toute modification de fond de cette page = nouvelle version + nouvelle date, DANS LES
 * DEUX LANGUES. Une correction de pure forme (faute de frappe) peut rester à version
 * égale.
 */
const VERSION = VERSION_CONDITIONS;
const DATE_VERSION = DATES.fr;

export default function ConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <Navbar />

      <main className="flex-grow pt-12 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-12">
            <div className="mb-6">
              <BasculeLangue page="conditions" lang="fr" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Conditions d’utilisation
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Ce que nous prenons en charge, ce qui reste à votre main, et ce à quoi vous vous
              engagez en utilisant Nubiecloud.
            </p>
            {/* Le séparateur est du TEXTE, pas un espacement de flexbox : cette ligne
                est celle qu'on recopie dans un enregistrement d'acceptation ou dans
                un échange de support, et un `gap` ne se copie pas — on obtiendrait
                « Version 1.0•en vigueur depuis le… ». */}
            <p className="mt-6 inline-block rounded-lg border border-border-1 bg-surface-1 px-4 py-2 text-sm">
              <span className="font-semibold text-text-primary">Version {VERSION}</span>
              <span className="text-text-quaternary">{' • '}</span>
              <span className="text-text-secondary">en vigueur depuis le {DATE_VERSION}</span>
            </p>
            <p className="mt-3 text-sm text-text-tertiary">
              C’est cette version qui est enregistrée lorsque vous acceptez les présentes
              conditions à la création de votre compte.
            </p>
          </header>

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight prose-a:text-accent-400 hover:prose-a:text-accent-300 prose-strong:font-bold prose-code:text-accent-300 prose-code:bg-surface-3 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-hr:border-border-1">
            <h2>1. Objet et acceptation</h2>

            <p>
              Nubiecloud est une plateforme de déploiement et d’exploitation d’applications
              (PaaS). Elle est éditée par <strong>NUBITECH SAS</strong>, société par actions
              simplifiée de droit français immatriculée au registre du commerce et des sociétés
              sous le numéro SIREN <strong>105&nbsp;358&nbsp;543</strong>, dont le siège social
              est situé <strong>200 rue de la Croix Nivert, 75015 Paris, France</strong>.
            </p>

            <p>
              Les présentes conditions régissent l’usage du site <code>nubiecloud.io</code>, de la
              console <code>console.nubiecloud.io</code>, de l’API <code>api.nubiecloud.io</code>{' '}
              et du serveur MCP exposé sous <code>api.nubiecloud.io/mcp</code>. Elles forment un
              contrat entre NUBITECH SAS et vous — à titre personnel si vous utilisez la
              plateforme pour vous-même, ou l’entité que vous représentez si vous créez une
              organisation pour son compte. Dans ce dernier cas, vous déclarez en avoir le
              pouvoir.
            </p>

            <p>
              Vous les acceptez en <strong>cochant la case prévue à cet effet</strong> lors de la
              création de votre compte. Ce n’est pas une acceptation tacite : sans cette case
              cochée, l’inscription n’aboutit pas.
            </p>

            <p>
              Votre acceptation est <strong>enregistrée</strong> avec la{' '}
              <strong>version {VERSION}</strong> de ce document et sa date. C’est ce qui permet de
              savoir, plus tard, ce qui a été accepté exactement — et c’est pourquoi toute
              modification de fond donne lieu à une nouvelle version numérotée (point 10).
            </p>

            <h2>2. Votre compte</h2>

            <ul>
              <li>
                Un compte est <strong>personnel</strong>. Il ne se partage pas : pour donner accès
                à quelqu’un, invitez-le comme membre de votre organisation.
              </li>
              <li>
                Les informations que vous renseignez doivent être exactes, en particulier votre
                adresse email — c’est par elle que passent la vérification du compte, la
                réinitialisation du mot de passe et la confirmation d’un nouvel appareil.
              </li>
              <li>
                Vous êtes responsable de la confidentialité de vos identifiants et de ce qui est
                fait avec votre compte. Nous mettons à votre disposition la{' '}
                <a href="/docs/compte/securite">double authentification (TOTP)</a> et la gestion
                des appareils de confiance ; les activer est votre décision.
              </li>
              <li>
                Une organisation a un <strong>Owner</strong> unique, qui peut nommer des{' '}
                <strong>Admins</strong> et inviter des <strong>Members</strong>. Les droits
                attachés à chaque rôle sont décrits dans la{' '}
                <a href="/docs/organisations/membres">documentation</a>.
              </li>
            </ul>

            <h2>3. Rôles et responsabilités</h2>

            <p>
              C’est la section la plus importante de ce document. Une plateforme managée n’est pas
              un prestataire qui prend tout en charge, ni un simple hébergeur qui ne prend rien :
              la frontière est précise, et la connaître évite les mauvaises surprises.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Sujet</th>
                  <th>Nubiecloud prend en charge</th>
                  <th>Vous restez responsable de</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Correctifs</strong></td>
                  <td>
                    le système d’exploitation, Kubernetes, l’ingress, les charts de déploiement et
                    les constructeurs d’images
                  </td>
                  <td>
                    votre code applicatif, vos dépendances, et l’image de base que vous choisissez
                  </td>
                </tr>
                <tr>
                  <td><strong>Secrets</strong></td>
                  <td>
                    leur conservation chiffrée — ils ne sont jamais stockés en clair, ni réaffichés
                    après enregistrement, ni restitués à un agent IA
                  </td>
                  <td>
                    les choisir, les faire tourner, et ne pas les committer dans votre dépôt
                  </td>
                </tr>
                <tr>
                  <td><strong>Sauvegardes</strong></td>
                  <td>
                    les exécuter selon la planification que vous définissez, et les restaurer à
                    votre demande
                  </td>
                  <td>
                    <strong>choisir la durée de rétention</strong>, et{' '}
                    <strong>éprouver une restauration avant d’en avoir besoin</strong>
                  </td>
                </tr>
                <tr>
                  <td><strong>Données applicatives</strong></td>
                  <td>leur hébergement et leur exécution pour votre compte</td>
                  <td>
                    leur contenu, leur licéité, et les droits des personnes concernées
                  </td>
                </tr>
                <tr>
                  <td><strong>Suppression</strong></td>
                  <td>
                    aucune action destructrice automatique ; aucun agent IA ne peut détruire quoi
                    que ce soit
                  </td>
                  <td>la décider, dans la console</td>
                </tr>
                <tr>
                  <td><strong>Accès</strong></td>
                  <td>
                    l’authentification, la double authentification et les journaux d’audit
                  </td>
                  <td>la gestion de vos membres et de leurs rôles</td>
                </tr>
              </tbody>
            </table>

            <h3>⚠️ Ce que les sauvegardes couvrent, et ce qu’elles ne couvrent pas</h3>

            <p>
              <strong>
                Les sauvegardes gérées par la plateforme portent sur les bases de données
                PostgreSQL managées — et sur Odoo, qui s’appuie sur PostgreSQL. Elles ne portent
                sur rien d’autre.
              </strong>
            </p>

            <ul>
              <li>
                Les autres services managés — <strong>MySQL, Redis, RabbitMQ, Kafka</strong> — ne
                disposent pas de sauvegarde native sur la plateforme.
              </li>
              <li>
                Les <strong>applications de code</strong> n’ont pas de sauvegarde applicative, et
                le chart qui les déploie <strong>ne monte aucun volume persistant</strong>. Un
                fichier écrit sur le disque d’un conteneur disparaît au redéploiement suivant : si
                votre application doit conserver des données, elles doivent aller dans une base
                managée ou dans un bucket NubiS3.
              </li>
            </ul>

            <p>
              Nous l’écrivons ici parce que c’est l’hypothèse fausse la plus coûteuse qu’on puisse
              faire sur une plateforme managée. Si votre plan de reprise suppose que « tout est
              sauvegardé », il est à revoir avant l’incident, pas après. Le périmètre exact est
              détaillé dans la <a href="/docs/backups">documentation des sauvegardes</a>.
            </p>

            <h3>Agents IA connectés au serveur MCP</h3>

            <p>
              Si vous connectez un agent IA à votre organisation, il agit{' '}
              <strong>avec vos droits et jamais plus</strong>. Une limite est structurelle et ne
              dépend d’aucun réglage : <strong>aucun outil MCP ne peut détruire quoi que ce
              soit</strong> — il n’existe pas de capacité de suppression dans le modèle.
              Supprimer un déploiement, un environnement, un projet ou une base se fait dans la
              console, par une personne.
            </p>

            <p>
              En revanche, un agent peut créer, configurer et redémarrer. Ce que vous l’autorisez
              à faire relève de vous : les capacités accordées, les approbations et ce qu’un agent
              ne peut pas faire sont décrits dans la{' '}
              <a href="/docs/mcp">documentation du serveur MCP</a>.
            </p>

            <h2>4. Disponibilité et support</h2>

            <p>
              Nous exploitons la plateforme avec soin et nous surveillons son état en continu.
              Aucune plateforme ne fonctionne pour autant sans interruption : il y a des
              maintenances, des incidents chez les fournisseurs d’infrastructure, et des pannes.
              L’engagement ci-dessous dit ce sur quoi nous nous engageons malgré cela, et ce que
              vous pouvez faire s’il n’est pas tenu.
            </p>

            <h3>Niveau de disponibilité</h3>

            <p>
              Nous nous engageons sur une disponibilité de <strong>99,5 % par mois civil</strong>{' '}
              pour les organisations sur un <strong>plan payant</strong>.
            </p>

            <p>
              <strong>
                Le plan Gratuit ne porte aucun engagement de disponibilité.
              </strong>{' '}
              Nous l’écrivons plutôt que de laisser le silence s’interpréter : la plateforme y est
              exploitée avec le même soin, mais sans engagement contractuel. Un usage de
              production qui exige une garantie relève d’un plan payant.
            </p>

            <p>
              Le taux est constaté par mois civil à partir de nos relevés de supervision, que nous
              vous communiquons sur demande. <strong>Si l’engagement n’est pas tenu, il n’y a ni
              avoir ni remboursement</strong> — c’est un choix, et il a une contrepartie : si la
              disponibilité reste sous 99,5 % pendant <strong>trois mois civils
              consécutifs</strong>, vous pouvez <strong>résilier sans frais et sans préavis</strong>,
              en nous écrivant à <a href="mailto:contact@nubitech.io">contact@nubitech.io</a>. La
              résiliation prend effet à la réception de votre demande, et les sommes déjà réglées
              pour la période écoulée restent acquises.
            </p>

            <h3>Support</h3>

            <p>
              Sur un <strong>plan payant</strong>, nous nous engageons à une{' '}
              <strong>première réponse sous un jour ouvré</strong>. Sur le{' '}
              <strong>plan Gratuit, aucun délai n’est garanti</strong> : nous répondons, sans nous
              engager sur un délai.
            </p>

            <p>
              Le support se demande à{' '}
              <a href="mailto:support@nubitech.io">support@nubitech.io</a>, et les questions
              commerciales à <a href="mailto:contact@nubitech.io">contact@nubitech.io</a>. Un délai
              de première réponse est un délai de prise en charge, pas un délai de résolution :
              celui-ci dépend de la nature du problème.
            </p>

            <h3>Maintenances</h3>

            <p>
              Lorsqu’une maintenance programmée doit interrompre le service, nous vous prévenons{' '}
              <strong>par email avec un préavis d’au moins 24 heures</strong>.
            </p>

            <p>
              <strong>Une exception, et il faut la dire :</strong> une{' '}
              <strong>correction de sécurité urgente</strong> peut devoir être appliquée
              immédiatement, sans préavis. Attendre 24 heures pour fermer une faille exposerait vos
              données et celles des autres clients — ce serait tenir la clause contre son objet.
              Dans ce cas, nous vous informons dès que possible, pendant ou après l’intervention.
            </p>

            <h3>Évolutions de la plateforme</h3>

            <p>
              Nous pouvons faire évoluer la plateforme, ajouter ou retirer des fonctionnalités. Si
              le retrait d’une fonctionnalité que vous utilisez devient nécessaire, nous vous en
              informons par email avec un <strong>préavis d’un mois</strong>.
            </p>

            <h2>5. Usages interdits</h2>

            <p>Vous vous engagez à ne pas utiliser Nubiecloud pour :</p>

            <ul>
              <li>
                une activité illicite, ou pour héberger un contenu illicite, contrefaisant, ou
                qui porte atteinte aux droits d’un tiers ;
              </li>
              <li>
                diffuser des logiciels malveillants, mener des campagnes d’hameçonnage ou envoyer
                des messages non sollicités en masse ;
              </li>
              <li>
                attaquer un tiers — déni de service, balayage de ports, intrusion — depuis nos
                ressources ;
              </li>
              <li>
                porter atteinte à la plateforme elle-même : tenter de sortir de l’isolation de
                votre environnement, accéder aux ressources d’un autre client, contourner les
                quotas ou les mécanismes d’authentification ;
              </li>
              <li>
                soumettre la plateforme à une charge manifestement disproportionnée au regard des
                ressources réservées, au détriment des autres clients.
              </li>
            </ul>

            <p>
              Sont également <strong>interdits nommément</strong> :
            </p>

            <ul>
              <li>
                le <strong>minage de cryptomonnaie</strong>, sous toutes ses formes ;
              </li>
              <li>
                le <strong>détournement des ressources de calcul</strong> vers un usage sans
                rapport avec l’application déployée — cassage de mots de passe, calcul distribué
                pour le compte d’un tiers, et plus généralement toute charge dont l’objet est de
                consommer du calcul plutôt que de servir votre application ;
              </li>
              <li>
                les <strong>tests de charge ou de résistance visant une infrastructure
                tierce</strong> depuis nos ressources.
              </li>
            </ul>

            <p>
              En cas de manquement grave ou de menace immédiate pour la plateforme ou pour
              d’autres clients, nous pouvons suspendre l’accès concerné. Nous vous en informons et
              vous en expliquons la raison ; sauf urgence, nous vous laissons l’occasion de
              corriger.
            </p>

            <h2>6. Données personnelles</h2>

            <p>
              Le traitement des données personnelles est décrit dans notre{' '}
              <a href={cheminDe('confidentialite', 'fr')}>politique de confidentialité</a>, qui fait partie
              intégrante des présentes conditions. Nous ne la répétons pas ici.
            </p>

            <p>
              Un point mérite d’être rappelé, parce qu’il recoupe la répartition des rôles
              ci-dessus : pour les données de votre compte et de votre facturation, c’est nous qui
              décidons du traitement. Pour les données que <em>vos</em> applications traitent,
              c’est vous — vous en déterminez la finalité, et il vous revient d’avoir une base
              légale, d’informer les personnes concernées et de répondre à l’exercice de leurs
              droits. Nous les hébergeons et les exécutons pour votre compte.
            </p>

            <p>
              Un <strong>accord de sous-traitance au sens de l’article 28 du RGPD</strong> est
              proposé aux clients qui en ont besoin : demandez-le à{' '}
              <a href="mailto:contact@nubitech.io">contact@nubitech.io</a> et nous vous
              l’adressons pour signature.
            </p>

            <h2>7. Tarifs et facturation</h2>

            <p>
              La plateforme propose <strong>quatre plans</strong> — Gratuit, Professional,
              Business et Enterprise — dont les quotas et les tarifs mensuels sont publiés dans la{' '}
              <a href="/docs/facturation">documentation</a>. Les prix sont exprimés{' '}
              <strong>en FCFA</strong> et <strong>différenciés par région</strong> (Afrique /
              Europe) ; le plan Enterprise est sur devis.
            </p>

            <ul>
              <li>
                Toute organisation démarre au plan <strong>Gratuit</strong>, qui est{' '}
                <strong>sans limite de durée</strong> : ce n’est pas une période d’essai.
              </li>
              <li>
                Les plans payants s’obtiennent <strong>sur demande</strong> depuis la console, et
                sont activés par nos équipes après accord sur les modalités. Vos quotas augmentent{' '}
                <strong>à l’activation</strong>, pas à la demande.
              </li>
              <li>
                <strong>La console n’encaisse pas.</strong> Le paiement et la facturation en ligne
                n’existent pas : les modalités (virement, Mobile Money) se règlent avec notre
                équipe.
              </li>
              <li>
                L’estimation de coût affichée à la configuration d’un projet est un{' '}
                <strong>ordre de grandeur</strong> destiné au dimensionnement. Ce n’est pas une
                facture, et elle ne nous engage pas sur un montant.
              </li>
              <li>
                Quand une ressource atteint le quota de votre plan, la création de nouvelles
                ressources est <strong>bloquée</strong> jusqu’à libération ou montée de plan. Les
                ressources déjà en service continuent de fonctionner.
              </li>
              <li>
                La redescente vers le plan Gratuit est immédiate et à votre main — elle n’est
                refusée que si votre consommation dépasse les quotas du Gratuit.
              </li>
            </ul>

            <h3>Règlement</h3>

            <p>
              Nos factures sont payables à <strong>30 jours</strong> à compter de leur date
              d’émission.
            </p>

            <p>
              En cas de retard, nous vous relançons. Si le retard atteint{' '}
              <strong>15 jours</strong>, nous pouvons <strong>suspendre le service</strong>.
            </p>

            <p>
              <strong>
                Une suspension coupe l’accès et arrête l’exécution de vos applications ; elle ne
                détruit pas vos données.
              </strong>{' '}
              Vos bases, vos sauvegardes et vos fichiers restent en place, et le service reprend
              au règlement. Seule une résiliation, ou une suppression que vous décidez,
              entraîne un effacement.
            </p>

            <h3>Évolution des tarifs</h3>

            <p>
              Si nous modifions le tarif d’un plan auquel vous êtes déjà abonné, nous vous en
              informons par email avec un <strong>préavis d’un mois</strong> avant son
              application.
            </p>

            <h2>8. Durée, résiliation et suppression</h2>

            <p>
              Le contrat prend effet à la création de votre compte et dure aussi longtemps que
              vous utilisez la plateforme. Le plan Gratuit est sans engagement de durée.
            </p>

            <p>
              <strong>De votre côté.</strong> Vous pouvez à tout moment redescendre au plan
              Gratuit, supprimer vos ressources, ou supprimer votre compte depuis votre profil.
              Un point à connaître avant de supprimer un compte : si vous détenez des ressources,
              elles <strong>ne sont pas détruites</strong> — elles sont transférées au
              propriétaire de l’organisation, et la console vous montre l’aperçu de ce transfert
              avant que vous confirmiez.
            </p>

            <p>
              Pour résilier un <strong>plan payant</strong>, écrivez-nous avec un{' '}
              <strong>préavis de 30 jours</strong>. Le <strong>mois entamé reste dû</strong> : la
              résiliation prend effet au terme du préavis, et le mois en cours n’est pas calculé
              au prorata.
            </p>

            <p>
              <strong>De notre côté.</strong> Nous pouvons résilier avec un{' '}
              <strong>préavis de 30 jours</strong>, notifié par email.
            </p>

            <p>
              <strong>L’exception est le manquement grave</strong> — usage interdit, atteinte à la
              plateforme ou aux autres clients, activité illicite : dans ce cas, la{' '}
              <strong>suspension est immédiate</strong> et sans préavis, parce qu’attendre 30 jours
              laisserait le dommage se produire. Nous vous en informons et vous en expliquons la
              raison. Le non-paiement suit le régime décrit au point 7 : relance, puis suspension
              à 15 jours de retard.
            </p>

            <h3>Récupérer vos données après une résiliation</h3>

            <p>
              Quelle qu’en soit l’origine, une résiliation ouvre un délai de{' '}
              <strong>30 jours</strong> pendant lequel vos données sont conservées et{' '}
              <strong>restent récupérables</strong> : écrivez à{' '}
              <a href="mailto:contact@nubitech.io">contact@nubitech.io</a> et nous vous donnons les
              moyens de les exporter. Au terme de ce délai, elles sont effacées.
            </p>

            <p>
              Ce délai s’accorde avec notre{' '}
              <a href={cheminDe('confidentialite', 'fr')}>politique de confidentialité</a>, qui annonce un
              effacement sous 30 jours — et qui détaille les deux seules exceptions : les factures,
              que nous devons conserver dix ans, et les sauvegardes déjà prises, qui subsistent
              jusqu’à l’échéance de la rétention que vous avez vous-même réglée.
            </p>

            <p>
              <strong>En revanche, ce délai ne couvre pas ce que vous supprimez vous-même.</strong>{' '}
              Une suppression que vous décidez dans la console est définitive et immédiate : nous
              n’avons aucun mécanisme pour revenir en arrière. Exportez ce que vous voulez garder{' '}
              <em>avant</em> de supprimer.
            </p>

            <h2>9. Responsabilité</h2>

            <p>
              Nous mettons en œuvre les moyens décrits ci-dessus pour exploiter la plateforme
              correctement. Nous ne répondons pas du contenu que vous déployez, des conséquences
              d’une configuration que vous avez choisie, ni d’une perte de données qui découle de
              choix qui vous appartiennent — une rétention de sauvegarde trop courte, une
              restauration jamais éprouvée, des données applicatives écrites dans un conteneur
              sans volume persistant.
            </p>

            <p>
              Nous ne répondons pas davantage des interruptions imputables à un fournisseur
              d’infrastructure, à votre fournisseur Git, à votre registre d’images ou à votre
              réseau.
            </p>

            <p>
              Notre responsabilité est <strong>plafonnée aux sommes que vous nous avez versées au
              titre des trois derniers mois</strong> précédant le fait générateur.
            </p>

            <p>
              <strong>
                La conséquence est directe et nous préférons l’écrire : sur un compte Gratuit, ce
                plafond est nul.
              </strong>{' '}
              Vous n’avez rien versé, donc aucune indemnité ne peut être due. C’est la contrepartie
              d’un service offert sans limite de durée et sans engagement de disponibilité. Si
              votre usage ne supporte pas ce risque, il relève d’un plan payant.
            </p>

            <p>Sont exclus de toute indemnisation :</p>

            <ul>
              <li>
                les <strong>dommages indirects</strong> — atteinte à l’image, préjudice
                commercial, action d’un tiers contre vous ;
              </li>
              <li>
                le <strong>manque à gagner</strong>, la perte de chiffre d’affaires et la perte de
                clientèle ;
              </li>
              <li>
                la <strong>perte de données qui vous est imputable</strong> : rétention de
                sauvegarde trop courte, restauration jamais éprouvée, données écrites dans un
                conteneur sans volume persistant, suppression que vous avez décidée.
              </li>
            </ul>

            <p>
              Aucune de ces limites ne s’applique aux cas où la loi les écarte, notamment la faute
              lourde, le dol et le dommage corporel.
            </p>

            <h2>10. Modification des présentes conditions</h2>

            <p>
              Nous pouvons modifier ces conditions. Toute modification de fond donne lieu à une{' '}
              <strong>nouvelle version numérotée</strong> et à une nouvelle date, affichées en
              tête de cette page. C’est ce numéro qui est enregistré avec votre acceptation : il
              permet de savoir ce que vous avez accepté, et quand.
            </p>

            <p>
              Nous informons les titulaires de compte d’une modification de fond{' '}
              <strong>par email, avec un préavis d’un mois</strong> avant son entrée en vigueur.
              Et nous ne nous contentons pas de cette information : une nouvelle version exige
              votre <strong>acceptation explicite</strong>, demandée dans la console.
            </p>

            <p>
              Si une nouvelle version ne vous convient pas, vous pouvez refuser de l’accepter,
              cesser d’utiliser la plateforme et supprimer votre compte. Le délai de récupération
              de vos données décrit au point 8 s’applique alors.
            </p>

            <h2>11. Droit applicable et juridiction</h2>

            <p>
              Les présentes conditions sont régies par le <strong>droit français</strong>.
            </p>

            <p>
              En cas de différend, nous chercherons d’abord une solution amiable. À défaut,
              compétence est attribuée au <strong>tribunal de Paris</strong>.
            </p>

            <p>
              <strong>Réserve expresse pour les consommateurs.</strong> Cette attribution de
              compétence ne s’applique pas si vous utilisez Nubiecloud en qualité de{' '}
              <strong>consommateur</strong>, c’est-à-dire en dehors de toute activité
              professionnelle. Vous conservez alors la faculté de saisir la juridiction de votre
              lieu de domicile, conformément aux règles d’ordre public qui vous protègent — et les
              dispositions impératives du droit de la consommation restent applicables quoi
              qu’indiquent les présentes conditions.
            </p>

            <h2>12. Nous contacter</h2>

            <p>
              Pour toute question sur les présentes conditions :{' '}
              <a href="mailto:contact@nubitech.io">contact@nubitech.io</a>, ou par courrier à{' '}
              <strong>NUBITECH SAS, 200 rue de la Croix Nivert, 75015 Paris, France</strong>.
            </p>

            <hr />

            <p>
              <em>
                Conditions d’utilisation — version {VERSION}, en vigueur depuis le{' '}
                {DATE_VERSION}. NUBITECH SAS — SIREN 105&nbsp;358&nbsp;543 —{' '}
                <a href="mailto:contact@nubitech.io">contact@nubitech.io</a>. Voir aussi la{' '}
                <a href={cheminDe('confidentialite', 'fr')}>politique de confidentialité</a>.
              </em>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
