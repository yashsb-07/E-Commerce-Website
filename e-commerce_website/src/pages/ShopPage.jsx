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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  let filteredProducts = allProducts.filter((product) => {
    const productPrice = parseInt(
      product.newPrice.replace(/[₹,]/g, "")
    );

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    let matchesPrice = true;

    if (selectedPriceRange === "0-500") {
      matchesPrice = productPrice >= 0 && productPrice <= 500;
    }

    if (selectedPriceRange === "500-1000") {
      matchesPrice = productPrice > 500 && productPrice <= 1000;
    }

    if (selectedPriceRange === "1000+") {
      matchesPrice = productPrice > 1000;
    }

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

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
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
          />

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