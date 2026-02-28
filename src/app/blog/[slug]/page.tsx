import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: `${postData.title} | Blog Nubiecloud`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
      authors: [postData.author],
      images: [postData.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    },
    alternates: {
      canonical: `https://nubiecloud.io/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postData.title,
    description: postData.description,
    datePublished: postData.date,
    dateModified: postData.date,
    image: postData.image,
    author: {
      '@type': 'Organization',
      name: 'Nubiecloud',
      url: 'https://nubiecloud.io',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nubiecloud',
      url: 'https://nubiecloud.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nubiecloud.io/logo_v2.png',
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Navbar />

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
                    className="px-3 py-1 bg-blue-500/12 text-blue-400 text-sm rounded-lg font-medium"
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
                  <img
                    src={`https://picsum.photos/seed/${postData.author}/40/40`}
                    alt={postData.author}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span>{postData.author}</span>
                </div>
                <span>&bull;</span>
                <time dateTime={postData.date}>
                  {format(new Date(postData.date), 'dd MMMM yyyy', { locale: fr })}
                </time>
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose dark:prose-invert max-w-none mx-auto prose-headings:text-text-primary prose-headings:tracking-tight prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:font-bold prose-img:rounded-lg prose-code:text-blue-300 prose-code:bg-surface-3 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface-1 prose-pre:border prose-pre:border-border-1"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
