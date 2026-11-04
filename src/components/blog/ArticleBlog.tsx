import Image from 'next/image';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { getPostData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BASE_URL } from '@/lib/legal';
import type { DocsLang } from '@/lib/i18n';

/**
 * UN ARTICLE, DANS UNE LANGUE.
 *
 * `inLanguage` est ajoute au balisage `BlogPosting` : sans lui, les deux versions d'un
 * meme article se presentent aux moteurs comme deux contenus de langue indeterminee, donc
 * potentiellement comme du contenu duplique.
 */
const LOCALES = { fr, en: enUS };

const LIBELLES = {
  fr: { lecture: 'min de lecture', formatDate: 'dd MMMM yyyy' },
  en: { lecture: 'min read', formatDate: 'MMMM d, yyyy' },
} satisfies Record<DocsLang, Record<string, string>>;

export default async function ArticleBlog({ slug, lang }: { slug: string; lang: DocsLang }) {
  const postData = await getPostData(slug, lang);
  const t = LIBELLES[lang];

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: lang,
    headline: postData.title,
    description: postData.description,
    datePublished: postData.date,
    dateModified: postData.date,
    image: postData.image,
    author: {
      '@type': 'Organization',
      name: 'Nubiecloud',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nubiecloud',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo_v2.png`,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Navbar lang={lang} />

      <main className="flex-grow pt-12 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            {/* Hero Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={postData.image}
                alt={postData.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="text-center">
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {postData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent-500/12 text-accent-400 text-sm rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
                {postData.title}
              </h1>

              {/* Author & Date */}
              <div className="flex justify-center items-center gap-4 text-text-tertiary">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-sm font-bold">
                    {postData.author.charAt(0)}
                  </div>
                  <span>{postData.author}</span>
                </div>
                <span>&bull;</span>
                <time dateTime={postData.date}>
                  {format(new Date(postData.date), t.formatDate, { locale: LOCALES[lang] })}
                </time>
                {postData.readingTime && (
                  <>
                    <span>&bull;</span>
                    <span>{postData.readingTime} {t.lecture}</span>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose dark:prose-invert max-w-none mx-auto prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight prose-a:text-accent-400 hover:prose-a:text-accent-300 prose-strong:font-bold prose-img:rounded-lg prose-code:text-accent-300 prose-code:bg-surface-3 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface-1 prose-pre:border prose-pre:border-border-1 prose-pre:p-0 prose-hr:border-border-1"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
