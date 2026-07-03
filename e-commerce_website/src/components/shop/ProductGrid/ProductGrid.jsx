import "./ProductGrid.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { featuredProducts, newArrivals } from "../../../data/products";

function ProductGrid() {
  const allProducts = [...featuredProducts, ...newArrivals];

  return (
    <div className="shop-products-grid">
      {allProducts.map((product) => (
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