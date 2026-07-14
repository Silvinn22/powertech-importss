export const siteConfig = {
  name: "Powertech imports",
  tagline: "Celulares e acessórios selecionados em Blumenau.",
  description:
    "Loja especializada em celulares e acessórios premium. Atendimento consultivo pelo WhatsApp, entrega na região e retirada em Blumenau.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547996518132",
  phone: "(47) 99651-8132",
  email: "contato@powertechimports.com.br",
  city: "Blumenau",
  state: "Santa Catarina",
  stateCode: "SC",
  paymentMethods: ["pix", "cartao", "dinheiro"] as const,
  deliveryMethods: ["entrega-regiao", "retirada"] as const,
  instagram: "https://www.instagram.com/powertechimports"
};

export const paymentLabels: Record<(typeof siteConfig.paymentMethods)[number], string> = {
  pix: "Pix",
  cartao: "Cartão",
  dinheiro: "Dinheiro"
};

export const deliveryLabels: Record<(typeof siteConfig.deliveryMethods)[number], string> = {
  "entrega-regiao": "Entrega na região",
  retirada: "Retirada em Blumenau"
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productWhatsappMessage(productName: string) {
  return `Olá! Tenho interesse no ${productName}. Poderia me passar mais informações?`;
}
