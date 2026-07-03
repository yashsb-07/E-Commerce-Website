import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      {/* Categories */}
      <div className="filter-section">
        <h3>Categories</h3>

        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Accessories</li>
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