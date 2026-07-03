import "./FilterSidebar.css";

const categories = [
  "All",
  "Men",
  "Women",
  "Electronics",
  "Shoes",
  "Accessories",
];

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
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
          <li>₹0 - ₹500</li>
          <li>₹500 - ₹1000</li>
          <li>₹1000+</li>
        </ul>
      </div>

    </aside>
  );
}

export default FilterSidebar;