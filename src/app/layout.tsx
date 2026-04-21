import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/chatbot/chat-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://theforgedbyfire.org";
const SITE_NAME = "Forged By Fire";
const LOCATION = "Springfield, Massachusetts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Forged By Fire | Springfield, MA Fire Relief Nonprofit",
    template: "%s | Forged By Fire (Springfield, MA)",
  },
  description:
    "Forged By Fire is a Springfield, Massachusetts nonprofit founded by firefighter Lt. Donald Coleman Jr. We deliver emergency support and transitional housing to Springfield families within 48 hours of a house fire. Every little bit counts.",
  keywords: [
    // Local/geo (prioritized)
    "Springfield Massachusetts nonprofit",
    "Springfield MA fire relief",
    "Springfield house fire help",
    "fire victim assistance Springfield",
    "Springfield fire department partner",
    "Pioneer Valley fire relief",
    "Western Massachusetts nonprofit",
    "Springfield transitional housing",
    "Springfield MA charity",
    // Service-specific
    "emergency fire relief",
    "house fire support",
    "fire victim assistance",
    "transitional housing after fire",
    "emergency debit card fire victims",
    "firefighter founded nonprofit",
    // Brand
    "forged by fire",
    "Forged By Fire Springfield",
    "Lt. Donald Coleman Jr.",
    "Donald Coleman Jr Springfield firefighter",
    // Intent
    "donate to Springfield fire victims",
    "help family after house fire Springfield",
    "volunteer fire relief Springfield",
  ],
  authors: [{ name: "Forged By Fire", url: SITE_URL }],
  creator: "Forged By Fire",
  publisher: "Forged By Fire",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Forged By Fire | Springfield, MA Fire Relief Nonprofit",
    description:
      "Emergency resources and transitional housing for Springfield, Massachusetts families affected by house fires. Founded by Lt. Donald Coleman Jr.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      { url: "/fbf-logo.png", width: 1024, height: 1024, alt: "Forged By Fire phoenix logo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forged By Fire | Springfield, MA Fire Relief",
    description:
      "Nonprofit supporting Springfield, Massachusetts families after house fires. Rising from the ashes, together.",
    images: ["/fbf-logo.png"],
  },
  icons: {
    icon: "/fbf-logo.png",
    apple: "/fbf-logo.png",
  },
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
  category: "nonprofit",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1A1A1A",
};

// Structured data. NGO, LocalBusiness, Person (founder), WebSite
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["NGO", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Forged By Fire",
      alternateName: "FBF",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/fbf-logo.png`,
        width: 1024,
        height: 1024,
      },
      image: `${SITE_URL}/fbf-logo.png`,
      description:
        "Springfield, Massachusetts nonprofit providing emergency resources and transitional housing to families affected by house fires. Founded in 2015 by firefighter Lt. Donald Coleman Jr.",
      foundingDate: "2015",
      founder: {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Lt. Donald Coleman Jr.",
        jobTitle: "Lieutenant, Springfield Fire Department",
        description:
          "Springfield, Massachusetts firefighter since 2015 and founder of Forged By Fire. Lost his home in a 2022 house fire and turned that loss into a mission to help Springfield families rebuild.",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Springfield",
        addressRegion: "MA",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Springfield, Massachusetts" },
        { "@type": "AdministrativeArea", name: "Hampden County, Massachusetts" },
        { "@type": "AdministrativeArea", name: "Pioneer Valley, Western Massachusetts" },
      ],
      knowsLanguage: "en",
      slogan: "Every Little Bit Counts",
      email: "contact@theforgedbyfire.org",
      sameAs: [
        // Fill these in once social profiles are live
      ],
      nonprofitStatus: "Nonprofit501(c)(3)",
      disambiguatingDescription:
        "501(c)(3) nonprofit status pending confirmation. Donations will become tax-deductible once status is formally approved.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Fire relief nonprofit serving Springfield, Massachusetts.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services#emergency-resources`,
      name: "Emergency Fire Relief Resources",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Springfield, Massachusetts" },
      description:
        "$500 emergency debit card, clothing, and essentials delivered within 48 hours to Springfield families after a house fire.",
      serviceType: "Emergency fire victim assistance",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services#transitional-housing`,
      name: "Transitional Housing for Fire-Affected Families",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Springfield, Massachusetts" },
      description:
        "Stable transitional housing for up to 5 Springfield families at a time, with case management and a path to permanent housing.",
      serviceType: "Transitional housing",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="US-MA" />
        <meta name="geo.placename" content={LOCATION} />
      </head>
      <body className="bg-[#F5F0EA] text-[#1A1A1A] antialiased">
        <Script
          id="structured-data-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
