import "./FeaturedProducts.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { products } from "../../../data/products";

function FeaturedProducts() {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="featured-products">
      <div className="container">

        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Check out our most popular products</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
              reviews={product.reviews}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              badge={product.badge}
              discount={product.discount}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;