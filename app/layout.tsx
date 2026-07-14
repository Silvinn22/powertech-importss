import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/providers";
import { ScrollToTop } from "@/components/ui-scroll-top";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const GA_ID = "G-8RT539C0HQ";

export const viewport: Viewport = {
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Celulares e acessórios em Blumenau`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["celulares", "smartphones", "acessórios", "Blumenau", "Santa Catarina", "WhatsApp", "iPhone", "Samsung", "tech"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.png"
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsapp}`,
    email: siteConfig.email,
    priceRange: "$$",
    image: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blumenau",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: "89010-000",
      addressCountry: "BR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.919,
      longitude: -49.066
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    sameAs: [siteConfig.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Celulares e Acessórios",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Smartphones"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Acessórios"
          }
        }
      ]
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans text-brand-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
