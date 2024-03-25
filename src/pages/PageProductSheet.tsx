/*import { useParams } from "react-router";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getProductDetails } from "../services/APIcalls";
import { Product } from "../declaretion";

function PageProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      getProductDetails(productId).then((product) => {
        console.log(product);
        setProduct(product);
      });
    }
  }, [productId]);
  if (!product) {
    return <div>Loading</div>;
  }
  const { description, price, previewUrl, title, productVariantOptions } =
    product;
  return (
    <>
      <NavBar />
      <div>
        <img src={previewUrl} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{!!productVariantOptions[0] && productVariantOptions[0].values}</p>
        <p>{!!productVariantOptions[1] && productVariantOptions[1].values}</p>
      </div>
    </>
  );
}

export default PageProduct;*/
