import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";

// Layout racine de la version anglaise (/en/**) : même coque HTML, mais
// `lang="en"` et métadonnées anglaises.
export const metadata: Metadata = {
  metadataBase: new URL('https://nubiecloud.io'),
  title: "Nubiecloud Docs",
  description:
    "Guides, tutorials and references to deploy and operate your applications on Nubiecloud.",
  icons: {
    icon: "/favicon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nubiecloud',
  },
  openGraph: {
    siteName: "Nubiecloud",
    locale: "en_US",
    type: "website",
    images: ["/logo_v2.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
