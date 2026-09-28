import type { Metadata, Viewport } from "next";
import "./globals.css";

import "@fontsource/anton/latin-400.css";
import "@fontsource/anton/latin-ext-400.css";
import "@fontsource/barlow/latin-400.css";
import "@fontsource/barlow/latin-ext-400.css";
import "@fontsource/barlow/latin-500.css";
import "@fontsource/barlow/latin-ext-500.css";
import "@fontsource/barlow/latin-600.css";
import "@fontsource/barlow/latin-ext-600.css";
import "@fontsource/barlow/latin-700.css";
import "@fontsource/barlow/latin-ext-700.css";
import "@fontsource/barlow/latin-800.css";
import "@fontsource/barlow/latin-ext-800.css";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";

function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pikk-Pakk Praktika Debrecen | Kulcsmásolás, késélezés, barkácsbolt",
    template: "%s | Pikk-Pakk Praktika Debrecen",
  },
  description:
    "Pikk-Pakk Praktika Debrecen, Derék utca 139. Kulcsmásolás, késélezés, csavarok, tiplik, háztartási és autófelszerelési cikkek. Útvonal és nyitvatartás.",
  keywords: [
    "Pikk-Pakk Praktika",
    "Pikk Pakk Praktika Debrecen",
    "barkácsbolt Debrecen",
    "barkács üzlet Debrecen",
    "kulcsmásolás Debrecen",
    "késélezés Debrecen",
    "kés élezés Debrecen",
    "csavar bolt Debrecen",
    "csavarok Debrecen",
    "kötőelemek Debrecen",
    "tipli Debrecen",
    "háztartási bolt Debrecen",
    "háztartási cikkek Debrecen",
    "autófelszerelés Debrecen",
    "Derék utca 139",
    "barkács Tócóskert",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Pikk-Pakk Praktika Debrecen – Barkács, kulcsmásolás és késélezés",
    description:
      "Barkácsbolt Debrecenben a Derék utca 139. alatt. Kulcsmásolás, késélezés, csavarok, tiplik, háztartási és autófelszerelési cikkek.",
    url: "/",
    siteName: "Pikk-Pakk Praktika",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/banner.jpg",
        width: 2400,
        height: 745,
        alt: "Pikk-Pakk Praktika Debrecen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pikk-Pakk Praktika Debrecen",
    description: "Kulcsmásolás, késélezés és barkácskellékek – Debrecen, Derék utca 139.",
    images: ["/banner.jpg"],
  },
  category: "Barkácsbolt",
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className="font-body antialiased">
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
