import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, MessageCircle, ShieldCheck, Users, Star } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Conheça a Powertech imports. Loja especializada em celulares e acessórios em Blumenau, Santa Catarina."
};

export default function AboutPage() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Sobre nós</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          Conheça a {siteConfig.name}
        </h1>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-surface">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
            alt="Powertech imports - Loja de celulares e acessórios"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-base leading-8 text-brand-muted">
          <p>
            A <strong className="text-brand-ink">{siteConfig.name}</strong> nasceu em {siteConfig.city}, {siteConfig.state}, com o
            objetivo de oferecer celulares e acessórios selecionados com curadoria, garantia e um atendimento
            verdadeiramente consultivo.
          </p>
          <p>
            Acreditamos que comprar tecnologia não deveria ser complicado. Por isso, cada cliente é atendido
            pessoalmente pelo WhatsApp, com orientação sobre o melhor produto para o seu uso e orçamento.
          </p>
          <p>
            Trabalhamos com nota fiscal, garantia e formas de pagamento flexíveis. A entrega é feita na região de Blumenau
            e arredores, com a opção de retirada combinada.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ValueCard icon={Users} title="Atendimento personalizado" text="Cada cliente é único. Acompanhamos do primeiro contato à entrega." />
        <ValueCard icon={ShieldCheck} title="Garantia e nota fiscal" text="Todos os produtos vêm com garantia e documentação em dia." />
        <ValueCard icon={Star} title="Curadoria criteriosa" text="Selecionamos apenas produtos de qualidade comprovada." />
        <ValueCard icon={MapPin} title="Presença local" text="Loja de verdade em Blumenau, com entrega e retirada na região." />
      </div>

      <div className="mt-16 rounded-[2rem] bg-brand-ink px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-semibold">Pronto para falar conosco?</h2>
        <p className="mt-3 max-w-lg mx-auto text-white/60">
          Tire suas dúvidas, peça recomendações ou combine sua compra direto pelo WhatsApp.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl("Olá! Vi o site e gostaria de saber mais sobre a Powertech imports.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-ink transition hover:bg-brand-surface"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text
}: {
  icon: typeof Users;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-border bg-white p-6">
      <Icon className="text-brand-ink" size={22} strokeWidth={1.75} />
      <h3 className="mt-4 text-base font-semibold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
    </div>
  );
}
