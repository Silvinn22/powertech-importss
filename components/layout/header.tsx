"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { InstagramBtn } from "@/components/ui-instagram-btn";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Catálogo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/60 bg-white/80 backdrop-blur-xl">
      <div className="container-page flex min-h-[68px] items-center gap-4">
        <Link href="/" className="flex items-center gap-3 text-brand-ink" aria-label={siteConfig.name}>
          <span className="relative h-9 w-9 overflow-hidden rounded-full bg-brand-surface">
            <Image src="/logo.png" alt={siteConfig.name} fill className="object-contain p-0.5" sizes="36px" />
          </span>
          <span className="hidden text-base font-semibold tracking-tight sm:block">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-muted lg:ml-10 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <InstagramBtn href={siteConfig.instagram} size={40} />
          <a
            href={whatsappUrl("Olá! Vim pelo site e gostaria de atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brand-whatsapp px-5 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
          >
            <MessageCircle size={17} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-brand-border lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="menu-slide-down border-t border-brand-border bg-white lg:hidden">
          <div className="container-page grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 font-medium text-brand-ink hover:bg-brand-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <a
                href={whatsappUrl("Olá! Vim pelo site e gostaria de atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-whatsapp px-3 py-3 font-semibold text-white hover:bg-[#1fb855]"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
              <InstagramBtn href={siteConfig.instagram} size={45} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
