import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Forged By Fire | Every Little Bit Counts",
  description:
    "Forged By Fire is a Springfield, MA nonprofit founded by Lt. Donald Coleman Jr. We provide emergency resources and transitional housing for families affected by house fires. Because no one should rebuild alone.",
  keywords: [
    "forged by fire",
    "house fire support",
    "fire victim assistance",
    "Springfield Massachusetts nonprofit",
    "transitional housing",
    "emergency fire relief",
    "firefighter founded nonprofit",
    "Donald Coleman Jr",
  ],
  openGraph: {
    title: "Forged By Fire | Every Little Bit Counts",
    description:
      "Emergency resources and transitional housing for Springfield families affected by house fires. Founded by Lt. Donald Coleman Jr., who has lived through the loss.",
    type: "website",
    url: "https://forgedbyfire.org",
    images: [{ url: "/fbf-logo.png", width: 1024, height: 1024, alt: "Forged By Fire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forged By Fire | Every Little Bit Counts",
    description:
      "Nonprofit supporting Springfield, MA families after house fires. Rising from the ashes, together.",
    images: ["/fbf-logo.png"],
  },
  icons: {
    icon: "/fbf-logo.png",
    apple: "/fbf-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, interactive-widget=resizes-content" />
        <meta name="theme-color" content="#1A1A1A" />
      </head>
      <body className="bg-[#F5F0EA] text-[#1A1A1A] antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
