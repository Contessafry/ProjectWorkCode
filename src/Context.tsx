import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getAllProducts } from "./APIcalls";
import { Cart, Product, User } from "./declaration";

interface AppContext {
  products: Product[] | [];
  cart: Cart | [];
  users: User[];
}
export const AppContext = createContext<AppContext>({
  products: [],
  cart: [],
  users: [],
});

export function MainContext({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[] | []>([]);
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  return (
    <AppContext.Provider value={{ products, cart: [], users: [] }}>
      {children}
    </AppContext.Provider>
  );
}
