import "./FilterSidebar.css";

const categories = [
  "All",
  "Men",
  "Women",
  "Electronics",
  "Shoes",
  "Accessories",
];

const priceRanges = [
  { label: "All", value: "All" },
  { label: "₹0 - ₹500", value: "0-500" },
  { label: "₹500 - ₹1000", value: "500-1000" },
  { label: "₹1000+", value: "1000+" },
];

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
}) {
  return (
    <aside className="filter-sidebar">

      {/* Categories */}
      <div className="filter-section">
        <h3>Categories</h3>

        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={
                selectedCategory === category ? "active-filter" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="filter-section">
        <h3>Price</h3>

        <ul>
          {priceRanges.map((price) => (
            <li
              key={price.value}
              className={
                selectedPriceRange === price.value
                  ? "active-filter"
                  : ""
              }
              onClick={() =>
                setSelectedPriceRange(price.value)
              }
            >
              {price.label}
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}

export default FilterSidebar;