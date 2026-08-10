import type { Metadata } from 'next';
import {
  DocsPageView,
  docsMetadata,
  docsStaticParams,
} from '@/components/docs/DocsPageView';

export default async function Page(props: PageProps<'/en/docs/[[...slug]]'>) {
  const { slug } = await props.params;
  return <DocsPageView slug={slug} lang="en" />;
}

export async function generateStaticParams() {
  return docsStaticParams('en');
}

export async function generateMetadata(
  props: PageProps<'/en/docs/[[...slug]]'>,
): Promise<Metadata> {
  const { slug } = await props.params;
  return docsMetadata(slug, 'en');
}
