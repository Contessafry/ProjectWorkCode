import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { AppContext } from "../Context";
import { Box, Typography, Grid, styled, Button } from "@mui/joy";

const StyledImage = styled("img")({
  maxWidth: "500px",
  height: "100%",
  marginLeft: "-400px",
});

const StyledTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "38px",
  color: "#185EA5",
});

const StyledDescription = styled(Typography)({
  fontSize: "20px",
});

const StyledPrice = styled(Typography)({
  fontWeight: "bold",
  marginTop: "50px",
  fontSize: "28px",
});

function PageProduct() {
  const { productId } = useParams();
  const { products, addItemToCart } = useContext(AppContext);
  const productFound = products.find((product) => product.id === productId);

  if (!productFound) {
    return <div>Loading</div>;
  }

  const { description, price, image, title } = productFound;

  return (
    <Box
      my={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={4}
      p={2}
      sx={{
        border: "2px solid transparent",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Roboto",
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <StyledImage src={image} alt={title} />{" "}
        </Grid>
        <Grid item xs={12} sm={8}>
          <StyledTitle variant="h1">{title}</StyledTitle>{" "}
          <StyledDescription>{description}</StyledDescription>
          <StyledPrice>{price}€</StyledPrice>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Buy product"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            onClick={() => addItemToCart(productFound)}
          >
            Buy
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PageProduct;
