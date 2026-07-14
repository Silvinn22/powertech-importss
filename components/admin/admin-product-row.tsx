"use client";

import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
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

type Props = {
  product: DBProduct;
  editingId: string | null;
  editPrice: string;
  editPromo: string;
  onEditPriceChange: (val: string) => void;
  onEditPromoChange: (val: string) => void;
  onToggleVisibility: (id: string, current: boolean) => void;
  onToggleFeatured: (id: string, current: boolean) => void;
  onStartEdit: (product: DBProduct) => void;
  onSavePrice: (id: string) => void;
  onCancelEdit: () => void;
  onDelete: (id: string) => void;
};

export function ProductRow({
  product,
  editingId,
  editPrice,
  editPromo,
  onEditPriceChange,
  onEditPromoChange,
  onToggleVisibility,
  onToggleFeatured,
  onStartEdit,
  onSavePrice,
  onCancelEdit,
  onDelete
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border p-5 transition sm:flex-row sm:items-center ${
        product.visible
          ? "border-brand-border bg-white"
          : "border-dashed border-brand-border bg-brand-surface/50 opacity-60"
      }`}
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-surface text-brand-ink">
          📦
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
              onChange={(e) => onEditPriceChange(e.target.value)}
              className="w-24 rounded-lg border border-brand-border px-3 py-2 text-sm"
              placeholder="Preço"
            />
            <input
              type="number"
              value={editPromo}
              onChange={(e) => onEditPromoChange(e.target.value)}
              className="w-24 rounded-lg border border-brand-border px-3 py-2 text-sm"
              placeholder="Promo"
            />
            <button onClick={() => onSavePrice(product.id)} className="rounded-lg bg-brand-ink px-3 py-2 text-sm text-white">OK</button>
            <button onClick={onCancelEdit} className="rounded-lg border border-brand-border px-3 py-2 text-sm text-brand-muted">X</button>
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
          onClick={() => onToggleVisibility(product.id, product.visible)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-brand-border transition hover:bg-brand-surface"
          title={product.visible ? "Ocultar" : "Mostrar"}
        >
          {product.visible ? <Eye size={16} className="text-brand-ink" /> : <EyeOff size={16} className="text-brand-muted" />}
        </button>

        <button
          onClick={() => onToggleFeatured(product.id, product.featured)}
          className={`grid h-9 w-9 place-items-center rounded-lg border transition ${
            product.featured ? "border-brand-blue bg-brand-blue/10 text-brand-blue" : "border-brand-border text-brand-muted hover:bg-brand-surface"
          }`}
          title={product.featured ? "Remover destaque" : "Destacar"}
        >
          <span className="text-xs font-bold">★</span>
        </button>

        <button
          onClick={() => onStartEdit(product)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-brand-border text-brand-muted transition hover:bg-brand-surface"
          title="Editar preço"
        >
          <Pencil size={16} />
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-brand-border text-red-500 transition hover:bg-red-50"
          title="Excluir"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
