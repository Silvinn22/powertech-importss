"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff, LogOut, Package, Plus, Pencil, Trash2 } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/format";

type DBProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  promotional_price: number | null;
  stock: number;
  images: string[];
  specs: Record<string, string>;
  visible: boolean;
  featured: boolean;
  best_seller: boolean;
  created_at: string;
};

export function AdminDashboard() {
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState("");
  const [editPromo, setEditPromo] = useState("");
  const router = useRouter();

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setProducts(data as DBProduct[]);
    setLoading(false);
  }

  async function toggleVisibility(id: string, current: boolean) {
    const supabase = getSupabase();
    await supabase.from("products").update({ visible: !current }).eq("id", id);
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, visible: !current } : p)));
  }

  async function toggleFeatured(id: string, current: boolean) {
    const supabase = getSupabase();
    await supabase.from("products").update({ featured: !current }).eq("id", id);
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, featured: !current } : p)));
  }

  async function savePrice(id: string) {
    const supabase = getSupabase();
    const updates: Record<string, unknown> = {
      price: parseFloat(editPrice) || 0
    };
    if (editPromo) {
      updates.promotional_price = parseFloat(editPromo) || null;
    } else {
      updates.promotional_price = null;
    }
    await supabase.from("products").update(updates).eq("id", id);
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, price: updates.price as number, promotional_price: updates.promotional_price as number | null }
          : p
      )
    );
    setEditingId(null);
  }

  async function deleteProduct(id: string) {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
    const supabase = getSupabase();
    await supabase.from("products").delete().eq("id", id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleLogout() {
    const supabase = getSupabase();
    await supabase.auth.signOut();
    router.push("/admin");
  }

  if (loading) {
    return (
      <section className="container-page py-10">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 rounded-2xl bg-brand-surface" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Admin</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-brand-ink">Gerenciar Produtos</h1>
          <p className="mt-3 text-brand-muted">{products.length} produtos cadastrados</p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-border px-5 text-sm font-medium text-brand-muted transition hover:bg-brand-surface"
        >
          <LogOut size={16} />
          Sair
        </button>
      </div>

      <div className="mt-8 grid gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col gap-4 rounded-2xl border p-5 transition sm:flex-row sm:items-center ${
              product.visible
                ? "border-brand-border bg-white"
                : "border-dashed border-brand-border bg-brand-surface/50 opacity-60"
            }`}
          >
            <div className="flex flex-1 items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-surface text-brand-ink">
                <Package size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-semibold text-brand-ink">{product.name}</h3>
                  {!product.visible && (
                    <span className="rounded-full bg-brand-surface px-2 py-0.5 text-xs text-brand-muted">Oculto</span>
                  )}
                  {product.featured && (
                    <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-xs text-brand-blue">Destaque</span>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-brand-muted">{product.category} · Estoque: {product.stock}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {editingId === product.id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    className="w-24 rounded-lg border border-brand-border px-3 py-2 text-sm"
                    placeholder="Preço"
                  />
                  <input
                    type="number"
                    value={editPromo}
                    onChange={(e) => setEditPromo(e.target.value)}
                    className="w-24 rounded-lg border border-brand-border px-3 py-2 text-sm"
                    placeholder="Promo"
                  />
                  <button onClick={() => savePrice(product.id)} className="rounded-lg bg-brand-ink px-3 py-2 text-sm text-white">OK</button>
                  <button onClick={() => setEditingId(null)} className="rounded-lg border border-brand-border px-3 py-2 text-sm text-brand-muted">X</button>
                </div>
              ) : (
                <span className="text-sm font-semibold text-brand-ink">
                  {formatCurrency(product.price)}
                  {product.promotional_price && (
                    <span className="ml-1 text-brand-muted line-through">{formatCurrency(product.promotional_price)}</span>
                  )}
                </span>
              )}

              <button
                onClick={() => toggleVisibility(product.id, product.visible)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-brand-border transition hover:bg-brand-surface"
                title={product.visible ? "Ocultar" : "Mostrar"}
              >
                {product.visible ? <Eye size={16} className="text-brand-ink" /> : <EyeOff size={16} className="text-brand-muted" />}
              </button>

              <button
                onClick={() => toggleFeatured(product.id, product.featured)}
                className={`grid h-9 w-9 place-items-center rounded-lg border transition ${
                  product.featured ? "border-brand-blue bg-brand-blue/10 text-brand-blue" : "border-brand-border text-brand-muted hover:bg-brand-surface"
                }`}
                title={product.featured ? "Remover destaque" : "Destacar"}
              >
                <span className="text-xs font-bold">★</span>
              </button>

              <button
                onClick={() => {
                  setEditingId(product.id);
                  setEditPrice(String(product.price));
                  setEditPromo(product.promotional_price ? String(product.promotional_price) : "");
                }}
                className="grid h-9 w-9 place-items-center rounded-lg border border-brand-border text-brand-muted transition hover:bg-brand-surface"
                title="Editar preço"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-brand-border text-red-500 transition hover:bg-red-50"
                title="Excluir"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
