"use client";

import { useEffect, useState } from "react";
import { CreditCard, Headphones, MapPin, MessageCircle, PackageCheck, ShieldCheck, Star } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";
import { getFeaturedProducts } from "@/lib/catalog";
import { deliveryLabels, paymentLabels, siteConfig, whatsappUrl } from "@/lib/constants";
import { Button } from "@/components/ui-button";
import { FadeIn } from "@/components/ui-fade-in";

export function FeaturedProducts() {
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    getFeaturedProducts().then(setFeatured);
  }, []);

  return (
    <section className="container-page py-16 lg:py-20">
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
    </section>
  );
}

export function TrustBenefits() {
  const benefits = [
    {
      icon: Headphones,
      label: "Atendimento consultivo",
      text: "Tire dúvidas e receba indicações antes de fechar a compra."
    },
    {
      icon: ShieldCheck,
      label: "Produtos confiáveis",
      text: "Curadoria criteriosa, garantia e nota fiscal em todas as vendas."
    },
    {
      icon: CreditCard,
      label: "Pagamento flexível",
      text: `Aceitamos ${siteConfig.paymentMethods.map((method) => paymentLabels[method]).join(", ")}.`
    },
    {
      icon: MapPin,
      label: "Entrega e retirada",
      text: `${deliveryLabels["entrega-regiao"]} e ${deliveryLabels.retirada.toLowerCase()}.`
    }
  ];

  return (
    <section className="bg-brand-surface py-16 lg:py-20">
      <div className="container-page">
        <FadeIn>
          <SectionTitle
            kicker="Por que comprar conosco"
            title="Confiança em cada etapa"
            description="Mais do que um catálogo, oferecemos orientação e transparência do primeiro contato à entrega."
          />
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <div className="rounded-2xl bg-white p-6 shadow-card transition hover:shadow-soft">
                <item.icon className="text-brand-ink" size={22} strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
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

  return (
    <section className="container-page py-16 lg:py-20">
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
    </section>
  );
}

export function WhatsAppCta() {
  return (
    <section className="container-page py-16 lg:py-20">
      <FadeIn>
        <div className="cta-gradient rounded-[2rem] px-8 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/50">Pronto para começar?</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Fale com a {siteConfig.name} agora
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/60">
            Conte o que você procura e receba uma recomendação personalizada. Sem burocracia, direto no WhatsApp.
          </p>
          <div className="mt-8">
            <Button
              href={whatsappUrl("Olá! Gostaria de falar com a Powertech imports.")}
              variant="whatsapp"
              className="bg-white text-brand-ink hover:bg-brand-surface"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Chame no WhatsApp",
      text: "Conte qual celular ou acessório você procura e qual é a sua necessidade."
    },
    {
      icon: Headphones,
      title: "Receba orientação",
      text: "Indicamos opções compatíveis com seu uso, orçamento e preferências."
    },
    {
      icon: CreditCard,
      title: "Combine o pagamento",
      text: "Pix, cartão ou dinheiro — tudo confirmado diretamente no atendimento."
    },
    {
      icon: PackageCheck,
      title: "Receba ou retire",
      text: "Entrega na região de Blumenau ou retirada combinada com nossa equipe."
    }
  ];

  return (
    <section className="container-page py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <FadeIn>
          <SectionTitle
            kicker="Como funciona"
            title="Simples do início ao fim"
            description="Sem checkout complicado. Você conversa, escolhe com orientação e fecha a compra com segurança."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 80}>
              <div className="rounded-2xl border border-brand-border bg-white p-6 transition hover:shadow-soft">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand-muted">
                  Passo {index + 1}
                </span>
                <step.icon className="mt-4 text-brand-ink" size={22} strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-semibold text-brand-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  kicker,
  title,
  description
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-brand-muted">{description}</p>}
    </div>
  );
}
