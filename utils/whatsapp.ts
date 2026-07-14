import type { CartItem, CustomerOrder } from "@/types";
import { whatsappUrl } from "@/lib/constants";
import { formatCurrency } from "@/utils/format";

export function buildWhatsAppOrderUrl(customer: CustomerOrder, items: CartItem[]) {
  const total = items.reduce((sum, item) => {
    const price = item.product.promotionalPrice ?? item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const products = items
    .map((item) => `- ${item.product.name} | Qtd: ${item.quantity} | ${formatCurrency((item.product.promotionalPrice ?? item.product.price) * item.quantity)}`)
    .join("\n");

  const message = [
    "Olá! Quero finalizar meu pedido.",
    "",
    `Nome: ${customer.name}`,
    `Telefone: ${customer.phone}`,
    `Cidade: ${customer.city}`,
    "",
    "Produtos:",
    products,
    "",
    `Total: ${formatCurrency(total)}`
  ].join("\n");

  return whatsappUrl(message);
}
