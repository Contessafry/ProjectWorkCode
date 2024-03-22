import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getAllProducts, getAllUser } from "./APIcalls";
import { Cart, Product, User } from "./declaration";

interface AppContext {
  products: Product[] | [];
  cart: Cart | [];
  users: User[];
  addItemToCart: (Product: Product) => void;
  userLogged: User | null;
  logIn: ({ email, password }: { email: string; password: string }) => void;
}
export const AppContext = createContext<AppContext>({
  products: [],
  cart: [],
  users: [],
  userLogged: null,
  addItemToCart: () => {},
  logIn: () => {},
});

export function MainContext({ children }: PropsWithChildren) {
  const [userLogged, SetUserLogged] = useState<User | null>(
    localStorage.getItem("UserLogged")
      ? JSON.parse(localStorage.getItem("UserLogged")!)
      : null
  );
  const [products, setProducts] = useState<Product[] | []>([]);
  const [cart, setCart] = useState<Cart | []>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);
  useEffect(() => {
    getAllUser().then((res) => setUsers(res));
  }, []);

  function addItemToCart(product: Product) {
    const isOnCart = cart.find((item) => item.product.id === product.id);
    if (product && !isOnCart) setCart([...cart, { product, qty: 1 }]);
    else
      setCart(
        cart.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
  }

  function logIn({ email, password }: { email: string; password: string }) {
    const logUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!!logUser) {
      SetUserLogged(logUser);
      localStorage.setItem("UserLogged", JSON.stringify(logUser));
    } else throw new Error("user not found");
  }

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        users,
        addItemToCart,
        logIn,
        userLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
