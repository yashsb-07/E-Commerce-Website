import "./NewArrivals.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { newArrivals } from "../../../data/products";

function NewArrivals() {
  return (
    <section className="new-arrivals">
      <div className="container">

        <div className="section-title">
          <h2>New Arrivals</h2>
          <p>Checkout our latest products</p>
        </div>

        <div className="arrivals-grid">
          {newArrivals.map((product) => (
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

export default NewArrivals;