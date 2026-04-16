import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AMEN Pest Control | Southern California's Most Trusted",
    template: "%s | AMEN Pest Control",
  },
  description: "Eco-friendly & pet-friendly pest control in Southern California. A+ BBB Rating. Free inspections available. Fast response times.",
  keywords: [
    "pest control Southern California",
    "exterminator Southern California",
    "eco-friendly pest control",
    "rodent control",
    "termite inspection",
    "bed bug treatment",
    "commercial pest management",
    "Southern California pest control",
  ],
  authors: [{ name: "AMEN Pest Control" }],
  creator: "AMEN Pest Control",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amenpestcontrol.com",
    title: "AMEN Pest Control | Southern California's Most Trusted",
    description: "Eco-friendly & pet-friendly pest control in the Southern California area. A+ BBB Rating. Get a free quote today.",
    siteName: "AMEN Pest Control",
    images: [
      {
        url: "/images/bg_pest.jpg",
        width: 1200,
        height: 630,
        alt: "AMEN Pest Control Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMEN Pest Control | Southern California's Most Trusted",
    description: "Eco-friendly & pet-friendly pest control. A+ BBB Rating. Free inspections available.",
    images: ["/images/bg_pest.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControl",
  name: "AMEN Pest Control",
  image: "https://amenpestcontrol.com/images/logo.png",
  "@id": "https://amenpestcontrol.com",
  url: "https://amenpestcontrol.com",
  telephone: "+18884282636",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3435 Ocean Park Blvd. #107",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90405",
    addressCountry: "US"
  },
  areaServed: ["Southern California"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "07:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.facebook.com/AmenPestControlLA",
    "https://www.instagram.com/amen_pest_control/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
