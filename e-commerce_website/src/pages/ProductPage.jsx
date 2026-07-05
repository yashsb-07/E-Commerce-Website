import { useParams } from "react-router-dom";

import ProductBreadcrumb from "../components/product/ProductBreadcrumb/ProductBreadcrumb";
import ProductDetails from "../components/product/ProductDetails/ProductDetails";
import ProductDescription from "../components/product/ProductDescription/ProductDescription";
import RelatedProducts from "../components/product/RelatedProducts/RelatedProducts";

import { featuredProducts, newArrivals } from "../data/products";

function ProductPage() {
  const { id } = useParams();

  const allProducts = [...featuredProducts, ...newArrivals];

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <ProductBreadcrumb product={product} />
      <ProductDetails product={product} />
      <ProductDescription product={product} />
      <RelatedProducts />
    </>
  );
}

export default ProductPage;