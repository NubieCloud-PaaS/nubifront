import { DocsShell } from '@/components/docs/DocsShell';
import 'fumadocs-ui/style.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsShell lang="en">{children}</DocsShell>;
}
