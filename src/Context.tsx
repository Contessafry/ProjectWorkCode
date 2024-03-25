import { PropsWithChildren, createContext, useEffect, useState } from "react";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getAllUser,
} from "./APIcalls";
import { Cart, Product, User } from "./declaration";

interface AppContext {
  products: Product[] | [];
  cart: Cart | [];
  users: User[];
  addItemToCart: (Product: Product) => void;
  userLogged: User;
  logIn: ({ email, password }: { email: string; password: string }) => void;
  logOut: () => void;
  adminPostProduct: (product: Product) => void;
  adminDeleteProduct: (productId: Product["id"]) => void;
}
export const AppContext = createContext<AppContext>({
  products: [],
  cart: [],
  users: [],
  userLogged: { id: 0, name: "", email: "", isAdmin: false },
  addItemToCart: () => {},
  logIn: () => {},
  logOut: () => {},
  adminPostProduct: () => {},
  adminDeleteProduct: () => {},
});

export function MainContext({ children }: PropsWithChildren) {
  const [userLogged, SetUserLogged] = useState<User>(
    localStorage.getItem("UserLogged")
      ? JSON.parse(localStorage.getItem("UserLogged")!)
      : { id: 0, name: "", email: "", isAdmin: false }
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

  //ALL
  function logIn({ email, password }: { email: string; password: string }) {
    const logUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!!logUser) {
      SetUserLogged(logUser);
      localStorage.setItem("UserLogged", JSON.stringify(logUser));
    } else throw new Error("user not found");
  }
  function logOut() {
    SetUserLogged({ id: 0, name: "", email: "", isAdmin: false });
    localStorage.removeItem("UserLogged");
  }
  //ADMIN
  function adminPostProduct(product: Product) {
    addProduct(product).then((res) => setProducts([...products, res]));
  }
  function adminDeleteProduct(productId: Product["id"]) {
    deleteProduct(productId);
    setProducts(products.filter((product) => product.id !== productId));
  }
  function adminEditProduct(productId: Product["id"]) {
    editProduct(productId);
    setProducts(products.filter((product) => product.id !== productId));
  }
  //USER
  function addItemToCart(product: Product) {
    const isOnCart = cart.find((item) => item.product.id === product.id);
    if (!isOnCart) setCart([...cart, { product, qty: 1 }]);
    else
      setCart(
        cart.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
  }

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        users,
        addItemToCart,
        logIn,
        logOut,
        userLogged,
        adminPostProduct,
        adminDeleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
