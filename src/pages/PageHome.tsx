import { useContext } from "react";
import { AppContext } from "../Context";
import { Box, Grid } from "@mui/joy";
import CardComp from "../components/Cards";
import srcImg from "../assets/NewBanner.png";

function PageHome() {
  const { products } = useContext(AppContext);

  if (!products) return <div>Loading...</div>;
  return (
    <>
      <Box
        sx={{
          height: "25rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
          width: "100%",
        }}
      ></Box>
      <Grid
        container
        spacing={2}
        rowSpacing={"none"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent={"space-evenly"}
      >
        {products.map((product) => (
          <CardComp key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
}

export default PageHome;
