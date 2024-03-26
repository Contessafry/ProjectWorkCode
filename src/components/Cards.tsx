import {
  Typography,
  IconButton,
  AspectRatio,
  CardContent,
  Button,
  Card,
} from "@mui/joy";
import { useContext } from "react";
import { Product } from "../declaration";
import { AppContext } from "../Context";
import EditModal from "./EditModal";
import { NavLink } from "react-router-dom";

interface Props {
  product: Product;
}

export default function CardComp({ product }: Props) {
  const { userLogged, adminDeleteProduct, addItemToCart } =
    useContext(AppContext);
  const { title, price, category, image } = product;

  return (
    <Card size="md" sx={{ width: 320, margin: "1em" }}>
      <NavLink to={`/products/${product.id}`}>
        <AspectRatio minHeight="120px" maxHeight="300px">
          <img
            //  style={}
            //srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            src={image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>

        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{category}</Typography>
      </NavLink>

      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
      ></IconButton>

      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {price}€
          </Typography>
        </div>

        {!!userLogged ? (
          userLogged.isAdmin ? (
            <>
              <EditModal product={product} />

              <Button
                variant="solid"
                size="md"
                aria-label="Delete product"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                color="danger"
                onClick={() => adminDeleteProduct(product.id)}
              >
                Delete
              </Button>
            </>
          ) : (
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Buy product"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              onClick={() => addItemToCart(product)}
            >
              Buy
            </Button>
          )
        ) : (
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Buy product"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            onClick={() => alert("Per favore, effettua il login")}
          >
            Buy
          </Button>
        )}
      </CardContent>
      {/* <Snackbar
        autoHideDuration={3000}
        open={open}
        variant={variant}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpen(false);
        }}
      >
        {product.title} added to cart
      </Snackbar> */}
    </Card>
  );
}
