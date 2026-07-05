import "./ProductGrid.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";

function ProductGrid({ products }) {
  return (
    <>
      {/* Product Count */}
      <p className="product-count">
        Showing {products.length} product
        {products.length !== 1 ? "s" : ""}
      </p>

      {/* No Results */}
      {products.length === 0 ? (
        <div className="no-results">
          <h2>No products found</h2>
          <p>Try changing your search or filters.</p>
        </div>
      ) : (
        <div className="shop-products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              rating={product.rating}
              reviews={product.reviews}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              badge={product.badge}
              discount={product.discount}
              stock={product.stock}
            />
          ))}
        </div>

        
      )}

      <Pagination />
    </>
  );
}

export default ProductGrid;