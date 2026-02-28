import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nubiecloud.io'),
  title: "Nubiecloud - Simplifying Cloud, Amplifying Business",
  description:
    "Plateforme de deploiement cloud pour applications web. Deployez vos applications, SaaS et ERP en quelques minutes avec CI/CD automatise, SSL, monitoring et scalabilite.",
  keywords: [
    "cloud",
    "deploiement",
    "PaaS",
    "CI/CD",
    "DevOps",
    "Nubiecloud",
    "hebergement",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Nubiecloud - Simplifying Cloud, Amplifying Business",
    description:
      "Plateforme de deploiement cloud pour applications web. Deployez vos applications, SaaS et ERP en quelques minutes avec CI/CD automatise, SSL, monitoring et scalabilite.",
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
      "Plateforme de deploiement cloud pour applications web. Deployez vos applications, SaaS et ERP en quelques minutes.",
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
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light')};}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Plausible Analytics */}
        <script
          async
          src="https://analytics.nubiecloud.io/js/pa-Yfz-HlJxFKcWI4Zz1zoe5.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
