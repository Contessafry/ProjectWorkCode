/*import { useParams } from "react-router";
;
import { useEffect, useState } from "react";
import { Product } from "../declaration";



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
  const { description, price, title, } =
    product;
  return (
    <>
      <NavBar />
      <div>
        <img src="" alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      
      </div>
    </>
  );
}

export default PageProduct;*/
