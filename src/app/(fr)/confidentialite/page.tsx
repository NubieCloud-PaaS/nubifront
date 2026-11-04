import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BasculeLangue from '@/components/BasculeLangue';
import { DATE_CONFIDENTIALITE, alternatesDe } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Nubiecloud',
  description:
    'Quelles données Nubiecloud collecte, pourquoi, où elles sont stockées, avec qui elles sont partagées, combien de temps elles sont conservées, et comment nous contacter.',
  openGraph: {
    title: 'Politique de confidentialité — Nubiecloud',
    description:
      'Quelles données Nubiecloud collecte, pourquoi, où elles sont stockées, avec qui elles sont partagées, combien de temps elles sont conservées, et comment nous contacter.',
    url: 'https://nubiecloud.io/confidentialite',
    siteName: 'Nubiecloud',
    locale: 'fr_FR',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de confidentialité — Nubiecloud',
    description:
      'Quelles données Nubiecloud collecte, pourquoi, avec qui elles sont partagées et combien de temps elles sont conservées.',
  },
  alternates: alternatesDe('confidentialite', 'fr'),
};

/**
 * La date est PARTAGÉE avec la version anglaise (`src/lib/legal.ts`). Deux dates qui
 * divergent feraient croire qu'une des deux langues a été oubliée lors d'une révision —
 * et pour une politique de confidentialité, c'est la date qui dit si le lecteur a sous
 * les yeux l'état courant du traitement.
 */
const DERNIERE_MISE_A_JOUR = DATE_CONFIDENTIALITE.fr;

export default function ConfidentialitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <Navbar />

      <main className="flex-grow pt-12 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-12">
            <div className="mb-6">
              <BasculeLangue page="confidentialite" lang="fr" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Politique de confidentialité
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Ce que Nubiecloud collecte, pourquoi, avec qui c’est partagé, combien de temps
              c’est conservé, et à qui écrire.
            </p>
            <p className="mt-4 text-sm text-text-tertiary">
              Dernière mise à jour : {DERNIERE_MISE_A_JOUR}
            </p>
          </header>

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight prose-a:text-accent-400 hover:prose-a:text-accent-300 prose-strong:font-bold prose-code:text-accent-300 prose-code:bg-surface-3 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-hr:border-border-1">
            <h2>Qui traite vos données</h2>

            <p>
              Nubiecloud est une plateforme de déploiement d’applications (PaaS). Cette
              politique couvre le site public <code>nubiecloud.io</code>, la console{' '}
              <code>console.nubiecloud.io</code>, l’API <code>api.nubiecloud.io</code> et le
              serveur MCP exposé sous <code>api.nubiecloud.io/mcp</code>.
            </p>

            <p>
              Le responsable de traitement est <strong>NUBITECH SAS</strong>, société par actions
              simplifiée de droit français immatriculée au registre du commerce et des sociétés
              sous le numéro SIREN <strong>105&nbsp;358&nbsp;543</strong>, dont le siège social
              est situé <strong>200 rue de la Croix Nivert, 75015 Paris, France</strong>.
            </p>

            <p>
              NUBITECH SAS étant établie en France, le{' '}
              <strong>règlement général sur la protection des données (RGPD)</strong> s’applique
              directement à ces traitements, et l’autorité de contrôle compétente est la{' '}
              <strong>CNIL</strong>.
            </p>

            <p>
              <strong>Deux rôles à ne pas confondre.</strong> Pour les données de votre compte,
              de votre organisation et de votre facturation, nous décidons du traitement et nous
              en sommes responsables. Pour les données que <em>vos</em> applications traitent —
              vos bases de données, vos fichiers, les utilisateurs de votre service — c’est vous
              qui décidez : nous les hébergeons et les exécutons pour votre compte, sans les
              exploiter pour nos propres finalités.
            </p>

            <h2>1. Les données que nous collectons</h2>

            <h3>Votre compte</h3>
            <ul>
              <li>
                <strong>Identité et contact</strong> : prénom, nom, adresse email. Ce sont les
                seuls champs demandés à l’inscription.
              </li>
              <li>
                <strong>Mot de passe</strong> : conservé uniquement sous forme d’empreinte
                calculée par une fonction de hachage dédiée aux mots de passe. Il n’est jamais
                stocké en clair et nous ne pouvons pas le lire.
              </li>
              <li>
                <strong>Double authentification</strong>, si vous l’activez : le secret TOTP
                (chiffré) et vos dix codes de secours.
              </li>
              <li>
                <strong>Appareils de confiance</strong> : le navigateur utilisé, la date de
                dernière activité et la date d’expiration de la confiance accordée, afin de ne
                pas vous redemander un code à chaque connexion.
              </li>
              <li>
                <strong>Connexion par fournisseur d’identité</strong> (Google, Microsoft Entra
                ID), lorsque cette option est activée : l’identifiant technique que le
                fournisseur nous transmet et l’adresse email associée. Nous ne recevons jamais
                votre mot de passe.
              </li>
            </ul>

            <h3>Ce que vous déployez</h3>
            <ul>
              <li>le code source récupéré depuis le dépôt Git que vous connectez, et les images
                de conteneur construites à partir de ce code ;</li>
              <li>votre configuration : variables d’environnement, fichiers de configuration,
                noms de domaine, quotas ;</li>
              <li>les <strong>secrets</strong> de vos applications (mots de passe de base de
                données, clés d’API). Ils sont chiffrés et ne sont jamais réaffichés une fois
                enregistrés ;</li>
              <li>le contenu de vos bases de données managées, de vos sauvegardes et de vos
                buckets de stockage objet.</li>
            </ul>

            <h3>Journaux</h3>
            <ul>
              <li>
                <strong>Journaux d’audit</strong> : pour chaque action qui modifie l’état de la
                plateforme (connexion, création ou suppression d’une ressource, déploiement,
                restauration d’une sauvegarde, exécution d’une requête SQL…), nous enregistrons
                la date, l’auteur (email et nom), l’action, la ressource concernée, le résultat
                et l’<strong>adresse IP</strong>. Vous les consultez vous-même depuis la page
                Audit de votre organisation.
              </li>
              <li>
                <strong>Journaux applicatifs</strong> : la sortie de vos propres applications,
                collectée pour que vous puissiez la lire dans la console. Son contenu dépend de
                ce que votre application écrit — si elle y inscrit des données personnelles,
                elles s’y retrouvent.
              </li>
              <li>
                <strong>Journaux techniques</strong> de l’infrastructure et des serveurs web
                (adresse IP, horodatage, chemin demandé, code de réponse), nécessaires à
                l’exploitation et à la sécurité.
              </li>
            </ul>

            <h3>Dépôts Git connectés</h3>
            <p>
              Lorsque vous connectez un compte GitHub ou GitLab, nous conservons le jeton
              d’accès délivré par ce fournisseur, <strong>chiffré</strong> avant stockage, ainsi
              que la liste des dépôts auxquels il donne accès. Supprimer la connexion depuis
              Nubiecloud retire notre accès de notre côté ; pour la révoquer complètement,
              retirez aussi l’autorisation dans les réglages de votre compte GitHub ou GitLab.
            </p>

            <h3>Assistants IA connectés (MCP)</h3>
            <p>
              Nubiecloud expose un serveur MCP qui permet à un assistant — Claude, par exemple —
              d’agir sur votre organisation en votre nom, après une autorisation explicite de
              votre part. Ce que nous conservons :
            </p>
            <ul>
              <li>la session autorisée (quel client, quelle organisation, quelles capacités) et
                l’empreinte du jeton d’accès, révocable à tout moment depuis la console ;</li>
              <li>une ligne de journal par requête reçue : date, méthode appelée, nom de l’outil,
                ressource visée, résultat, code de statut et durée. Cette trace est ce qui vous
                permet de voir ce qu’un agent a fait.</li>
            </ul>
            <p>
              Les capacités accordables sont la <strong>lecture</strong>, l’<strong>écriture</strong>{' '}
              et l’<strong>opération</strong> (redémarrer, redéployer). Aucun outil MCP ne peut
              supprimer une ressource : toute suppression passe par la console, par une personne.
            </p>
            <p>
              <strong>Ce que cela implique de votre côté.</strong> Dès qu’un assistant lit vos
              données par ce canal, elles transitent vers le fournisseur de cet assistant, sous{' '}
              <em>sa</em> politique de confidentialité et non la nôtre. Nous n’avons aucune
              visibilité ni aucun contrôle sur ce qu’il en fait.
            </p>

            <h3>Sur le site public nubiecloud.io</h3>
            <ul>
              <li>
                <strong>Mesure d’audience</strong> : nous utilisons une instance de Plausible
                Analytics que nous hébergeons nous-mêmes, sur notre propre sous-domaine. Elle
                mesure les pages vues de façon agrégée, <strong>ne dépose pas de cookie</strong>,
                ne vous suit pas d’un site à l’autre et ne constitue pas de profil publicitaire.
                Aucune donnée d’audience n’est transmise à une régie.
              </li>
              <li>
                <strong>Stockage local du navigateur</strong> : une seule valeur, votre
                préférence de thème clair ou sombre. Elle ne quitte jamais votre navigateur.
              </li>
              <li>
                Le site public ne dépose <strong>aucun cookie publicitaire</strong> et n’intègre
                aucun pixel de réseau social.
              </li>
            </ul>

            <h3>Ce que nous ne collectons pas</h3>
            <ul>
              <li>
                <strong>Aucune donnée de carte bancaire.</strong> Le paiement en ligne n’existe
                pas dans la console : les plans payants passent par une demande traitée avec
                notre équipe.
              </li>
              <li>Aucune donnée sensible au sens du RGPD (santé, opinions, orientation) n’est
                demandée par la plateforme.</li>
            </ul>

            <h2>2. À quoi ces données servent, et où elles sont stockées</h2>

            <h3>Finalités</h3>
            <ul>
              <li><strong>Fournir le service</strong> : créer votre compte, construire et
                déployer vos applications, exécuter vos bases de données, servir vos domaines en
                HTTPS, exécuter vos sauvegardes.</li>
              <li><strong>Sécuriser les comptes</strong> : double authentification, vérification
                des nouveaux appareils, détection d’abus, limitation du nombre de tentatives.</li>
              <li><strong>Vous donner de la traçabilité</strong> : les journaux d’audit et les
                journaux d’appels MCP existent d’abord pour que vous sachiez qui a fait quoi.</li>
              <li><strong>Vous assister</strong> : répondre à une demande de support, diagnostiquer
                un déploiement qui échoue.</li>
              <li><strong>Facturer</strong> l’usage de la plateforme et respecter nos obligations
                comptables.</li>
            </ul>
            <p>
              Nous n’utilisons pas vos données pour de la publicité, nous ne les vendons pas, et
              nous ne nous en servons pas pour entraîner des modèles d’intelligence artificielle.
            </p>

            <h3>Base légale</h3>
            <p>
              Les traitements décrits ci-dessus reposent sur les bases légales suivantes, au sens
              du RGPD :
            </p>
            <ul>
              <li>
                <strong>l’exécution du contrat</strong> qui nous lie à vous, pour tout ce qui est
                nécessaire à fournir le service : compte, déploiements, bases de données,
                sauvegardes, domaines, support ;
              </li>
              <li>
                <strong>notre intérêt légitime</strong> à préserver la sécurité et la
                disponibilité de la plateforme, pour la double authentification, la vérification
                des appareils, la limitation des tentatives, les journaux d’audit et les journaux
                techniques ;
              </li>
              <li>
                <strong>une obligation légale</strong>, pour la conservation des factures et des
                pièces comptables ;
              </li>
              <li>
                <strong>votre consentement</strong>, pour les traitements qui en dépendent — à ce
                jour, l’autorisation que vous donnez à un assistant IA d’agir sur votre
                organisation par MCP. Il est révocable à tout moment depuis la console.
              </li>
            </ul>

            <h3>Où les données sont stockées</h3>
            <p>
              L’infrastructure par défaut de Nubiecloud est opérée chez{' '}
              <strong>Hetzner Online GmbH</strong> (Allemagne), dans ses centres de données
              d’<strong>Helsinki, en Finlande</strong> — donc dans l’Espace économique européen. Si
              vous avez choisi une autre région à la création de votre projet, vos applications
              et vos bases y sont déployées.
            </p>
            <p>
              Si vous <strong>connectez votre propre infrastructure</strong> comme région, les
              applications que vous y déployez tournent chez vous : les données applicatives
              restent sur vos machines, et nous ne conservons que les métadonnées nécessaires au
              pilotage (noms, configuration, état de déploiement).
            </p>
            <h3>Transferts hors de l’Espace économique européen</h3>
            <p>
              L’infrastructure qui exécute vos applications et vos bases de données reste{' '}
              <strong>dans l’EEE</strong> (Finlande), de même que le stockage objet qui reçoit vos
              journaux applicatifs. Deux prestataires sont en revanche établis aux{' '}
              <strong>États-Unis</strong> : <strong>Backblaze</strong> pour le stockage objet des
              sauvegardes, de NubiS3 et des sites publiés, et <strong>Google</strong> pour l’envoi
              de nos emails transactionnels.
            </p>
            <p>
              Ces transferts sont encadrés par les <strong>clauses contractuelles types</strong>{' '}
              de la Commission européenne. Les deux prestataires sont par ailleurs{' '}
              <strong>certifiés au Data Privacy Framework</strong> : Backblaze s’est certifié
              auprès du Department of Commerce au titre de l’EU-U.S. DPF, du Swiss-U.S. DPF et de
              l’extension britannique (
              <a
                href="https://www.backblaze.com/company/policy/gdpr"
                target="_blank"
                rel="noopener noreferrer"
              >
                engagement publié
              </a>
              ), et Google LLC adhère à ces mêmes cadres (
              <a
                href="https://policies.google.com/privacy/frameworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                engagement publié
              </a>
              ).
            </p>

            <h3>Comment elles sont protégées</h3>
            <ul>
              <li>chaque environnement tourne dans un espace cloisonné, et chaque projet dans un
                tenant dédié ;</li>
              <li>les secrets et les jetons d’accès sont chiffrés avant stockage ;</li>
              <li>les applications ne sont exposées qu’en HTTPS, avec des certificats TLS
                renouvelés automatiquement ;</li>
              <li>les accès sont gouvernés par des rôles, au niveau de l’organisation et du
                projet ;</li>
              <li>la double authentification est disponible sur tous les comptes.</li>
            </ul>

            <h2>3. Avec qui ces données sont partagées</h2>

            <p>
              <strong>Nous ne vendons aucune donnée et nous ne la partageons avec personne à des
              fins commerciales.</strong> Les seuls tiers qui en voient une partie sont ceux dont
              le service est nécessaire pour faire fonctionner la plateforme :
            </p>

            <ul>
              <li>
                <strong>Hetzner Online GmbH</strong> (Allemagne, centres de données en Finlande)
                — l’hébergeur de l’infrastructure sur laquelle vos applications et vos bases de
                données s’exécutent. Dans l’EEE : aucun transfert à encadrer pour cette brique.
              </li>
              <li>
                <strong>Backblaze</strong> (États-Unis) — le stockage objet qui reçoit les
                sauvegardes de vos bases de données, vos buckets NubiS3 et les sites que vous
                publiez.
              </li>
              <li>
                <strong>Google</strong> (États-Unis) — l’acheminement de nos emails
                transactionnels par SMTP : vérification de compte, réinitialisation de mot de
                passe, code de nouvel appareil. Ils sont envoyés depuis{' '}
                <code>contact@nubitech.io</code>.
              </li>
              <li>
                <strong>GitHub et GitLab</strong> — uniquement si vous connectez un dépôt. Nous
                appelons leur API avec le jeton que vous avez autorisé, pour lister vos dépôts et
                récupérer votre code.
              </li>
            </ul>

            <p>
              Les <strong>journaux applicatifs</strong> de vos applications sont conservés sur le
              stockage objet de <strong>Hetzner</strong>, donc dans l’EEE.
            </p>

            <p>
              La <strong>mesure d’audience</strong> du site repose sur une instance de Plausible
              que nous hébergeons nous-mêmes, sur <code>analytics.nubiecloud.io</code> : aucun
              tiers n’y a accès, et elle ne dépose aucun cookie. Ce n’est donc pas un partage.
            </p>

            <p>
              Nous pouvons communiquer des données si la loi nous y oblige — réquisition
              judiciaire, demande d’une autorité compétente. Dans ce cas, nous vous en informons
              sauf lorsque cela nous est interdit.
            </p>

            <p>
              <strong>Les tiers que vous choisissez.</strong> Si vous connectez un assistant IA
              par MCP, si vous appelez notre API depuis un outil tiers ou si votre application
              envoie elle-même des données ailleurs, ces transferts sont les vôtres et relèvent
              des politiques de ces services.
            </p>

            <h2>4. Combien de temps nous les conservons</h2>

            <table>
              <thead>
                <tr>
                  <th>Donnée</th>
                  <th>Durée de conservation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compte et organisation</td>
                  <td>tant que le compte existe ; supprimés à sa suppression</td>
                </tr>
                <tr>
                  <td>Applications, configuration, bases de données</td>
                  <td>tant que vous les conservez ; supprimées quand vous les supprimez</td>
                </tr>
                <tr>
                  <td>Sauvegardes de bases de données</td>
                  <td>
                    la <strong>rétention que vous définissez</strong> pour chaque déploiement
                    (par exemple 7, 30 ou 90 jours) ; purge automatique au-delà
                  </td>
                </tr>
                <tr>
                  <td>Appareils de confiance</td>
                  <td><strong>30 jours</strong>, puis la confiance expire</td>
                </tr>
                <tr>
                  <td>Code de vérification de compte</td>
                  <td><strong>24 heures</strong></td>
                </tr>
                <tr>
                  <td>Code de vérification d’un nouvel appareil</td>
                  <td><strong>10 minutes</strong></td>
                </tr>
                <tr>
                  <td>Jetons d’accès Git connectés</td>
                  <td>jusqu’à ce que vous déconnectiez le compte</td>
                </tr>
                <tr>
                  <td>Sessions MCP et jetons d’accès d’un assistant</td>
                  <td>jusqu’à révocation depuis la console</td>
                </tr>
                <tr>
                  <td>Journaux d’audit de la console</td>
                  <td><strong>12 mois</strong></td>
                </tr>
                <tr>
                  <td>Journaux d’appels MCP</td>
                  <td>
                    <strong>12 mois</strong> — délibérément la même durée que les journaux
                    d’audit : l’appel d’un agent est un geste au même titre qu’un clic
                  </td>
                </tr>
                <tr>
                  <td>Journaux applicatifs et journaux d’ingress</td>
                  <td><strong>90 jours</strong>, puis purge automatique</td>
                </tr>
                <tr>
                  <td>Mesure d’audience du site public</td>
                  <td><strong>24 mois</strong></td>
                </tr>
                <tr>
                  <td>Factures et pièces comptables</td>
                  <td><strong>10 ans</strong> (obligation comptable)</td>
                </tr>
              </tbody>
            </table>

            <h3>Suppression de votre compte</h3>
            <p>
              Vous supprimez votre compte depuis votre profil, dans la zone de danger. La
              suppression est <strong>définitive</strong>. Un point à connaître avant de la
              lancer : si vous détenez des ressources (projets, environnements, applications),
              elles ne sont pas détruites — elles sont <strong>transférées au propriétaire de
              l’organisation</strong>, et la console vous montre l’aperçu de ce transfert avant
              que vous confirmiez.
            </p>
            <p>
              Vos données de compte sont ensuite <strong>effacées sous 30 jours</strong>. Deux
              exceptions, et nous préférons les dire que laisser croire que tout disparaît sur
              l’instant :
            </p>
            <ul>
              <li>
                les <strong>factures et pièces comptables</strong>, que nous devons conserver{' '}
                <strong>10 ans</strong> ;
              </li>
              <li>
                les <strong>sauvegardes déjà prises</strong> de vos bases de données, qui
                subsistent <strong>jusqu’à l’échéance de la rétention que vous avez vous-même
                réglée</strong> sur le déploiement concerné. Une rétention de 90 jours signifie
                qu’une sauvegarde peut survivre 90 jours à la suppression du compte, puis elle
                est purgée automatiquement.
              </li>
            </ul>

            <h2>5. Vos droits</h2>

            <p>
              Vous pouvez demander l’accès à vos données, leur rectification, leur suppression,
              leur portabilité, la limitation de leur traitement, ou vous opposer à un
              traitement. Plusieurs de ces droits s’exercent directement depuis la console :
              modifier votre profil, consulter vos journaux d’audit, révoquer un appareil, une
              connexion Git ou une session MCP, supprimer votre compte.
            </p>
            <p>
              Pour tout le reste, écrivez-nous (voir ci-dessous). Nous répondons dans un délai
              d’<strong>un mois</strong> à compter de la réception de votre demande. Ce délai
              peut être prolongé de <strong>deux mois</strong> si la demande est complexe ou si les
              demandes sont nombreuses ; dans ce cas, nous vous en informons{' '}
              <strong>dans le premier mois</strong>, en vous disant pourquoi. Ce sont les délais
              fixés par le RGPD, pas un choix de notre part.
            </p>
            <p>
              Si notre réponse ne vous satisfait pas, vous avez le droit d’introduire une
              réclamation auprès de l’autorité de contrôle compétente, la{' '}
              <strong>Commission nationale de l’informatique et des libertés (CNIL)</strong> :
            </p>
            <p>
              CNIL — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
            </p>

            <h2>6. Nous contacter</h2>

            <p>
              Pour toute question sur cette politique, et pour toute demande relative à vos
              données personnelles, écrivez à{' '}
              <a href="mailto:contact@nubitech.io">contact@nubitech.io</a>. C’est la seule adresse
              à retenir : il n’y en a pas d’autre pour ce sujet.
            </p>
            <p>
              <strong>Aucun délégué à la protection des données n’est désigné</strong> — notre
              activité ne nous y oblige pas. Le point de contact est le{' '}
              <strong>représentant légal</strong> de la société, joignable à l’adresse ci-dessus.
            </p>
            <p>
              Si vous préférez écrire par courrier, adressez votre demande au siège social :{' '}
              <strong>NUBITECH SAS, 200 rue de la Croix Nivert, 75015 Paris, France</strong>.
            </p>

            <h2>7. Modifications de cette politique</h2>
            <p>
              Nous pouvons faire évoluer cette politique, par exemple si nous ajoutons un
              service ou changeons de prestataire. La date de dernière mise à jour figure en
              haut de cette page. En cas de <strong>changement substantiel</strong> — une
              nouvelle catégorie de données, une nouvelle finalité, un nouveau sous-traitant —
              nous prévenons <strong>par email</strong> les titulaires de compte. C’est un
              engagement, pas une éventualité.
            </p>

            <hr />

            <p>
              <em>
                NUBITECH SAS — 200 rue de la Croix Nivert, 75015 Paris, France — SIREN
                105&nbsp;358&nbsp;543 — <a href="mailto:contact@nubitech.io">contact@nubitech.io</a>
              </em>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
