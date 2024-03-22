import { useContext } from "react";
import "./App.css";
import { AppContext } from "./Context";
import CardComp from "./components/Cards";

function App() {
  const products = useContext(AppContext);

  if (!products) return <div>Loading...</div>;
  return (
    <>
      {products.products.map((product) => (
        <CardComp key={product.id} product={product} />
      ))}
    </>
  );
}

export default App;
