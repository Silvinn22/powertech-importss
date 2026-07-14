import type { Category, Product } from "@/types";

export const categories: Category[] = [
  {
    id: "celulares",
    name: "Celulares",
    slug: "celulares",
    icon: "📱",
    description: "Smartphones selecionados com garantia e nota fiscal."
  },
  {
    id: "acessorios",
    name: "Acessórios",
    slug: "acessorios",
    icon: "🔋",
    description: "Carregadores, cabos, capas e energia para o dia a dia."
  },
  {
    id: "fones",
    name: "Fones",
    slug: "fones",
    icon: "🎧",
    description: "Áudio sem fio e cancelamento de ruído."
  },
  {
    id: "smartwatch",
    name: "Smartwatch",
    slug: "smartwatch",
    icon: "⌚",
    description: "Relógios inteligentes para saúde e produtividade."
  }
];

export const fallbackProducts: Product[] = [
  {
    id: "1",
    slug: "iphone-15-pro-256gb",
    name: "iPhone 15 Pro 256GB",
    description: "Smartphone premium com chip A17 Pro, câmera avançada e acabamento em titânio.",
    category: "celulares",
    price: 8299,
    promotionalPrice: 7499,
    stock: 18,
    discount: 10,
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1695578130391-929bdfff8b93?auto=format&fit=crop&w=1200&q=85"
    ],
    specs: {
      Tela: "6.1 polegadas Super Retina XDR",
      Armazenamento: "256GB",
      Processador: "A17 Pro",
      Garantia: "12 meses"
    },
    createdAt: "2026-07-01"
  },
  {
    id: "2",
    slug: "galaxy-s24-ultra-512gb",
    name: "Galaxy S24 Ultra 512GB",
    description: "Tela imersiva, câmera de alta resolução e recursos inteligentes para produtividade.",
    category: "celulares",
    price: 8999,
    promotionalPrice: 7899,
    stock: 12,
    discount: 12,
    featured: true,
    bestSeller: true,
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85"],
    specs: {
      Tela: "6.8 polegadas AMOLED",
      Armazenamento: "512GB",
      Câmera: "200MP",
      Bateria: "5000mAh"
    },
    createdAt: "2026-07-01"
  },
  {
    id: "4",
    slug: "smartwatch-active-pro",
    name: "Smartwatch Active Pro",
    description: "Monitoramento de saúde, chamadas Bluetooth e bateria para vários dias.",
    category: "smartwatch",
    price: 1299,
    promotionalPrice: 999,
    stock: 36,
    discount: 23,
    featured: true,
    bestSeller: false,
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=85"],
    specs: {
      Tela: "AMOLED 1.43 polegadas",
      Bateria: "Até 10 dias",
      Resistência: "5 ATM",
      Conexão: "Bluetooth"
    },
    createdAt: "2026-06-24"
  },
  {
    id: "5",
    slug: "fone-noise-canceling-air",
    name: "Fone Noise Canceling Air",
    description: "Fone sem fio com cancelamento ativo de ruído, modo ambiente e case compacto.",
    category: "fones",
    price: 999,
    promotionalPrice: 699,
    stock: 52,
    discount: 30,
    featured: true,
    bestSeller: false,
    images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85"],
    specs: {
      Bateria: "Até 30 horas",
      Recurso: "ANC",
      Conexão: "Bluetooth 5.3",
      Garantia: "12 meses"
    },
    createdAt: "2026-06-20"
  },
  {
    id: "6",
    slug: "power-bank-20000mah-usb-c",
    name: "Power Bank 20000mAh USB-C",
    description: "Carregamento rápido para celular, tablet e acessórios com proteção inteligente.",
    category: "acessorios",
    price: 349,
    promotionalPrice: 249,
    stock: 80,
    discount: 29,
    featured: false,
    bestSeller: true,
    images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=85"],
    specs: {
      Capacidade: "20000mAh",
      Entrada: "USB-C",
      Saída: "22.5W",
      Proteção: "Contra sobrecarga"
    },
    createdAt: "2026-06-18"
  },
  {
    id: "7",
    slug: "xiaomi-15c-256gb",
    name: "Xiaomi 15C 256GB",
    description: "Smartphone Xiaomi com tela ampla, câmera de alta qualidade e 256GB de armazenamento para todos os seus apps e fotos.",
    category: "celulares",
    price: 1320,
    stock: 20,
    featured: true,
    bestSeller: false,
    images: ["/xiaomi-15c.webp"],
    specs: {
      Armazenamento: "256GB",
      Câmera: "50MP",
      Bateria: "5160mAh",
      Tela: "6.88 polegadas"
    },
    createdAt: "2026-07-14"
  }
];
