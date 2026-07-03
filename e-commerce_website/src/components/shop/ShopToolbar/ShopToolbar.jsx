import "./ShopToolbar.css";

function ShopToolbar({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="shop-toolbar">
      <input
        type="text"
        placeholder="Search products..."
        className="shop-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select className="shop-sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)} >
        <option value="default">Default Sorting</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

export default ShopToolbar;