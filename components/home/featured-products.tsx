"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";
import { getFeaturedProducts } from "@/lib/catalog";
import { Button } from "@/components/ui-button";
import { FadeIn } from "@/components/ui-fade-in";
import { SectionTitle } from "@/components/ui/section-title";

export function FeaturedProducts() {
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    getFeaturedProducts().then(setFeatured);
  }, []);

  return (
    <section className="bg-brand-surface py-16 lg:py-20">
      <div className="container-page">
        <FadeIn>
          <SectionTitle
            kicker="Catálogo selecionado"
            title="Produtos em destaque"
            description="Uma curadoria enxuta de celulares e acessórios. Consulte disponibilidade e condições pelo WhatsApp."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <FadeIn key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Button href="/produtos" variant="outline">
            Ver catálogo completo
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
