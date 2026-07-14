import { CheckoutForm } from "@/components/cart/checkout-form";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Checkout"
};

export default function CheckoutPage() {
  return <CheckoutForm />;
}
