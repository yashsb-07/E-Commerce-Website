import ProductBreadcrumb from "../components/product/ProductBreadcrumb/ProductBreadcrumb";
import ProductDetails from "../components/product/ProductDetails/ProductDetails";
import ProductDescription from "../components/product/ProductDescription/ProductDescription";

function ProductPage() {
  return (
    <>
      <ProductBreadcrumb />
      <ProductDetails />
      <ProductDescription />
    </>
  );
}

export default ProductPage;