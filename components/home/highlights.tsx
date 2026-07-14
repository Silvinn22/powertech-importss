"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import { getFeaturedProducts } from "@/lib/catalog";
import { formatCurrency } from "@/utils/format";
import { productWhatsappMessage, whatsappUrl } from "@/lib/constants";
import { FadeIn } from "@/components/ui-fade-in";

export function Highlights() {
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    getFeaturedProducts().then(setFeatured);
  }, []);

  if (featured.length === 0) return null;

  return (
    <section className="bg-brand-surface py-20 lg:py-28">
      <div className="container-page">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Destaques</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Selecionados para você
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-brand-muted">
            Cada produto é escolhido com critério. Conheça os itens que nossos clientes mais procuram.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-24">
          {featured.map((product, index) => {
            const price = product.promotionalPrice ?? product.price;
            const isReversed = index % 2 !== 0;

            return (
              <FadeIn key={product.id}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white ${isReversed ? "[direction:ltr]" : ""}`}>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div className={`space-y-6 ${isReversed ? "[direction:ltr]" : ""}`}>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-muted">
                        {product.category === "celulares" ? "Smartphone" : product.category === "fones" ? "Áudio" : product.category === "smartwatch" ? "Wearable" : "Acessório"}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                        {product.name}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-brand-muted">{product.description}</p>
                    </div>

                    {product.promotionalPrice && (
                      <p className="text-sm text-brand-muted line-through">{formatCurrency(product.price)}</p>
                    )}
                    <p className="text-4xl font-semibold tracking-tight text-brand-ink">{formatCurrency(price)}</p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                        <span
                          key={key}
                          className="rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-medium text-brand-muted"
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <a
                        href={whatsappUrl(productWhatsappMessage(product.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-whatsapp px-7 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
                      >
                        <MessageCircle size={18} />
                        Comprar pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
