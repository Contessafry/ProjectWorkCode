import { useEffect, useState } from "react";

import "./App.css";
import { getAllProducts } from "./APIcalls";
import { Product } from "./declaration";

function App() {
  const { products, setProducts } = useState<Product[] | []>([]);
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  return <div>{products}</div>;
}

export default App;
