import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getSortedPostsData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { langPrefix, type DocsLang } from '@/lib/i18n';

/**
 * LA LISTE DES ARTICLES, DANS UNE LANGUE.
 *
 * Extrait de `(fr)/blog/page.tsx` pour que la grille, les cartes et leur mise en page ne
 * soient ecrites qu'une fois : recopier ce JSX dans la page anglaise aurait fait deux
 * mises en page a tenir, et un ajustement d'un seul cote ne se voit qu'a l'oeil.
 *
 * LA LOCALE DE DATE EST LOAD-BEARING : sans elle, `format` rend « 04 novembre 2026 » sur
 * une page anglaise. C'est le genre de detail qui signale au lecteur que la traduction est
 * de facade -- et l'ordre jour/mois differe aussi entre les deux conventions.
 */
const LOCALES = { fr, en: enUS };

const LIBELLES = {
  fr: {
    titre: 'Blog Nubiecloud',
    accroche: "Actualites, articles et analyses de l'equipe Nubiecloud.",
    par: 'Par',
    min: 'min',
    lire: 'Lire la suite',
    formatDate: 'dd MMMM yyyy',
  },
  en: {
    titre: 'Nubiecloud Blog',
    accroche: 'News, articles and analysis from the Nubiecloud team.',
    par: 'By',
    min: 'min read',
    lire: 'Read more',
    formatDate: 'MMMM d, yyyy',
  },
} satisfies Record<DocsLang, Record<string, string>>;

export default function BlogListe({ lang }: { lang: DocsLang }) {
  const t = LIBELLES[lang];
  const allPosts = getSortedPostsData(lang);

  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <Navbar lang={lang} />

      <main className="flex-grow pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center py-12">
            <h1 className="text-5xl font-bold text-text-primary tracking-tight">
              {t.titre}
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-text-secondary">
              {t.accroche}
            </p>
          </header>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(({ slug, date, title, description, tags, author, image, readingTime }) => (
              <article key={slug} className="group flex flex-col">
                <Link href={`${langPrefix(lang)}/blog/${slug}`} className="block h-full">
                  <div className="bg-surface-2 border border-border-1 rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg hover:border-accent-500/30 transition-all duration-300 group-hover:-translate-y-1">
                    {/* Cover Image */}
                    <div className="relative w-full h-48">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Author & Date */}
                      <p className="text-sm text-text-tertiary mb-2">
                        {t.par} {author} &bull; {format(new Date(date), t.formatDate, { locale: LOCALES[lang] })}
                        {readingTime && <> &bull; {readingTime} {t.min}</>}
                      </p>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-text-primary group-hover:text-accent-400 transition-colors mb-3">
                        {title}
                      </h2>

                      {/* Description */}
                      <p className="text-text-secondary flex-grow mb-4">{description}</p>

                      {/* Tags & Read More */}
                      <div className="flex justify-between items-end mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-accent-500/12 text-accent-400 text-xs rounded-lg font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-semibold text-accent-400 group-hover:text-accent-300 transition-colors whitespace-nowrap ml-2">
                          {t.lire}
                          <ArrowRightIcon className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
