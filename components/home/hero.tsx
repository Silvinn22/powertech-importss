"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui-button";
import { siteConfig, whatsappUrl } from "@/lib/constants";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onScroll() {
      const rect = section!.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = 1 - Math.max(0, Math.min(1, rect.bottom / (viewH + rect.height)));
      const imageWrap = imageWrapRef.current;
      if (imageWrap) {
        const scale = 1 + progress * 0.06;
        const translateY = progress * -30;
        imageWrap.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      const imageWrap = imageWrapRef.current;
      if (!imageWrap) return;
      const rect = imageWrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: dy * -4, y: dx * 4 });
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-surface">
      <div className="container-page grid min-h-[520px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:min-h-[600px] lg:py-24">
        <div className="hero-text text-center lg:text-left">
          <p className="text-sm font-medium tracking-wide text-brand-muted">
            {siteConfig.name} · {siteConfig.city}, {siteConfig.stateCode}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <span className="hero-gradient-text">O próximo smartphone</span>
            <span className="block hero-gradient-text">está aqui.</span>
            <span className="mt-2 block text-brand-muted">Atendimento pelo WhatsApp.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-muted lg:mx-0">
            Celulares e acessórios com curadoria, garantia e orientação antes da compra. Fale conosco e receba uma
            recomendação personalizada.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/produtos" variant="outline" className="w-full sm:w-auto">
              Ver Catálogo
            </Button>
            <Button href={whatsappUrl("Olá! Gostaria de conhecer os produtos da Powertech imports.")} variant="whatsapp" className="w-full sm:w-auto">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Button>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-brand-muted sm:flex-row lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-ink" />
              Garantia e nota fiscal
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-brand-ink" />
              Entrega na região e retirada
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div
            ref={imageWrapRef}
            className="hero-image-wrap relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-soft"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 transition-transform duration-200 ease-out"
              style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                alt="Celulares e acessórios premium"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-6 bottom-6 z-10 rounded-2xl bg-white/90 p-5 backdrop-blur-md">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-muted">Atendimento consultivo</p>
              <p className="mt-1 text-xl font-semibold text-brand-ink">Compre com orientação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
