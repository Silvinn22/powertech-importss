"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { Button } from "@/components/ui-button";
import { FadeIn } from "@/components/ui-fade-in";

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
