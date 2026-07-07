import "./RelatedProducts.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { products } from "../../../data/products";

function RelatedProducts() {

  const relatedProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="related-products">
      <div className="container">

        <div className="section-title">
          <h2>Related Products</h2>
          <p>You may also like these products</p>
        </div>

        <div className="related-products-grid">
          {relatedProducts.slice(0, 4).map((product) => (
            <ProductCard
              id={product.id} 
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

      </div>
    </section>
  );
}

export default RelatedProducts;