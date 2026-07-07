import "./ProductDescription.css";
import { formatPrice } from "../../../utils/formatPrice";

function ProductDescription({ product }) {
  return (
    <section className="product-description-section">
      <div className="container">
        <div className="description-card">

          <h2>About {product.title}</h2>

          <p>
            {product.title} is one of our premium {product.category} products,
            designed to deliver high performance, reliability, and a premium
            user experience.
          </p>

          <h3>Key Features</h3>

          <ul>
            <li>Premium quality build</li>
            <li>Modern design and performance</li>
            <li>High durability</li>
            <li>Latest technology integration</li>
            <li>Trusted by thousands of customers</li>
          </ul>

          <h3>Specifications</h3>

          <div className="specs-grid">
            <div>
              <strong>Category:</strong> {product.category}
            </div>

            <div>
              <strong>Stock:</strong>{" "}
              {product.stock ? "Available" : "Out of Stock"}
            </div>

            <div>
              <strong>Rating:</strong> {product.rating}
            </div>

            <div>
              <strong>Reviews:</strong> {product.reviews}
            </div>

            <div>
              <strong>Price:</strong> {formatPrice(product.newPrice)}
            </div>

            <div>
              <strong>Discount:</strong> {product.discount}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDescription;