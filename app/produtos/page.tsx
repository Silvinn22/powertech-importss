import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { categories, listProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Celulares e acessórios selecionados com garantia e atendimento consultivo em Blumenau."
};

export default async function ProductsPage({ searchParams }: { searchParams?: Promise<{ categoria?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const selectedCategory = resolvedSearchParams?.categoria;
  const allProducts = await listProducts();
  const filteredProducts = selectedCategory ? allProducts.filter((product) => product.category === selectedCategory) : allProducts;

  return (
    <section className="container-page py-12 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Catálogo</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          Nossos produtos
        </h1>
        <p className="mt-4 text-lg leading-8 text-brand-muted">
          Uma curadoria selecionada de celulares e acessórios. Consulte disponibilidade e condições pelo WhatsApp.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/produtos"
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            !selectedCategory
              ? "bg-brand-ink text-white"
              : "border border-brand-border bg-white text-brand-muted hover:border-brand-ink hover:text-brand-ink"
          }`}
        >
          Todos
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/produtos?categoria=${category.slug}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category.slug
                ? "bg-brand-ink text-white"
                : "border border-brand-border bg-white text-brand-muted hover:border-brand-ink hover:text-brand-ink"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-lg text-brand-muted">Nenhum produto encontrado nesta categoria.</p>
          <Link href="/produtos" className="mt-4 inline-block text-sm font-semibold text-brand-ink hover:underline">
            Ver todos os produtos
          </Link>
        </div>
      )}
    </section>
  );
}
