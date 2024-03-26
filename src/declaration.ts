export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  isAdmin: boolean;
}
export type CartProduct = { product: Product; qty: number };
export type Cart = CartProduct[];
