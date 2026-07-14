import { listProducts } from "@/lib/catalog";

export async function listAllProducts() {
  return listProducts();
}

export async function listFeaturedProducts() {
  const products = await listProducts();
  return products.filter((product) => product.featured);
}
