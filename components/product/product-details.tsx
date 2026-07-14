"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";
import { Button } from "@/components/ui-button";
import { productWhatsappMessage, whatsappUrl } from "@/lib/constants";
import { formatCurrency } from "@/utils/format";

export function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const price = product.promotionalPrice ?? product.price;

  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-brand-surface">
          <Image src={selectedImage} alt={product.name} fill priority className="object-cover" />
        </div>
        {product.images.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar">
            {product.images.map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`relative h-20 w-20 flex-none overflow-hidden rounded-xl border-2 transition ${
                  selectedImage === image ? "border-brand-ink" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={image} alt={`${product.name} miniatura`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">{product.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">{product.name}</h1>
        <p className="mt-5 text-lg leading-8 text-brand-muted">{product.description}</p>

        <div className="mt-8 rounded-2xl bg-brand-surface p-6">
          {product.promotionalPrice && (
            <p className="text-sm text-brand-muted line-through">{formatCurrency(product.price)}</p>
          )}
          <p className="text-4xl font-semibold tracking-tight text-brand-ink">{formatCurrency(price)}</p>
          <p className="mt-2 text-sm text-brand-muted">
            Valores sujeitos a confirmação. Fale conosco para consultar disponibilidade.
          </p>

          <div className="mt-6 grid gap-3">
            <Button href={whatsappUrl(productWhatsappMessage(product.name))} variant="whatsapp" className="w-full">
              <MessageCircle size={18} />
              Comprar pelo WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-brand-surface p-4 text-center">
            <ShieldCheck size={18} className="text-brand-muted" />
            <span className="text-xs font-medium text-brand-muted">Garantia</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-brand-surface p-4 text-center">
            <Truck size={18} className="text-brand-muted" />
            <span className="text-xs font-medium text-brand-muted">Entrega</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-brand-surface p-4 text-center">
            <CreditCard size={18} className="text-brand-muted" />
            <span className="text-xs font-medium text-brand-muted">Pix / Cartão</span>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-brand-ink">Especificações</h2>
          <dl className="mt-4 divide-y divide-brand-border rounded-2xl border border-brand-border bg-white">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="grid gap-2 p-4 sm:grid-cols-2">
                <dt className="font-medium text-brand-ink">{key}</dt>
                <dd className="text-brand-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
