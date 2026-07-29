import "./ProductCard.css";

import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import Button from "../Button/Button";

import { formatPrice } from "../../../utils/formatPrice";
import { useWishlist } from "../../../hooks/useWishlist";

function ProductCard({
  id,
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
  const navigate = useNavigate();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const isWishlisted = isInWishlist(id);

  const product = {
    id,
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
  };

  const handleWishlistClick = (event) => {
    event.stopPropagation();

    toggleWishlist(product);
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/shop/product/${id}`)}
    >
      {/* Image Section */}
      <div className="product-img-container">
        {badge && (
          <span className={`badge ${badge.toLowerCase()}`}>
            {badge}
          </span>
        )}

        <button
          type="button"
          className={`wishlist-btn ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={handleWishlistClick}
          aria-label={
            isWishlisted
              ? `Remove ${title} from wishlist`
              : `Add ${title} to wishlist`
          }
          aria-pressed={isWishlisted}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>

        <img
          src={image}
          alt={title}
          className="product-img"
        />

        <div className="quick-actions">
          <button
            type="button"
            aria-label={`Quick view ${title}`}
          >
            <FaEye />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <p className="product-category">
          {category}
        </p>

        <h3 className="product-name">
          {title}
        </h3>

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
          <span className="new-price">
            {formatPrice(newPrice)}
          </span>

          {oldPrice && (
            <span className="old-price">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>

        {/* Discount */}
        {discount && (
          <p className="discount-text">
            {discount} OFF
          </p>
        )}

        {/* Stock */}
        <p
          className={`stock-status ${
            stock ? "in-stock" : "out-stock"
          }`}
        >
          {stock ? "In Stock" : "Out of Stock"}
        </p>

        <Button
          text="Add to Cart"
          className="add-cart-btn"
        />
      </div>
    </div>
  );
}

export default ProductCard;