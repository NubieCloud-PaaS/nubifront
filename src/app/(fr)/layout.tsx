import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";

export const metadata: Metadata = {
  metadataBase: new URL('https://nubiecloud.io'),
  title: "Nubiecloud - Simplifying Cloud, Amplifying Business",
  description:
    "Plateforme de déploiement cloud pour applications web. Deployez vos applications, SaaS et ERP en quelques minutes avec CI/CD automatisé, SSL, monitoring et scalabilité.",
  keywords: [
    "cloud",
    "déploiement",
    "PaaS",
    "CI/CD",
    "DevOps",
    "Nubiecloud",
    "hébergement",
  ],
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
    title: "Nubiecloud - Simplifying Cloud, Amplifying Business",
    description:
      "Plateforme de déploiement cloud pour applications web. Deployez vos applications, SaaS et ERP en quelques minutes avec CI/CD automatisé, SSL, monitoring et scalabilité.",
    url: "https://nubiecloud.io",
    siteName: "Nubiecloud",
    locale: "fr_FR",
    type: "website",
    images: ["/logo_v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubiecloud - Simplifying Cloud, Amplifying Business",
    description:
      "Plateforme de déploiement cloud pour applications web. Deployez vos applications, SaaS et ERP en quelques minutes.",
  },
  alternates: {
    canonical: "https://nubiecloud.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootHtml lang="fr">{children}</RootHtml>;
}
