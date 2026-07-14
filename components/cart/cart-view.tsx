"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui-button";
import { formatCurrency } from "@/utils/format";

export function CartView() {
  const { items, subtotal, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <section className="container-page py-16 text-center">
        <h1 className="text-4xl font-black text-brand-navy">Seu carrinho está vazio</h1>
        <p className="mt-3 text-slate-600">Adicione produtos para montar seu pedido.</p>
        <Button href="/produtos" className="mt-6">Ver produtos</Button>
      </section>
    );
  }

  return (
    <section className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="text-4xl font-black text-brand-navy">Carrinho</h1>
        <div className="mt-6 grid gap-4">
          {items.map((item) => (
            <article key={item.product.id} className="grid gap-4 rounded-md border border-slate-200 p-4 sm:grid-cols-[110px_1fr_auto]">
              <div className="relative aspect-square overflow-hidden rounded-md bg-slate-100">
                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
              </div>
              <div>
                <Link href={`/produtos/${item.product.slug}`} className="font-black text-brand-navy hover:text-brand-blue">{item.product.name}</Link>
                <p className="mt-2 text-sm text-slate-600">{formatCurrency(item.product.promotionalPrice ?? item.product.price)}</p>
                <div className="mt-4 inline-flex items-center rounded-md border border-slate-300">
                  <button className="grid h-10 w-10 place-items-center" onClick={() => updateQuantity(item.product.id, item.quantity - 1)} aria-label="Diminuir quantidade"><Minus size={16} /></button>
                  <span className="grid h-10 w-10 place-items-center font-bold">{item.quantity}</span>
                  <button className="grid h-10 w-10 place-items-center" onClick={() => updateQuantity(item.product.id, item.quantity + 1)} aria-label="Aumentar quantidade"><Plus size={16} /></button>
                </div>
              </div>
              <button onClick={() => removeItem(item.product.id)} className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 text-red-600" aria-label="Remover produto"><Trash2 size={18} /></button>
            </article>
          ))}
        </div>
      </div>
      <aside className="h-fit rounded-md border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-black text-brand-navy">Resumo</h2>
        <div className="mt-5 flex justify-between border-b border-slate-200 pb-4">
          <span>Subtotal</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">Frete e disponibilidade serão confirmados no atendimento antes da finalização.</p>
        <Button href="/checkout" className="mt-5 w-full">Finalizar pedido</Button>
      </aside>
    </section>
  );
}
