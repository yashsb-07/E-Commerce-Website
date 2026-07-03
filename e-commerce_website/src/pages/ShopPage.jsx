import { useState } from "react";

import ShopHeader from "../components/shop/ShopHeader/ShopHeader";
import FilterSidebar from "../components/shop/FilterSidebar/FilterSidebar";
import ShopToolbar from "../components/shop/ShopToolbar/ShopToolbar";
import ProductGrid from "../components/shop/ProductGrid/ProductGrid";

import { featuredProducts, newArrivals } from "../data/products";

function ShopPage() {
  const allProducts = [...featuredProducts, ...newArrivals];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ShopHeader />

      <section className="shop-main">
        <div className="container shop-container">
          <FilterSidebar />

          <div className="shop-content">
            <ShopToolbar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;