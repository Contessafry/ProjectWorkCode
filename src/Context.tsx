import { PropsWithChildren, createContext, useEffect, useState } from "react";
import {
  addOrder,
  addProduct,
  deleteProduct,
  editProduct,
  getAllOrders,
  getAllProducts,
  getAllUser,
} from "./APIcalls";
import { Cart, CartProduct, Order, Product, User } from "./declaration";
import { v4 as uuid } from "uuid";

interface AppContext {
  products: Product[] | [];
  cart: Cart | [];
  users: User[];
  orders: Order[];
  addItemToCart: (Product: Product) => void;
  removeItemFromCart: (Product: CartProduct) => void;
  checkOut: () => void;
  clearCart: () => void;
  userLogged: User;
  logIn: ({ email, password }: { email: string; password: string }) => void;
  logOut: () => void;
  adminPostProduct: (product: Product) => void;
  adminDeleteProduct: (productId: Product["id"]) => void;
  adminEditProduct: (product: Product) => void;
  onSearch: (ToSearch: string) => void;
}
export const AppContext = createContext<AppContext>({
  products: [],
  cart: [],
  users: [],
  orders: [],
  userLogged: { id: 0, name: "", email: "", isAdmin: false },
  addItemToCart: () => {},
  removeItemFromCart: () => {},

  checkOut: () => {},
  clearCart: () => {},
  logIn: () => {},
  logOut: () => {},
  adminPostProduct: () => {},
  adminDeleteProduct: () => {},
  adminEditProduct: () => {},
  onSearch: () => {},
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
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);
  useEffect(() => {
    getAllUser().then((res) => setUsers(res));
  }, []);
  useEffect(() => {
    getAllOrders().then((res) => setOrders(res));
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
    addProduct(product).then((res) => setProducts([res, ...products]));
  }
  function adminDeleteProduct(productId: Product["id"]) {
    deleteProduct(productId);
    setProducts(products.filter((product) => product.id !== productId));
  }
  function adminEditProduct(productEdited: Product) {
    editProduct(productEdited);
    setProducts(
      products.map((product) =>
        product.id === productEdited.id ? productEdited : product
      )
    );
  }

  //USER
  function addItemToCart(product: Product) {
    const isOnCart = cart.find((item) => item.product.id === product.id);
    if (!isOnCart) setCart([...cart, { product, qty: 1 }]);
    else
      setCart(
        cart.map((productOncart) =>
          productOncart.product.id === product.id
            ? { ...productOncart, qty: productOncart.qty + 1 }
            : productOncart
        )
      );
  }
  function removeItemFromCart(product: CartProduct) {
    if (!product) return;
    if (product.qty > 1)
      setCart(
        cart.map((productOncart) =>
          product === productOncart
            ? { ...productOncart, qty: productOncart.qty - 1 }
            : productOncart
        )
      );

    if (product.qty === 1)
      setCart(
        cart.filter(
          (productOncart) => productOncart.product.id !== product.product.id
        )
      );
  }
  function onSearch(ToSearch: string) {
    if (!!ToSearch) {
      setProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(ToSearch.toLowerCase())
        )
      );
    }
    if (ToSearch.length === 1) {
      getAllProducts().then((res) => setProducts(res));
    }
  }
  function checkOut() {
    const order = {
      id: uuid(),
      buyed: cart,
      date: new Date(),
    };
    if (order.buyed.length > 0)
      addOrder(order).then((res) => setOrders([...orders, res]));

    clearCart();
  }
  function clearCart() {
    setCart([]);
  }

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        users,
        orders,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        checkOut,
        logIn,
        logOut,
        userLogged,
        adminPostProduct,
        adminDeleteProduct,
        adminEditProduct,
        onSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
