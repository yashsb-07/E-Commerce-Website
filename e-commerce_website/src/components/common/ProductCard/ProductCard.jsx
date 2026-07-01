import "./ProductCard.css";
import Button from "../Button/Button";
import { FaHeart, FaStar } from "react-icons/fa";

function ProductCard({
  image,
  title,
  rating,
  reviews,
  newPrice,
  oldPrice,
  badge,
  discount,
}) {
  return (
    <div className="product-card">
      <div className="product-img-container">

        {badge && <span className="badge">{badge}</span>}

        <div className="wishlist">
          <FaHeart />
        </div>

        <img src={image} alt={title} className="product-img" />
      </div>

      <div className="product-info">

        <h3 className="product-name">{title}</h3>

        <div className="product-rating">
          <FaStar />
          <span>{rating}</span>
          <small>({reviews})</small>
        </div>

        <div className="product-price">
          <span className="new-price">{newPrice}</span>
          <span className="old-price">{oldPrice}</span>
        </div>

        <div className="discount-text">{discount} OFF</div>

        <Button text="Add to Cart" className="add-cart-btn" />
      </div>
    </div>
  );
}

export default ProductCard;