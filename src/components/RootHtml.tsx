import { ThemeProvider } from "@/components/ThemeProvider";
import { fontVariables } from "@/lib/fonts";
import "../app/globals.css";

/**
 * Coque HTML commune aux deux layouts racine.
 *
 * Le site (landing, blog, doc FR) et la doc anglaise sont deux root layouts
 * distincts — c'est le seul moyen, avec l'App Router, de servir un
 * `<html lang>` différent selon la langue de la page.
 */
export function RootHtml({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
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
      <body className={`${fontVariables} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
