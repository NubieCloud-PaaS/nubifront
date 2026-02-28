import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getSortedPostsData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Nubiecloud',
  description: 'Actualites, articles et analyses de l\'equipe Nubiecloud sur le cloud, le deploiement et le PaaS en Afrique de l\'Ouest.',
  openGraph: {
    title: 'Blog Nubiecloud',
    description: 'Actualites, articles et analyses de l\'equipe Nubiecloud sur le cloud, le deploiement et le PaaS en Afrique de l\'Ouest.',
    url: 'https://nubiecloud.io/blog',
    siteName: 'Nubiecloud',
    locale: 'fr_FR',
    type: 'website',
    images: ['/logo_v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Nubiecloud',
    description: 'Actualites, articles et analyses de l\'equipe Nubiecloud sur le cloud et le deploiement.',
  },
  alternates: {
    canonical: 'https://nubiecloud.io/blog',
  },
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="flex flex-col min-h-screen bg-surface-2 transition-colors">
      <Navbar />

      <main className="flex-grow pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center py-12">
            <h1 className="text-5xl font-bold text-text-primary tracking-tight">
              Blog Nubiecloud
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-text-secondary">
              Actualités, articles et analyses de l&apos;équipe Nubiecloud.
            </p>
          </header>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(({ slug, date, title, description, tags, author, image }) => (
              <article key={slug} className="group flex flex-col">
                <Link href={`/blog/${slug}`} className="block h-full">
                  <div className="bg-surface-2 border border-border-1 rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 group-hover:-translate-y-1">
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
                        Par {author} &bull; {format(new Date(date), 'dd MMMM yyyy', { locale: fr })}
                      </p>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-text-primary group-hover:text-blue-400 transition-colors mb-3">
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
                              className="px-2 py-1 bg-blue-500/12 text-blue-400 text-xs rounded-lg font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors whitespace-nowrap ml-2">
                          Lire la suite
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

      <Footer />
    </div>
  );
}
