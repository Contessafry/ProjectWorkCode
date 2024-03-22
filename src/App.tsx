import { useContext } from "react";

import "./App.css";
import { AppContext } from "./Context";

function App() {
  const { products } = useContext(AppContext);

  if (!products) return <div>Loading...</div>;
  return (
    <div>
      {products.map(({ title, image }) => (
        <div>
          <img src={image}></img> <h1>{title}</h1>{" "}
        </div>
      ))}
    </div>
  );
}

export default App;
