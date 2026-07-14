export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
  promotionalPrice?: number;
  stock: number;
  images: string[];
  specs: Record<string, string>;
  discount?: number;
  featured?: boolean;
  bestSeller?: boolean;
  createdAt: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CustomerOrder = {
  name: string;
  phone: string;
  city: string;
};
