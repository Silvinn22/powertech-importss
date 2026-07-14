import type { MetadataRoute } from "next";
import { listProducts } from "@/lib/catalog";
import { siteConfig } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allProducts = await listProducts();

  const routes = ["", "/produtos", "/sobre", "/contato", "/politica-privacidade"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const productRoutes = allProducts.map((product) => ({
    url: `${siteConfig.url}/produtos/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...routes, ...productRoutes];
}
