import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import { formatCurrency } from "@/utils/format";
import { Button } from "@/components/ui-button";
import { productWhatsappMessage, whatsappUrl } from "@/lib/constants";

export function ProductCard({ product }: { product: Product }) {
  const price = product.promotionalPrice ?? product.price;
  const discount = product.promotionalPrice
    ? Math.round(((product.price - product.promotionalPrice) / product.price) * 100)
    : 0;

  return (
    <article className="product-card group flex h-full flex-col rounded-2xl border border-transparent bg-brand-surface p-4">
      <Link href={`/produtos/${product.slug}`} className="relative aspect-square overflow-hidden rounded-xl bg-white">
        {discount > 0 && (
          <span className="discount-badge">{discount}% OFF</span>
        )}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <Link href={`/produtos/${product.slug}`} className="line-clamp-2 text-base font-semibold leading-snug text-brand-ink">
          {product.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-brand-muted">{product.description}</p>

        <div className="mt-4">
          {product.promotionalPrice && (
            <p className="text-xs text-brand-muted line-through">{formatCurrency(product.price)}</p>
          )}
          <p className="text-xl font-semibold tracking-tight text-brand-ink">{formatCurrency(price)}</p>
        </div>

        <div className="mt-auto pt-5 grid gap-2">
          <Button href={`/produtos/${product.slug}`} variant="outline" className="w-full">
            Ver detalhes
            <ArrowUpRight size={16} />
          </Button>
          <Button
            href={whatsappUrl(productWhatsappMessage(product.name))}
            variant="whatsapp"
            className="w-full"
          >
            <MessageCircle size={16} />
            WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}
