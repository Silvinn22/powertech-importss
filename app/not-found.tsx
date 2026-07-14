import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-bold tracking-tight text-brand-ink">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-brand-ink">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-brand-muted">
        O link que você acessou não existe ou foi movido. Volte para o início ou fale conosco no WhatsApp.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-ink px-6 text-sm font-semibold text-white transition hover:bg-black"
        >
          Voltar ao início
        </Link>
        <a
          href={whatsappUrl("Olá! Acessei um link que não existe no site. Poderiam me ajudar?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-whatsapp px-6 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
        >
          <MessageCircle size={16} />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
