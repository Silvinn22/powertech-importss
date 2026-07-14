"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui-fade-in";

const categoryBlocks = [
  {
    name: "Smartphones",
    slug: "celulares",
    description: "iPhone, Samsung Galaxy e mais.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Fones",
    slug: "fones",
    description: "Áudio sem fio premium.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Smartwatch",
    slug: "smartwatch",
    description: "Saúde e produtividade no pulso.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Carregadores",
    slug: "acessorios",
    description: "Energia rápida para todos os dispositivos.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Capinhas",
    slug: "acessorios",
    description: "Proteção com estilo.",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1200&q=85"
  }
];

export function Categories() {
  return (
    <section className="container-page py-20 lg:py-28">
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Categorias</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          Explore por tipo
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-brand-muted">
          Navegue pelas categorias e encontre exatamente o que precisa.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryBlocks.map((cat, i) => (
          <FadeIn key={cat.slug + cat.name} delay={i * 80}>
            <Link
              href={`/produtos?categoria=${cat.slug}`}
              className="category-block group relative block aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-brand-surface"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.08]"
              />
              <div className="category-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl font-semibold text-white">{cat.name}</h3>
                <p className="mt-1 text-sm text-white/70">{cat.description}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
