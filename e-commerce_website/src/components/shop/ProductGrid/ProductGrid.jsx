import "./ProductGrid.css";
import ProductCard from "../../common/ProductCard/ProductCard";

function ProductGrid({ products }) {
  return (
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
  );
}

export default ProductGrid;