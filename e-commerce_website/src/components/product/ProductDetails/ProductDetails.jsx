import "./ProductDetails.css";
import Button from "../../common/Button/Button";
import { FaStar, FaRegStar } from "react-icons/fa";

function ProductDetails() {
  const rating = 4;
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <section className="product-details">
      <div className="container product-details-container">

        {/* Left Side */}
        <div className="product-image-section">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Product"
          />
        </div>

        {/* Right Side */}
        <div className="product-info-section">

          <p className="product-category">Electronics</p>

          <h1 className="product-title">
            Apple iPhone 17 Pro Max (Cosmic Orange, 512GB)
          </h1>

          {/* Rating */}
          <div className="product-rating">
            <div className="stars">
              {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} />
              ))}

              {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} />
              ))}
            </div>

            <span>4.0 (1245 reviews)</span>
          </div>

          {/* Price */}
          <div className="product-price">
            <span className="new-price">₹1,39,599</span>
            <span className="old-price">₹1,67,999</span>
          </div>

          <p className="discount-text">17% OFF</p>

          <p className="stock-status in-stock">In Stock</p>

          {/* Description */}
          <p className="product-description">
            Experience the latest Apple flagship with stunning performance,
            premium build quality, and an advanced camera system.
          </p>

          {/* Quantity */}
          <div className="quantity-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          {/* Buttons */}
          <div className="product-buttons">
            <Button text="Add to Cart" />
            <Button text="Buy Now" className="btn-outline" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetails;