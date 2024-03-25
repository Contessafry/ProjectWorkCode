import {} from "react";
import { Product } from "../declaration";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  const { title, price, category, description, image } = product;
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{price}</h3>
      <h4>{category}</h4>

      <Card
        color="neutral"
        invertedColors={false}
        orientation="vertical"
        size="md"
        variant="soft"
      />
    </div>
  );
}
