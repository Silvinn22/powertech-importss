"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { buildWhatsAppOrderUrl } from "@/utils/whatsapp";
import { formatCurrency } from "@/utils/format";

export function CheckoutForm() {
  const { items, subtotal } = useCart();
  const [customer, setCustomer] = useState({ name: "", phone: "", city: "" });

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) return;
    window.location.href = buildWhatsAppOrderUrl(customer, items);
  }

  return (
    <section className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_360px]">
      <form onSubmit={submitOrder} className="rounded-md border border-slate-200 p-6 shadow-sm">
        <p className="font-bold text-brand-orange">Checkout</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Finalizar pelo WhatsApp</h1>
        <p className="mt-3 leading-7 text-slate-600">Preencha seus dados para gerar uma mensagem automática com os produtos escolhidos.</p>
        <div className="mt-8 grid gap-4">
          <label className="grid gap-2 font-bold text-brand-navy">Nome
            <input required value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} className="min-h-12 rounded-md border border-slate-300 px-4 font-normal" />
          </label>
          <label className="grid gap-2 font-bold text-brand-navy">Telefone
            <input required value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} className="min-h-12 rounded-md border border-slate-300 px-4 font-normal" />
          </label>
          <label className="grid gap-2 font-bold text-brand-navy">Cidade
            <input required value={customer.city} onChange={(event) => setCustomer({ ...customer, city: event.target.value })} className="min-h-12 rounded-md border border-slate-300 px-4 font-normal" />
          </label>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 font-black text-white hover:bg-emerald-700">
            <MessageCircle size={18} /> Gerar pedido no WhatsApp
          </button>
        </div>
      </form>
      <aside className="h-fit rounded-md border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-black text-brand-navy">Seu pedido</h2>
        <div className="mt-4 grid gap-3">
          {items.map((item) => (
            <div key={item.product.id} className="flex justify-between gap-4 text-sm">
              <span>{item.quantity}x {item.product.name}</span>
              <strong>{formatCurrency((item.product.promotionalPrice ?? item.product.price) * item.quantity)}</strong>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between border-t border-slate-200 pt-4 text-lg">
          <span>Total</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
      </aside>
    </section>
  );
}
