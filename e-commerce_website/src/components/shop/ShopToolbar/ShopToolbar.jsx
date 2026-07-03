import "./ShopToolbar.css";

function ShopToolbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="shop-toolbar">
      <input
        type="text"
        placeholder="Search products..."
        className="shop-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select className="shop-sort">
        <option>Default Sorting</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
      </select>
    </div>
  );
}

export default ShopToolbar;