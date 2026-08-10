import type { Metadata } from 'next';
import {
  DocsPageView,
  docsMetadata,
  docsStaticParams,
} from '@/components/docs/DocsPageView';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const { slug } = await props.params;
  return <DocsPageView slug={slug} lang="fr" />;
}

export async function generateStaticParams() {
  return docsStaticParams('fr');
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const { slug } = await props.params;
  return docsMetadata(slug, 'fr');
}
