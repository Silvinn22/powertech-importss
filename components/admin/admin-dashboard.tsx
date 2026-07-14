"use client";

import { useState, type ElementType } from "react";
import { Box, ChartNoAxesColumn, ImageUp, Lock, PackagePlus, Pencil, Tags, Trash2 } from "lucide-react";
import { products, categories } from "@/lib/catalog";
import { formatCurrency } from "@/utils/format";

export function AdminDashboard() {
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return (
      <section className="container-page grid min-h-[70vh] place-items-center py-10">
        <form onSubmit={(event) => { event.preventDefault(); setLogged(true); }} className="w-full max-w-md rounded-md border border-slate-200 p-6 shadow-soft">
          <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-navy text-white"><Lock size={22} /></span>
          <h1 className="mt-5 text-3xl font-black text-brand-navy">Login administrativo</h1>
          <p className="mt-2 text-slate-600">Pronto para conectar ao Supabase Auth.</p>
          <div className="mt-6 grid gap-4">
            <input className="min-h-12 rounded-md border border-slate-300 px-4" placeholder="E-mail" type="email" />
            <input className="min-h-12 rounded-md border border-slate-300 px-4" placeholder="Senha" type="password" />
            <button className="min-h-12 rounded-md bg-brand-blue font-black text-white">Entrar</button>
          </div>
        </form>
      </section>
    );
  }

  const revenuePreview = products.reduce((sum, product) => sum + (product.promotionalPrice ?? product.price), 0);

  return (
    <section className="container-page py-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-bold text-brand-orange">Admin</p>
          <h1 className="mt-2 text-4xl font-black text-brand-navy">Dashboard</h1>
          <p className="mt-3 text-slate-600">Gestão de produtos, estoque, promoções, categorias e pedidos.</p>
        </div>
        <button className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand-orange px-5 font-black text-white"><PackagePlus size={18} /> Cadastrar produto</button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <Metric icon={Box} label="Produtos" value={String(products.length)} />
        <Metric icon={Tags} label="Categorias" value={String(categories.length)} />
        <Metric icon={ChartNoAxesColumn} label="Estoque total" value={String(products.reduce((sum, product) => sum + product.stock, 0))} />
        <Metric icon={ImageUp} label="Vitrine" value={formatCurrency(revenuePreview)} />
      </div>

      <div className="mt-8 overflow-x-auto rounded-md border border-slate-200">
        <div className="min-w-[720px]">
          <div className="grid grid-cols-[1fr_140px_120px_120px] bg-slate-50 p-4 text-sm font-black text-brand-navy">
            <span>Produto</span><span>Preço</span><span>Estoque</span><span>Ações</span>
          </div>
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-[1fr_140px_120px_120px] items-center border-t border-slate-200 p-4 text-sm">
              <strong className="text-brand-navy">{product.name}</strong>
              <span>{formatCurrency(product.promotionalPrice ?? product.price)}</span>
              <span>{product.stock}</span>
              <span className="flex gap-2">
                <button className="grid h-9 w-9 place-items-center rounded-md border border-slate-300 text-brand-blue" aria-label="Editar"><Pencil size={16} /></button>
                <button className="grid h-9 w-9 place-items-center rounded-md border border-slate-300 text-red-600" aria-label="Excluir"><Trash2 size={16} /></button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ icon: Icon, label, value }: { icon: ElementType; label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 p-5 shadow-sm">
      <Icon className="text-brand-blue" />
      <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-brand-navy">{value}</p>
    </div>
  );
}
