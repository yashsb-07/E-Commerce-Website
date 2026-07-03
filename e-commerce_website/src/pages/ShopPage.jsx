import ShopHeader from "../components/shop/ShopHeader/ShopHeader";
import FilterSidebar from "../components/shop/FilterSidebar/FilterSidebar";
import ShopToolbar from "../components/shop/ShopToolbar/ShopToolbar";
import ProductGrid from "../components/shop/ProductGrid/ProductGrid";

function ShopPage() {
  return (
    <>
      <ShopHeader />

      <section className="shop-main">
        <div className="container shop-container">
          <FilterSidebar />

          <div className="shop-content">
            <ShopToolbar />
            <ProductGrid  />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;