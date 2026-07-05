import ProductBreadcrumb from "../components/product/ProductBreadcrumb/ProductBreadcrumb";
import ProductDetails from "../components/product/ProductDetails/ProductDetails";
import ProductDescription from "../components/product/ProductDescription/ProductDescription";
import RelatedProducts from "../components/product/RelatedProducts/RelatedProducts";

function ProductPage() {
  return (
    <>
      <ProductBreadcrumb />
      <ProductDetails />
      <ProductDescription />
      <RelatedProducts />
    </>
  );
}

export default ProductPage;