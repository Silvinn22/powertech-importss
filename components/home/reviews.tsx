"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui-fade-in";
import { SectionTitle } from "@/components/ui/section-title";

const reviews = [
  [
    "Atendimento excelente no WhatsApp. Me ajudaram a escolher o celular ideal e recebi tudo certinho em Blumenau.",
    "Mariana S."
  ],
  [
    "Comprei fones e power bank. Produtos originais, preço justo e entrega rápida na região.",
    "Rafael M."
  ],
  [
    "Loja confiável. Explicaram garantia, formas de pagamento e prazo antes de eu confirmar.",
    "Camila R."
  ]
];

export function Reviews() {
  return (
    <section className="bg-brand-surface py-16 lg:py-20">
      <div className="container-page">
        <FadeIn>
          <SectionTitle kicker="Depoimentos" title="Quem comprou, recomenda" />
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map(([text, author], i) => (
            <FadeIn key={author} delay={i * 100}>
              <blockquote className="review-card rounded-2xl border border-brand-border bg-white p-6">
                <div className="flex gap-0.5 text-brand-ink">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="relative z-10 mt-4 leading-7 text-brand-muted">&ldquo;{text}&rdquo;</p>
                <footer className="mt-5 text-sm font-semibold text-brand-ink">{author}</footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
