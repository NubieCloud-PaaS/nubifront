import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

// NubieCloud brand typeface (self-hosted)
const creato = localFont({
  src: [
    { path: "../fonts/CreatoDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/CreatoDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/CreatoDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/CreatoDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/CreatoDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../fonts/CreatoDisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-creato",
  display: "swap",
});

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

// Partagé par les deux layouts racine (site FR et docs EN).
export const fontVariables = `${creato.variable} ${inter.variable} ${jetbrainsMono.variable}`;
