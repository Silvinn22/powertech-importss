import { siteConfig } from "@/lib/constants";

export const localBusinessSchema = {
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
