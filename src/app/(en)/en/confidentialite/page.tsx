import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BasculeLangue from '@/components/BasculeLangue';
import { DATE_CONFIDENTIALITE, EDITEUR, alternatesDe, cheminDe } from '@/lib/legal';

/**
 * POLITIQUE DE CONFIDENTIALITÉ — VERSION ANGLAISE.
 *
 * Même document que `(fr)/confidentialite`, dans une autre langue. Contrairement aux
 * conditions, cette politique n'est pas « acceptée » : elle est INFORMÉE. Elle n'a donc
 * pas de numéro de version, seulement une date de dernière mise à jour — partagée depuis
 * `src/lib/legal.ts`, parce que deux dates qui divergent feraient croire qu'une des deux
 * langues a été oubliée lors d'une révision.
 *
 * Le français reste la version de référence (`x-default`).
 */
export const metadata: Metadata = {
  title: 'Privacy Policy — Nubiecloud',
  description:
    'What data Nubiecloud collects, why, where it is stored, who it is shared with, how long it is kept, and how to contact us.',
  openGraph: {
    title: 'Privacy Policy — Nubiecloud',
    description:
      'What data Nubiecloud collects, why, where it is stored, who it is shared with, how long it is kept, and how to contact us.',
    url: `https://nubiecloud.io${cheminDe('confidentialite', 'en')}`,
    siteName: 'Nubiecloud',
    locale: 'en_US',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Nubiecloud',
    description:
      'What Nubiecloud collects, why, who it is shared with and how long it is kept.',
  },
  alternates: alternatesDe('confidentialite', 'en'),
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <Navbar lang="en" />

      <main className="flex-grow pt-12 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-12">
            <div className="mb-6">
              <BasculeLangue page="confidentialite" lang="en" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              What Nubiecloud collects, why, who it is shared with, how long it is kept, and who
              to write to.
            </p>
            <p className="mt-4 text-sm text-text-tertiary">
              Last updated: {DATE_CONFIDENTIALITE.en}
            </p>
            <p className="mt-3 text-sm text-text-tertiary">
              <strong>This English text is a courtesy translation.</strong> The{' '}
              <a href={cheminDe('confidentialite', 'fr')} hrefLang="fr" className="text-accent-400 hover:text-accent-300">
                French version
              </a>{' '}
              is the reference text.
            </p>
          </header>

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight prose-a:text-accent-400 hover:prose-a:text-accent-300 prose-strong:font-bold prose-code:text-accent-300 prose-code:bg-surface-3 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-hr:border-border-1">
            <h2>Who processes your data</h2>

            <p>
              Nubiecloud is an application deployment platform (PaaS). This policy covers the
              public website <code>nubiecloud.io</code>, the console{' '}
              <code>console.nubiecloud.io</code>, the API <code>api.nubiecloud.io</code> and the
              MCP server exposed at <code>api.nubiecloud.io/mcp</code>.
            </p>

            <p>
              The data controller is <strong>{EDITEUR.raisonSociale}</strong>, a French simplified
              joint-stock company registered with the trade and companies register under SIREN
              number <strong>{EDITEUR.siren}</strong>, whose registered office is at{' '}
              <strong>{EDITEUR.adresse}</strong>.
            </p>

            <p>
              As {EDITEUR.raisonSociale} is established in France, the{' '}
              <strong>General Data Protection Regulation (GDPR)</strong> applies directly to this
              processing, and the competent supervisory authority is the{' '}
              <strong>CNIL</strong>.
            </p>

            <p>
              <strong>Two roles not to be confused.</strong> For the data of your account, your
              organisation and your billing, we decide on the processing and we are responsible
              for it. For the data that <em>your</em> applications process — your databases, your
              files, the users of your service — you are the one who decides: we host and run it
              on your behalf, without using it for our own purposes.
            </p>

            <h2>1. The data we collect</h2>

            <h3>Your account</h3>
            <ul>
              <li>
                <strong>Identity and contact</strong>: first name, last name, email address. These
                are the only fields asked for at registration.
              </li>
              <li>
                <strong>Password</strong>: kept only as a digest computed by a hash function
                dedicated to passwords. It is never stored in clear text and we cannot read it.
              </li>
              <li>
                <strong>Two-factor authentication</strong>, if you enable it: the TOTP secret
                (encrypted) and your ten recovery codes.
              </li>
              <li>
                <strong>Trusted devices</strong>: the browser used, the date of last activity and
                the expiry date of the trust granted, so that you are not asked for a code at
                every sign-in.
              </li>
              <li>
                <strong>Sign-in through an identity provider</strong> (Google, Microsoft Entra ID),
                where that option is enabled: the technical identifier the provider sends us and
                the associated email address. We never receive your password.
              </li>
            </ul>

            <h3>What you deploy</h3>
            <ul>
              <li>the source code fetched from the Git repository you connect, and the container
                images built from that code;</li>
              <li>your configuration: environment variables, configuration files, domain names,
                quotas;</li>
              <li>your applications’ <strong>secrets</strong> (database passwords, API keys). They
                are encrypted and are never shown again once saved;</li>
              <li>the contents of your managed databases, your backups and your object storage
                buckets.</li>
            </ul>

            <h3>Logs</h3>
            <ul>
              <li>
                <strong>Audit logs</strong>: for every action that changes the state of the
                platform (sign-in, creating or deleting a resource, a deployment, restoring a
                backup, running an SQL query…), we record the date, the author (email and name),
                the action, the resource concerned, the outcome and the{' '}
                <strong>IP address</strong>. You read them yourself from your organisation’s Audit
                page.
              </li>
              <li>
                <strong>Application logs</strong>: the output of your own applications, collected
                so that you can read it in the console. Its content depends on what your
                application writes — if it writes personal data there, that data ends up there.
              </li>
              <li>
                <strong>Technical logs</strong> of the infrastructure and web servers (IP address,
                timestamp, path requested, response code), necessary for operations and security.
              </li>
            </ul>

            <h3>Connected Git repositories</h3>
            <p>
              When you connect a GitHub or GitLab account, we keep the access token issued by that
              provider, <strong>encrypted</strong> before storage, together with the list of
              repositories it gives access to. Removing the connection from Nubiecloud withdraws
              our access on our side; to revoke it completely, also remove the authorisation in
              your GitHub or GitLab account settings.
            </p>

            <h3>Connected AI assistants (MCP)</h3>
            <p>
              Nubiecloud exposes an MCP server that lets an assistant — Claude, for example — act
              on your organisation on your behalf, after you have explicitly authorised it. What we
              keep:
            </p>
            <ul>
              <li>the authorised session (which client, which organisation, which capabilities)
                and the digest of the access token, revocable at any time from the console;</li>
              <li>one log line per request received: date, method called, tool name, resource
                targeted, outcome, status code and duration. That trace is what lets you see what
                an agent did.</li>
            </ul>
            <p>
              The capabilities that can be granted are <strong>read</strong>,{' '}
              <strong>write</strong> and <strong>operate</strong> (restart, redeploy). No MCP tool
              can delete a resource: every deletion goes through the console, performed by a
              person.
            </p>
            <p>
              <strong>What that implies on your side.</strong> As soon as an assistant reads your
              data through this channel, that data travels to the assistant’s provider, under{' '}
              <em>their</em> privacy policy and not ours. We have no visibility and no control over
              what they do with it.
            </p>

            <h3>On the public website nubiecloud.io</h3>
            <ul>
              <li>
                <strong>Audience measurement</strong>: we use an instance of Plausible Analytics
                that we host ourselves, on our own subdomain. It measures page views in aggregate,{' '}
                <strong>sets no cookie</strong>, does not follow you from site to site and builds
                no advertising profile. No audience data is sent to an ad network.
              </li>
              <li>
                <strong>Browser local storage</strong>: a single value, your light or dark theme
                preference. It never leaves your browser.
              </li>
              <li>
                The public website sets <strong>no advertising cookie</strong> and embeds no social
                network pixel.
              </li>
            </ul>

            <h3>What we do not collect</h3>
            <ul>
              <li>
                <strong>No payment card data.</strong> Online payment does not exist in the
                console: paid plans go through a request handled with our team.
              </li>
              <li>No special category data within the meaning of the GDPR (health, opinions,
                orientation) is requested by the platform.</li>
            </ul>

            <h2>2. What this data is used for, and where it is stored</h2>

            <h3>Purposes</h3>
            <ul>
              <li><strong>Providing the service</strong>: creating your account, building and
                deploying your applications, running your databases, serving your domains over
                HTTPS, running your backups.</li>
              <li><strong>Securing accounts</strong>: two-factor authentication, verification of
                new devices, abuse detection, rate limiting.</li>
              <li><strong>Giving you traceability</strong>: audit logs and MCP call logs exist
                first and foremost so that you know who did what.</li>
              <li><strong>Supporting you</strong>: answering a support request, diagnosing a
                deployment that fails.</li>
              <li><strong>Billing</strong> platform usage and meeting our accounting
                obligations.</li>
            </ul>
            <p>
              We do not use your data for advertising, we do not sell it, and we do not use it to
              train artificial intelligence models.
            </p>

            <h3>Legal basis</h3>
            <p>
              The processing described above rests on the following legal bases, within the meaning
              of the GDPR:
            </p>
            <ul>
              <li>
                <strong>performance of the contract</strong> between us, for everything necessary
                to provide the service: account, deployments, databases, backups, domains,
                support;
              </li>
              <li>
                <strong>our legitimate interest</strong> in preserving the security and
                availability of the platform, for two-factor authentication, device verification,
                rate limiting, audit logs and technical logs;
              </li>
              <li>
                <strong>a legal obligation</strong>, for keeping invoices and accounting records;
              </li>
              <li>
                <strong>your consent</strong>, for the processing that depends on it — today, the
                authorisation you give an AI assistant to act on your organisation through MCP. It
                is revocable at any time from the console.
              </li>
            </ul>

            <h3>Where the data is stored</h3>
            <p>
              Nubiecloud’s default infrastructure is operated at{' '}
              <strong>Hetzner Online GmbH</strong> (Germany), in its data centres in{' '}
              <strong>Helsinki, Finland</strong> — therefore within the European Economic Area. If
              you chose another region when you created your project, your applications and
              databases are deployed there.
            </p>
            <p>
              If you <strong>connect your own infrastructure</strong> as a region, the applications
              you deploy there run on your side: the application data stays on your machines, and
              we keep only the metadata needed to operate them (names, configuration, deployment
              state).
            </p>
            <h3>Transfers outside the European Economic Area</h3>
            <p>
              The infrastructure that runs your applications and databases stays{' '}
              <strong>within the EEA</strong> (Finland), as does the object storage that receives
              your application logs. Two providers are, however, established in the{' '}
              <strong>United States</strong>: <strong>Backblaze</strong> for the object storage of
              backups, NubiS3 and published sites, and <strong>Google</strong> for sending our
              transactional emails.
            </p>
            <p>
              These transfers are framed by the European Commission’s{' '}
              <strong>standard contractual clauses</strong>. Both providers are moreover{' '}
              <strong>certified under the Data Privacy Framework</strong>: Backblaze has certified
              with the Department of Commerce under the EU-U.S. DPF, the Swiss-U.S. DPF and the UK
              extension (
              <a
                href="https://www.backblaze.com/company/policy/gdpr"
                target="_blank"
                rel="noopener noreferrer"
              >
                published commitment
              </a>
              ), and Google LLC adheres to those same frameworks (
              <a
                href="https://policies.google.com/privacy/frameworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                published commitment
              </a>
              ).
            </p>

            <h3>How it is protected</h3>
            <ul>
              <li>each environment runs in an isolated space, and each project in a dedicated
                tenant;</li>
              <li>secrets and access tokens are encrypted before storage;</li>
              <li>applications are exposed over HTTPS only, with TLS certificates renewed
                automatically;</li>
              <li>access is governed by roles, at organisation and project level;</li>
              <li>two-factor authentication is available on every account.</li>
            </ul>

            <h2>3. Who this data is shared with</h2>

            <p>
              <strong>We sell no data and we share it with no one for commercial purposes.</strong>{' '}
              The only third parties that see part of it are those whose service is necessary to
              run the platform:
            </p>

            <ul>
              <li>
                <strong>Hetzner Online GmbH</strong> (Germany, data centres in Finland) — the host
                of the infrastructure on which your applications and databases run. Within the
                EEA: no transfer to frame for this component.
              </li>
              <li>
                <strong>Backblaze</strong> (United States) — the object storage that receives your
                database backups, your NubiS3 buckets and the sites you publish.
              </li>
              <li>
                <strong>Google</strong> (United States) — the delivery of our transactional emails
                over SMTP: account verification, password reset, new-device code. They are sent
                from <code>{EDITEUR.contact}</code>.
              </li>
              <li>
                <strong>GitHub and GitLab</strong> — only if you connect a repository. We call
                their API with the token you authorised, to list your repositories and fetch your
                code.
              </li>
            </ul>

            <p>
              Your applications’ <strong>application logs</strong> are kept on{' '}
              <strong>Hetzner</strong> object storage, therefore within the EEA.
            </p>

            <p>
              The website’s <strong>audience measurement</strong> relies on a Plausible instance we
              host ourselves, at <code>analytics.nubiecloud.io</code>: no third party has access to
              it, and it sets no cookie. It is therefore not a sharing of data.
            </p>

            <p>
              We may disclose data where the law requires us to — a court order, a request from a
              competent authority. In that case we inform you, except where we are prohibited from
              doing so.
            </p>

            <p>
              <strong>The third parties you choose.</strong> If you connect an AI assistant through
              MCP, if you call our API from a third-party tool, or if your application itself sends
              data elsewhere, those transfers are yours and fall under those services’ policies.
            </p>

            <h2>4. How long we keep it</h2>

            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Retention period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account and organisation</td>
                  <td>as long as the account exists; deleted when it is deleted</td>
                </tr>
                <tr>
                  <td>Applications, configuration, databases</td>
                  <td>as long as you keep them; deleted when you delete them</td>
                </tr>
                <tr>
                  <td>Database backups</td>
                  <td>
                    the <strong>retention you define</strong> for each deployment (for example 7,
                    30 or 90 days); automatically purged beyond that
                  </td>
                </tr>
                <tr>
                  <td>Trusted devices</td>
                  <td><strong>30 days</strong>, then the trust expires</td>
                </tr>
                <tr>
                  <td>Account verification code</td>
                  <td><strong>24 hours</strong></td>
                </tr>
                <tr>
                  <td>New-device verification code</td>
                  <td><strong>10 minutes</strong></td>
                </tr>
                <tr>
                  <td>Connected Git access tokens</td>
                  <td>until you disconnect the account</td>
                </tr>
                <tr>
                  <td>MCP sessions and an assistant’s access tokens</td>
                  <td>until revoked from the console</td>
                </tr>
                <tr>
                  <td>Console audit logs</td>
                  <td><strong>12 months</strong></td>
                </tr>
                <tr>
                  <td>MCP call logs</td>
                  <td>
                    <strong>12 months</strong> — deliberately the same period as audit logs: an
                    agent’s call is an action just as much as a click
                  </td>
                </tr>
                <tr>
                  <td>Application logs and ingress logs</td>
                  <td><strong>90 days</strong>, then automatically purged</td>
                </tr>
                <tr>
                  <td>Public website audience measurement</td>
                  <td><strong>24 months</strong></td>
                </tr>
                <tr>
                  <td>Invoices and accounting records</td>
                  <td><strong>10 years</strong> (accounting obligation)</td>
                </tr>
              </tbody>
            </table>

            <h3>Deleting your account</h3>
            <p>
              You delete your account from your profile, in the danger zone. The deletion is{' '}
              <strong>final</strong>. One point to know before starting it: if you hold resources
              (projects, environments, applications), they are not destroyed — they are{' '}
              <strong>transferred to the organisation’s owner</strong>, and the console shows you a
              preview of that transfer before you confirm.
            </p>
            <p>
              Your account data is then <strong>erased within 30 days</strong>. Two exceptions, and
              we would rather state them than let you believe everything disappears at once:
            </p>
            <ul>
              <li>
                <strong>invoices and accounting records</strong>, which we must keep for{' '}
                <strong>10 years</strong>;
              </li>
              <li>
                <strong>backups already taken</strong> of your databases, which remain{' '}
                <strong>until the retention period you set yourself</strong> expires on the
                deployment concerned. A 90-day retention means a backup may survive the account
                deletion by 90 days, after which it is purged automatically.
              </li>
            </ul>

            <h2>5. Your rights</h2>

            <p>
              You may request access to your data, its rectification, its erasure, its
              portability, the restriction of its processing, or object to a processing operation.
              Several of these rights are exercised directly from the console: editing your
              profile, reading your audit logs, revoking a device, a Git connection or an MCP
              session, deleting your account.
            </p>
            <p>
              For everything else, write to us (see below). We reply within{' '}
              <strong>one month</strong> of receiving your request. That period may be extended by{' '}
              <strong>two months</strong> if the request is complex or if requests are numerous; in
              that case we tell you <strong>within the first month</strong>, and why. These are the
              periods set by the GDPR, not a choice of ours.
            </p>
            <p>
              If our answer does not satisfy you, you have the right to lodge a complaint with the
              competent supervisory authority, the{' '}
              <strong>Commission nationale de l’informatique et des libertés (CNIL)</strong>:
            </p>
            <p>
              CNIL — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France —{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
            </p>

            <h2>6. Contact us</h2>

            <p>
              For any question about this policy, and for any request concerning your personal
              data, write to <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a>. It is the
              only address to remember: there is no other one for this subject.
            </p>
            <p>
              <strong>No data protection officer has been appointed</strong> — our activity does not
              require one. The point of contact is the company’s{' '}
              <strong>legal representative</strong>, reachable at the address above.
            </p>
            <p>
              If you would rather write by post, address your request to the registered office:{' '}
              <strong>{EDITEUR.raisonSociale}, {EDITEUR.adresse}</strong>.
            </p>

            <h2>7. Changes to this policy</h2>
            <p>
              We may develop this policy, for example if we add a service or change provider. The
              date of the last update appears at the top of this page. In the event of a{' '}
              <strong>substantial change</strong> — a new category of data, a new purpose, a new
              processor — we notify account holders <strong>by email</strong>. That is a
              commitment, not a possibility.
            </p>

            <hr />

            <p>
              <em>
                {EDITEUR.raisonSociale} — {EDITEUR.adresse} — SIREN {EDITEUR.siren} —{' '}
                <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a>. See also the{' '}
                <a href={cheminDe('conditions', 'en')}>terms of service</a>, and the{' '}
                <a href={cheminDe('confidentialite', 'fr')} hrefLang="fr">
                  French version
                </a>
                , which is the reference text.
              </em>
            </p>
          </div>
        </article>
      </main>

      <Footer lang="en" />
    </div>
  );
}
