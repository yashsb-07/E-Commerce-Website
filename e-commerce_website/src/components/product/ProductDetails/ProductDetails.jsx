import "./ProductDetails.css";
import Button from "../../common/Button/Button";
import { FaStar, FaRegStar } from "react-icons/fa";

function ProductDetails({ product }) {
  const rating = Math.floor(product.rating);
  const fullStars = rating;
  const emptyStars = 5 - fullStars;

  return (
    <section className="product-details">
      <div className="container product-details-container">

        {/* Left Side */}
        <div className="product-image-section">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Right Side */}
        <div className="product-info-section">

          <p className="product-category">{product.category}</p>

          <h1 className="product-title">
            {product.title}
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

            <span>
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="product-price">
            <span className="new-price">{product.newPrice}</span>

            {product.oldPrice && (
              <span className="old-price">{product.oldPrice}</span>
            )}
          </div>

          <p className="discount-text">
            {product.discount} OFF
          </p>

          <p
            className={`stock-status ${
              product.stock ? "in-stock" : "out-stock"
            }`}
          >
            {product.stock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Description */}
          <p className="product-description">
            Premium product from our latest collection.
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