import { useContext } from "react";
import "./App.css";
import { AppContext } from "./Context";
import CardComp from "./components/Cards";
import { Grid } from "@mui/joy";

function App() {
  const products = useContext(AppContext);

  if (!products) return <div>Loading...</div>;
  return (
    <Grid
      container
      spacing={3}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {products.products.map((product) => (
        <CardComp key={product.id} product={product} />
      ))}
    </Grid>
  );
}

export default App;
