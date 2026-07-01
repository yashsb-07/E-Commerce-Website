import "./ProductCard.css";
import Button from "../Button/Button";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

function ProductCard({
  image,
  title,
  category,
  rating,
  reviews,
  newPrice,
  oldPrice,
  badge,
  discount,
  stock,
}) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="product-card">

      {/* Image Section */}
      <div className="product-img-container">

        {badge && (
          <span className={`badge ${badge.toLowerCase()}`}>
            {badge}
          </span>
        )}

        <button className="wishlist-btn">
          <FaHeart />
        </button>

        <img src={image} alt={title} className="product-img" />

        <div className="quick-actions">
          <button>
            <FaEye />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">

        <p className="product-category">{category}</p>

        <h3 className="product-name">{title}</h3>

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

          <span className="rating-value">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="new-price">{newPrice}</span>

          {oldPrice && (
            <span className="old-price">{oldPrice}</span>
          )}
        </div>

        {/* Discount */}
        {discount && (
          <p className="discount-text">{discount} OFF</p>
        )}

        {/* Stock */}
        <p
          className={`stock-status ${
            stock ? "in-stock" : "out-stock"
          }`}
        >
          {stock ? "In Stock" : "Out of Stock"}
        </p>

        <Button text="Add to Cart" className="add-cart-btn" />
      </div>
    </div>
  );
}

export default ProductCard;