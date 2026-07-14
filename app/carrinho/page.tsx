import { CartView } from "@/components/cart/cart-view";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Carrinho"
};

export default function CartPage() {
  return <CartView />;
}
