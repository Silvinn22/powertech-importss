import type { Product } from "@/types";
import { getSupabase } from "@/lib/supabase";
import { fallbackProducts, categories } from "@/lib/data/products";

export { categories };

let cachedProducts: Product[] | null = null;

function mapRow(p: Record<string, unknown>): Product {
  return {
    id: p.id as string,
    slug: p.slug as string,
    name: p.name as string,
    description: p.description as string,
    category: p.category as string,
    price: Number(p.price),
    promotionalPrice: p.promotional_price ? Number(p.promotional_price) : undefined,
    stock: p.stock as number,
    images: p.images as string[],
    specs: p.specs as Record<string, string>,
    featured: p.featured as boolean,
    bestSeller: p.best_seller as boolean,
    createdAt: p.created_at as string
  };
}

export async function listProducts(): Promise<Product[]> {
  if (cachedProducts) return cachedProducts;
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("visible", true)
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackProducts;
    }

    cachedProducts = data.map(mapRow);
    return cachedProducts;
  } catch {
    return fallbackProducts;
  }
}

export async function listAllProducts(): Promise<Product[]> {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackProducts;
    }

    return data.map(mapRow);
  } catch {
    return fallbackProducts;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await listProducts();
  return all.filter((p) => p.featured).slice(0, 4);
}

export async function getBestSellers(): Promise<Product[]> {
  const all = await listProducts();
  return all.filter((p) => p.bestSeller).slice(0, 4);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await listProducts();
  return all.find((p) => p.slug === slug);
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  const all = await listProducts();
  return all.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
}
