import { products } from "@/lib/catalog";

export async function listProducts() {
  return products;
}

export async function listFeaturedProducts() {
  return products.filter((product) => product.featured);
}
