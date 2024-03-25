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

interface Props {
  product: Product;
}

export default function CardComp({ product }: Props) {
  const { userLogged, adminDeleteProduct } = useContext(AppContext);
  const { title, price, category, image } = product;
  return (
    <Card size="md" sx={{ width: 320, margin: "1em" }}>
      <AspectRatio minHeight="120px" maxHeight="300px">
        <img
          src={image}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{category}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        ></IconButton>
      </div>

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
          >
            Buy
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
