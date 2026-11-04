import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BasculeLangue from '@/components/BasculeLangue';
import { VERSION_CONDITIONS, DATE_VERSION, EDITEUR, alternatesDe, cheminDe } from '@/lib/legal';

/**
 * CONDITIONS D'UTILISATION — VERSION ANGLAISE.
 *
 * C'est le MÊME contrat que `(fr)/conditions`, dans une autre langue. Le fond ne doit
 * jamais diverger : une clause ajoutée d'un seul côté publierait deux contrats
 * différents, et c'est celui que la personne a lu qui l'engage.
 *
 * Trois choses sont donc partagées plutôt que recopiées — version, date et identité de
 * l'éditeur viennent de `src/lib/legal.ts` — et `scripts/verifier-pages-legales.mjs`
 * compare la structure des deux pages (nombre et ordre des sections).
 *
 * Le français reste la version de RÉFÉRENCE : il porte `x-default`, et le point 11 dit
 * que le droit français régit le contrat. Cette page est une traduction de courtoisie,
 * pas un contrat distinct — et elle le dit elle-même en tête.
 */
export const metadata: Metadata = {
  title: 'Terms of Service — Nubiecloud',
  description:
    'Nubiecloud terms of service: purpose, account, split of responsibilities between the platform and the customer, availability, prohibited uses, pricing, termination.',
  openGraph: {
    title: 'Terms of Service — Nubiecloud',
    description:
      'Nubiecloud terms of service: purpose, account, split of responsibilities between the platform and the customer, availability, prohibited uses, pricing, termination.',
    url: `https://nubiecloud.io${cheminDe('conditions', 'en')}`,
    siteName: 'Nubiecloud',
    locale: 'en_US',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Nubiecloud',
    description:
      'Purpose, account, split of responsibilities, availability, prohibited uses, pricing and termination.',
  },
  alternates: alternatesDe('conditions', 'en'),
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <Navbar lang="en" />

      <main className="flex-grow pt-12 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-12">
            <div className="mb-6">
              <BasculeLangue page="conditions" lang="en" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              What we take care of, what stays in your hands, and what you commit to by using
              Nubiecloud.
            </p>
            {/* Le séparateur est du TEXTE, pas un espacement de flexbox : cette ligne est
                celle qu'on recopie dans un enregistrement d'acceptation ou dans un échange
                de support, et un `gap` ne se copie pas. */}
            <p className="mt-6 inline-block rounded-lg border border-border-1 bg-surface-1 px-4 py-2 text-sm">
              <span className="font-semibold text-text-primary">Version {VERSION_CONDITIONS}</span>
              <span className="text-text-quaternary">{' • '}</span>
              <span className="text-text-secondary">in force since {DATE_VERSION.en}</span>
            </p>
            <p className="mt-3 text-sm text-text-tertiary">
              This is the version recorded when you accept these terms as you create your
              account.
            </p>
            <p className="mt-3 text-sm text-text-tertiary">
              <strong>This English text is a courtesy translation.</strong> The{' '}
              <a href={cheminDe('conditions', 'fr')} hrefLang="fr" className="text-accent-400 hover:text-accent-300">
                French version
              </a>{' '}
              is the reference: the agreement is governed by French law (section 11), and the
              French wording prevails if the two ever differ.
            </p>
          </header>

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight prose-a:text-accent-400 hover:prose-a:text-accent-300 prose-strong:font-bold prose-code:text-accent-300 prose-code:bg-surface-3 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-hr:border-border-1">
            <h2>1. Purpose and acceptance</h2>

            <p>
              Nubiecloud is a platform for deploying and operating applications (PaaS). It is
              published by <strong>{EDITEUR.raisonSociale}</strong>, a French simplified joint-stock
              company registered with the trade and companies register under SIREN number{' '}
              <strong>{EDITEUR.siren}</strong>, whose registered office is at{' '}
              <strong>{EDITEUR.adresse}</strong>.
            </p>

            <p>
              These terms govern the use of the <code>nubiecloud.io</code> website, the{' '}
              <code>console.nubiecloud.io</code> console, the <code>api.nubiecloud.io</code> API
              and the MCP server exposed at <code>api.nubiecloud.io/mcp</code>. They form an
              agreement between {EDITEUR.raisonSociale} and you — personally if you use the
              platform for yourself, or the entity you represent if you create an organisation on
              its behalf. In the latter case, you confirm that you have the authority to do so.
            </p>

            <p>
              You accept them by <strong>ticking the box provided for that purpose</strong> when
              you create your account. This is not tacit acceptance: without that box ticked,
              registration does not complete.
            </p>

            <p>
              Your acceptance is <strong>recorded</strong> together with{' '}
              <strong>version {VERSION_CONDITIONS}</strong> of this document and its date. That is
              what makes it possible to know later exactly what was accepted — and it is why any
              substantive change leads to a new numbered version (section 10).
            </p>

            <h2>2. Your account</h2>

            <ul>
              <li>
                An account is <strong>personal</strong>. It is not to be shared: to give someone
                access, invite them as a member of your organisation.
              </li>
              <li>
                The information you provide must be accurate, in particular your email address —
                it carries account verification, password reset and new-device confirmation.
              </li>
              <li>
                You are responsible for keeping your credentials confidential and for what is done
                with your account. We provide{' '}
                <a href="/en/docs">two-factor authentication (TOTP)</a> and trusted-device
                management; enabling them is your decision.
              </li>
              <li>
                An organisation has a single <strong>Owner</strong>, who can appoint{' '}
                <strong>Admins</strong> and invite <strong>Members</strong>. The rights attached to
                each role are described in the <a href="/en/docs">documentation</a>.
              </li>
            </ul>

            <h2>3. Roles and responsibilities</h2>

            <p>
              This is the most important section of this document. A managed platform is neither a
              provider that takes care of everything nor a mere host that takes care of nothing:
              the boundary is precise, and knowing it avoids unpleasant surprises.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Nubiecloud takes care of</th>
                  <th>You remain responsible for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Patching</strong></td>
                  <td>
                    the operating system, Kubernetes, the ingress, the deployment charts and the
                    image builders
                  </td>
                  <td>
                    your application code, your dependencies, and the base image you choose
                  </td>
                </tr>
                <tr>
                  <td><strong>Secrets</strong></td>
                  <td>
                    storing them encrypted — they are never stored in clear text, never shown
                    again after they are saved, and never handed to an AI agent
                  </td>
                  <td>
                    choosing them, rotating them, and not committing them to your repository
                  </td>
                </tr>
                <tr>
                  <td><strong>Backups</strong></td>
                  <td>
                    running them on the schedule you define, and restoring them at your request
                  </td>
                  <td>
                    <strong>choosing the retention period</strong>, and{' '}
                    <strong>testing a restore before you need one</strong>
                  </td>
                </tr>
                <tr>
                  <td><strong>Application data</strong></td>
                  <td>hosting and running it on your behalf</td>
                  <td>its content, its lawfulness, and the rights of the people concerned</td>
                </tr>
                <tr>
                  <td><strong>Deletion</strong></td>
                  <td>
                    no automatic destructive action; no AI agent can destroy anything whatsoever
                  </td>
                  <td>deciding it, in the console</td>
                </tr>
                <tr>
                  <td><strong>Access</strong></td>
                  <td>authentication, two-factor authentication and audit logs</td>
                  <td>managing your members and their roles</td>
                </tr>
              </tbody>
            </table>

            <h3>⚠️ What backups cover, and what they do not</h3>

            <p>
              <strong>
                Platform-managed backups cover managed PostgreSQL databases — and Odoo, which runs
                on PostgreSQL. They cover nothing else.
              </strong>
            </p>

            <ul>
              <li>
                The other managed services — <strong>MySQL, Redis, RabbitMQ, Kafka</strong> — have
                no native backup on the platform.
              </li>
              <li>
                <strong>Code applications</strong> have no application-level backup, and the chart
                that deploys them <strong>mounts no persistent volume</strong>. A file written to a
                container disk disappears on the next deployment: if your application needs to keep
                data, it must go into a managed database or a NubiS3 bucket.
              </li>
            </ul>

            <p>
              We write this here because it is the most expensive wrong assumption anyone can make
              about a managed platform. If your recovery plan assumes that “everything is backed
              up”, it needs revisiting before the incident, not after. The exact scope is detailed
              in the <a href="/en/docs">backup documentation</a>.
            </p>

            <h3>AI agents connected to the MCP server</h3>

            <p>
              If you connect an AI agent to your organisation, it acts{' '}
              <strong>with your rights and never more</strong>. One limit is structural and depends
              on no setting: <strong>no MCP tool can destroy anything</strong> — there is no delete
              capability in the model. Deleting a deployment, an environment, a project or a
              database happens in the console, by a person.
            </p>

            <p>
              An agent can, however, create, configure and restart. What you allow it to do is up
              to you: the capabilities granted, the approvals and what an agent cannot do are
              described in the <a href="/en/docs/mcp">MCP server documentation</a>.
            </p>

            <h2>4. Availability and support</h2>

            <p>
              We operate the platform with care and monitor its state continuously. No platform
              runs without interruption for all that: there is maintenance, there are incidents at
              infrastructure providers, and there are outages. The commitment below states what we
              commit to despite that, and what you can do if it is not met.
            </p>

            <h3>Availability level</h3>

            <p>
              We commit to <strong>99.5% availability per calendar month</strong> for
              organisations on a <strong>paid plan</strong>.
            </p>

            <p>
              <strong>The Free plan carries no availability commitment.</strong> We write it rather
              than let silence be interpreted: the platform is operated there with the same care,
              but without a contractual commitment. Production use that requires a guarantee
              belongs on a paid plan.
            </p>

            <p>
              The rate is measured per calendar month from our monitoring records, which we share
              with you on request. <strong>If the commitment is not met, there is no credit and no
              refund</strong> — that is a choice, and it comes with a counterpart: if availability
              stays below 99.5% for <strong>three consecutive calendar months</strong>, you may{' '}
              <strong>terminate at no cost and with no notice period</strong>, by writing to us at{' '}
              <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a>. Termination takes effect
              when we receive your request, and amounts already paid for the elapsed period remain
              due.
            </p>

            <h3>Support</h3>

            <p>
              On a <strong>paid plan</strong>, we commit to a{' '}
              <strong>first response within one business day</strong>. On the{' '}
              <strong>Free plan, no time frame is guaranteed</strong>: we do answer, without
              committing to a deadline.
            </p>

            <p>
              Support is requested at{' '}
              <a href={`mailto:${EDITEUR.support}`}>{EDITEUR.support}</a>, and commercial questions
              go to <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a>. A first-response
              time is a time to take charge, not a time to resolve: resolution depends on the
              nature of the problem.
            </p>

            <h3>Maintenance</h3>

            <p>
              When scheduled maintenance has to interrupt the service, we notify you{' '}
              <strong>by email with at least 24 hours’ notice</strong>.
            </p>

            <p>
              <strong>One exception, and it has to be stated:</strong> an{' '}
              <strong>urgent security fix</strong> may have to be applied immediately, without
              notice. Waiting 24 hours to close a vulnerability would expose your data and that of
              other customers — it would be holding the clause against its own purpose. In that
              case we inform you as soon as possible, during or after the work.
            </p>

            <h3>Changes to the platform</h3>

            <p>
              We may develop the platform, adding or removing features. If removing a feature you
              use becomes necessary, we inform you by email with <strong>one month’s
              notice</strong>.
            </p>

            <h2>5. Prohibited uses</h2>

            <p>You agree not to use Nubiecloud to:</p>

            <ul>
              <li>
                carry out any unlawful activity, or host content that is unlawful, infringing, or
                that violates a third party’s rights;
              </li>
              <li>
                distribute malware, run phishing campaigns or send bulk unsolicited messages;
              </li>
              <li>
                attack a third party — denial of service, port scanning, intrusion — from our
                resources;
              </li>
              <li>
                harm the platform itself: attempting to escape the isolation of your environment,
                access another customer’s resources, or bypass quotas or authentication
                mechanisms;
              </li>
              <li>
                place a load on the platform that is manifestly disproportionate to the resources
                reserved, to the detriment of other customers.
              </li>
            </ul>

            <p>
              The following are also <strong>expressly prohibited</strong>:
            </p>

            <ul>
              <li>
                <strong>cryptocurrency mining</strong>, in all its forms;
              </li>
              <li>
                <strong>diverting compute resources</strong> to a use unrelated to the deployed
                application — password cracking, distributed computing on behalf of a third party,
                and more generally any workload whose purpose is to consume compute rather than to
                serve your application;
              </li>
              <li>
                <strong>load or stress testing aimed at third-party infrastructure</strong> from
                our resources.
              </li>
            </ul>

            <p>
              In the event of a serious breach or an immediate threat to the platform or to other
              customers, we may suspend the access concerned. We inform you and explain the
              reason; except in an emergency, we give you the opportunity to put things right.
            </p>

            <h2>6. Personal data</h2>

            <p>
              The processing of personal data is described in our{' '}
              <a href={cheminDe('confidentialite', 'en')}>privacy policy</a>, which forms an
              integral part of these terms. We do not repeat it here.
            </p>

            <p>
              One point is worth restating, because it overlaps with the split of roles above: for
              your account and billing data, we decide on the processing. For the data that{' '}
              <em>your</em> applications process, you do — you determine the purpose, and it falls
              to you to have a legal basis, to inform the people concerned and to respond when they
              exercise their rights. We host and run that data on your behalf.
            </p>

            <p>
              A <strong>data processing agreement within the meaning of Article 28 GDPR</strong> is
              available to customers who need one: ask for it at{' '}
              <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a> and we will send it to
              you for signature.
            </p>

            <h2>7. Pricing and billing</h2>

            <p>
              The platform offers <strong>four plans</strong> — Free, Professional, Business and
              Enterprise — whose quotas and monthly prices are published in the{' '}
              <a href="/en/docs">documentation</a>. Prices are expressed{' '}
              <strong>in XAF (FCFA)</strong> and <strong>differentiated by region</strong> (Africa
              / Europe); the Enterprise plan is quoted on request.
            </p>

            <ul>
              <li>
                Every organisation starts on the <strong>Free</strong> plan, which has{' '}
                <strong>no time limit</strong>: it is not a trial period.
              </li>
              <li>
                Paid plans are obtained <strong>on request</strong> from the console, and are
                activated by our team once terms are agreed. Your quotas increase{' '}
                <strong>on activation</strong>, not on request.
              </li>
              <li>
                <strong>The console does not take payments.</strong> Online payment and invoicing
                do not exist: the arrangements (bank transfer, Mobile Money) are settled with our
                team.
              </li>
              <li>
                The cost estimate shown when you configure a project is an{' '}
                <strong>order of magnitude</strong> meant for sizing. It is not an invoice, and it
                does not commit us to an amount.
              </li>
              <li>
                When a resource reaches your plan’s quota, creating new resources is{' '}
                <strong>blocked</strong> until something is freed or the plan is upgraded.
                Resources already in service keep running.
              </li>
              <li>
                Moving back down to the Free plan is immediate and in your hands — it is refused
                only if your usage exceeds the Free plan’s quotas.
              </li>
            </ul>

            <h3>Payment</h3>

            <p>
              Our invoices are payable within <strong>30 days</strong> of their issue date.
            </p>

            <p>
              If payment is late, we send reminders. If the delay reaches{' '}
              <strong>15 days</strong>, we may <strong>suspend the service</strong>.
            </p>

            <p>
              <strong>
                A suspension cuts off access and stops your applications from running; it does not
                destroy your data.
              </strong>{' '}
              Your databases, backups and files stay in place, and the service resumes on payment.
              Only a termination, or a deletion you decide, leads to erasure.
            </p>

            <h3>Price changes</h3>

            <p>
              If we change the price of a plan you are already subscribed to, we inform you by
              email with <strong>one month’s notice</strong> before it applies.
            </p>

            <h2>8. Term, termination and deletion</h2>

            <p>
              The agreement takes effect when you create your account and lasts as long as you use
              the platform. The Free plan carries no minimum term.
            </p>

            <p>
              <strong>On your side.</strong> You may at any time move back down to the Free plan,
              delete your resources, or delete your account from your profile. One point to know
              before deleting an account: if you hold resources, they are{' '}
              <strong>not destroyed</strong> — they are transferred to the organisation’s owner,
              and the console shows you a preview of that transfer before you confirm.
            </p>

            <p>
              To terminate a <strong>paid plan</strong>, write to us with{' '}
              <strong>30 days’ notice</strong>. The <strong>month already started remains
              due</strong>: termination takes effect at the end of the notice period, and the
              current month is not pro-rated.
            </p>

            <p>
              <strong>On our side.</strong> We may terminate with <strong>30 days’ notice</strong>,
              given by email.
            </p>

            <p>
              <strong>The exception is a serious breach</strong> — prohibited use, harm to the
              platform or to other customers, unlawful activity: in that case{' '}
              <strong>suspension is immediate</strong> and without notice, because waiting 30 days
              would let the damage happen. We inform you and explain the reason. Non-payment
              follows the regime described in section 7: reminders, then suspension at 15 days
              overdue.
            </p>

            <h3>Retrieving your data after termination</h3>

            <p>
              Whatever its origin, a termination opens a <strong>30-day</strong> window during
              which your data is kept and <strong>remains retrievable</strong>: write to{' '}
              <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a> and we will give you the
              means to export it. At the end of that window, it is erased.
            </p>

            <p>
              This window matches our{' '}
              <a href={cheminDe('confidentialite', 'en')}>privacy policy</a>, which announces
              erasure within 30 days — and which details the only two exceptions: invoices, which
              we must keep for ten years, and backups already taken, which remain until the
              retention period you set yourself expires.
            </p>

            <p>
              <strong>This window does not, however, cover what you delete yourself.</strong> A
              deletion you decide in the console is final and immediate: we have no mechanism to
              undo it. Export whatever you want to keep <em>before</em> you delete.
            </p>

            <h2>9. Liability</h2>

            <p>
              We apply the means described above to operate the platform properly. We are not
              answerable for the content you deploy, for the consequences of a configuration you
              chose, nor for data loss that follows from choices that are yours — a backup
              retention that is too short, a restore never tested, application data written inside
              a container with no persistent volume.
            </p>

            <p>
              Nor are we answerable for interruptions attributable to an infrastructure provider,
              to your Git provider, to your image registry or to your network.
            </p>

            <p>
              Our liability is <strong>capped at the amounts you have paid us for the last three
              months</strong> preceding the triggering event.
            </p>

            <p>
              <strong>
                The consequence is direct and we would rather write it: on a Free account, that cap
                is zero.
              </strong>{' '}
              You have paid nothing, so no compensation can be owed. That is the counterpart of a
              service offered with no time limit and no availability commitment. If your use cannot
              bear that risk, it belongs on a paid plan.
            </p>

            <p>The following are excluded from any compensation:</p>

            <ul>
              <li>
                <strong>indirect damages</strong> — harm to reputation, commercial loss, a third
                party’s claim against you;
              </li>
              <li>
                <strong>loss of profit</strong>, loss of revenue and loss of customers;
              </li>
              <li>
                <strong>data loss attributable to you</strong>: a backup retention that is too
                short, a restore never tested, data written inside a container with no persistent
                volume, a deletion you decided.
              </li>
            </ul>

            <p>
              None of these limits applies where the law sets them aside, in particular gross
              negligence, wilful misconduct and personal injury.
            </p>

            <h2>10. Changes to these terms</h2>

            <p>
              We may change these terms. Any substantive change leads to a{' '}
              <strong>new numbered version</strong> and a new date, shown at the top of this page.
              It is that number which is recorded with your acceptance: it makes it possible to
              know what you accepted, and when.
            </p>

            <p>
              We inform account holders of a substantive change{' '}
              <strong>by email, with one month’s notice</strong> before it takes effect. And we do
              not stop at that notice: a new version requires your{' '}
              <strong>explicit acceptance</strong>, requested in the console.
            </p>

            <p>
              If a new version does not suit you, you may decline to accept it, stop using the
              platform and delete your account. The data-retrieval window described in section 8
              then applies.
            </p>

            <h2>11. Governing law and jurisdiction</h2>

            <p>
              These terms are governed by <strong>French law</strong>.
            </p>

            <p>
              In the event of a dispute, we will first seek an amicable solution. Failing that,
              jurisdiction is given to the <strong>courts of Paris</strong>.
            </p>

            <p>
              <strong>Express reservation for consumers.</strong> This choice of jurisdiction does
              not apply if you use Nubiecloud as a <strong>consumer</strong>, that is, outside any
              professional activity. You then keep the right to bring proceedings before the court
              of your place of residence, in accordance with the mandatory rules that protect you —
              and the mandatory provisions of consumer law remain applicable whatever these terms
              may say.
            </p>

            <h2>12. Contact us</h2>

            <p>
              For any question about these terms:{' '}
              <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a>, or by post to{' '}
              <strong>{EDITEUR.raisonSociale}, {EDITEUR.adresse}</strong>.
            </p>

            <hr />

            <p>
              <em>
                Terms of Service — version {VERSION_CONDITIONS}, in force since {DATE_VERSION.en}.{' '}
                {EDITEUR.raisonSociale} — SIREN {EDITEUR.siren} —{' '}
                <a href={`mailto:${EDITEUR.contact}`}>{EDITEUR.contact}</a>. See also the{' '}
                <a href={cheminDe('confidentialite', 'en')}>privacy policy</a>, and the{' '}
                <a href={cheminDe('conditions', 'fr')} hrefLang="fr">
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
