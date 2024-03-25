import { useParams } from "react-router";

import { useContext } from "react";
import { AppContext } from "../Context";

function PageProduct() {+
  const { productId } = useParams();
  const { products } = useContext(AppContext);
  const productFound = products.find((product) => product.id === productId);
  if (!productFound) {
    return <div>Loading</div>;
  }
  const { description, price, image, title } = productFound;
  return (
    <>
      <div>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </>
  );
}

export default PageProduct;
