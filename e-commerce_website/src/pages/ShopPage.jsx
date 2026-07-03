import { useState } from "react";

import ShopHeader from "../components/shop/ShopHeader/ShopHeader";
import FilterSidebar from "../components/shop/FilterSidebar/FilterSidebar";
import ShopToolbar from "../components/shop/ShopToolbar/ShopToolbar";
import ProductGrid from "../components/shop/ProductGrid/ProductGrid";

import { featuredProducts, newArrivals } from "../data/products";

function ShopPage() {
  const allProducts = [...featuredProducts, ...newArrivals];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  let filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOption === "low-high") {
    filteredProducts.sort(
      (a, b) =>
        parseInt(a.newPrice.replace(/[₹,]/g, "")) -
        parseInt(b.newPrice.replace(/[₹,]/g, ""))
    );
  }

  if (sortOption === "high-low") {
    filteredProducts.sort(
      (a, b) =>
        parseInt(b.newPrice.replace(/[₹,]/g, "")) -
        parseInt(a.newPrice.replace(/[₹,]/g, ""))
    );
  }

  if (sortOption === "newest") {
    filteredProducts.sort((a, b) => b.id - a.id);
  }

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
              sortOption={sortOption}
              setSortOption={setSortOption}
            />

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;