"use client";

import { CreditCard, Headphones, MessageCircle, PackageCheck } from "lucide-react";
import { FadeIn } from "@/components/ui-fade-in";
import { SectionTitle } from "@/components/ui/section-title";

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

export function HowItWorks() {
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
