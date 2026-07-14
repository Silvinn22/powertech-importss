"use client";

import { CreditCard, Headphones, MapPin, ShieldCheck } from "lucide-react";
import { deliveryLabels, paymentLabels, siteConfig } from "@/lib/constants";
import { FadeIn } from "@/components/ui-fade-in";
import { SectionTitle } from "@/components/ui/section-title";

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
