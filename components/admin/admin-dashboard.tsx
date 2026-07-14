"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { ProductRow } from "@/components/admin/admin-product-row";

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
    checkAuth();
  }, []);

  async function checkAuth() {
    const supabase = getSupabase();
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      router.push("/admin");
      return;
    }
    loadProducts();
  }

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
          <ProductRow
            key={product.id}
            product={product}
            editingId={editingId}
            editPrice={editPrice}
            editPromo={editPromo}
            onEditPriceChange={setEditPrice}
            onEditPromoChange={setEditPromo}
            onToggleVisibility={toggleVisibility}
            onToggleFeatured={toggleFeatured}
            onStartEdit={(p) => {
              setEditingId(p.id);
              setEditPrice(String(p.price));
              setEditPromo(p.promotional_price ? String(p.promotional_price) : "");
            }}
            onSavePrice={savePrice}
            onCancelEdit={() => setEditingId(null)}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </section>
  );
}
