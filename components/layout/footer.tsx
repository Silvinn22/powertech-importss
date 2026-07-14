import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { deliveryLabels, paymentLabels, siteConfig, whatsappUrl } from "@/lib/constants";
import { InstagramBtn } from "@/components/ui-instagram-btn";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-border bg-brand-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-full bg-white">
              <Image src="/logo.png" alt={siteConfig.name} fill className="object-contain p-0.5" sizes="36px" />
            </span>
            <h2 className="text-xl font-semibold text-brand-ink">{siteConfig.name}</h2>
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 text-brand-muted">{siteConfig.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-whatsapp hover:underline"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
            <span className="text-brand-border">|</span>
            <InstagramBtn href={siteConfig.instagram} size={36} />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-muted">Navegação</h3>
          <div className="mt-4 grid gap-2 text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink transition">
              Início
            </Link>
            <Link href="/produtos" className="hover:text-brand-ink transition">
              Catálogo
            </Link>
            <Link href="/sobre" className="hover:text-brand-ink transition">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-brand-ink transition">
              Contato
            </Link>
            <Link href="/politica-privacidade" className="hover:text-brand-ink transition">
              Política de Privacidade
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-muted">Contato</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-muted">
            <span className="flex items-center gap-2">
              <Phone size={15} />
              {siteConfig.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={15} />
              {siteConfig.email}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={15} />
              {siteConfig.city}, {siteConfig.stateCode}
            </span>
          </div>
          <p className="mt-5 text-xs leading-6 text-brand-muted">
            Pagamento: {siteConfig.paymentMethods.map((method) => paymentLabels[method]).join(" · ")}
            <br />
            {deliveryLabels["entrega-regiao"]} · {deliveryLabels.retirada}
          </p>
        </div>
      </div>

      <div className="border-t border-brand-border py-5 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
