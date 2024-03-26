import {
  Typography,
  IconButton,
  AspectRatio,
  CardContent,
  Button,
  Card,
  CardOverflow,
  Snackbar,
} from "@mui/joy";
import { useContext, useState } from "react";
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
  const [snackOpen, setSnackOpen] = useState(false);
  return (
    <Card size="md" sx={{ width: 360, margin: "1em" }}>
      <NavLink to={`/products/${product.id}`}>
        {/* <AspectRatio minHeight="80px" maxHeight="300px"> */}
        <div
          style={{
            overflow: "hidden",
            height: "200px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <img
            //  style={}
            //srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            src={image}
            loading="lazy"
            alt=""
            width={"50%"}
            style={{ margin: "0 auto" }}
          />
        </div>
        {/* </AspectRatio> */}

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
              onClick={() => {
                addItemToCart(product);
                setSnackOpen(true);
              }}
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
      <Snackbar
        autoHideDuration={2000}
        open={snackOpen}
        color="success"
        onClose={(e, reason) => {
          e;
          if (reason === "clickaway") {
            return;
          }
          setSnackOpen(false);
        }}
      >
        <> {product.title} added to cart</>
      </Snackbar>
    </Card>
  );
}
