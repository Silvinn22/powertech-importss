import { ProductCard } from "@/components/product/product-card";
import { listProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default async function PromotionsPage() {
  const allProducts = await listProducts();
  const deals = allProducts.filter((product) => product.promotionalPrice);

  return (
    <section className="container-page py-10">
      <div className="rounded-md bg-brand-navy p-8 text-white">
        <p className="font-bold text-orange-300">Ofertas selecionadas</p>
        <h1 className="mt-2 text-4xl font-black">Promoções</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Produtos com preço especial, estoque controlado e atendimento para fechar seu pedido no WhatsApp.</p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {deals.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
