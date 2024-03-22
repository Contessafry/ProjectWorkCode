import {
  Typography,
  IconButton,
  AspectRatio,
  CardContent,
  Button,
  Card,
} from "@mui/joy";
import {} from "react";
import { Product } from "../declaration";

interface Props {
  product: Product;
}

export default function CardComp({ product }: Props) {
  const { title, price, category, description, image } = product;
  return (
    <Card sx={{ width: 320 }}>
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
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={image}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Typography level="body-sm">{description}</Typography>

      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Cliccami
        </Button>
      </CardContent>
    </Card>
  );
}
