import { useContext } from "react";

import { AppContext } from "../Context";
import { Grid } from "@mui/joy";
import CardComp from "../components/Cards";

function PageHome() {
  const { products } = useContext(AppContext);

  if (!products) return <div>Loading...</div>;
  return (
    <Grid
      container
      spacing={3}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {products.map((product) => (
        <CardComp key={product.id} product={product} />
      ))}
    </Grid>
  );
}

export default PageHome;
