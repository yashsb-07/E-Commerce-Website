import "./ShopToolbar.css";

function ShopToolbar() {
  return (
    <div className="shop-toolbar">
      <input
        type="text"
        placeholder="Search products..."
        className="shop-search"
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