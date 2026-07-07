import "./ProductDetails.css";
import Button from "../../common/Button/Button";
import { formatPrice } from "../../../utils/formatPrice";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCart } from "../../../hooks/useCart";
import { CART_ACTIONS } from "../../../reducers/cartReducer";

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useCart();

  useEffect(() => {
    setSelectedImage(product.images[0]);
    setQuantity(1);
  }, [product]);

  const rating = Math.floor(product.rating);
  const fullStars = rating;
  const emptyStars = 5 - fullStars;

  const handleAddToCart = () => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <section className="product-details">
      <div className="container product-details-container">

        {/* Left Side */}
        <div className="product-image-section">

          {/* Main Image */}
          <div className="main-product-image">
            <img src={selectedImage} alt={product.title} />
          </div>

          {/* Thumbnails */}
          <div className="thumbnail-gallery">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                className={`thumbnail ${
                  selectedImage === img ? "active-thumbnail" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

        </div>

        {/* Right Side */}
        <div className="product-info-section">

          <p className="product-category">{product.category}</p>

          <h1 className="product-title">{product.title}</h1>

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

          <div className="product-price">
            <span className="new-price">{formatPrice(product.newPrice)}</span>

            {product.oldPrice && (
              <span className="old-price">{product.oldPrice && formatPrice(product.oldPrice)}</span>
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

          <p className="product-description">
            Premium product from our latest collection.
          </p>

          <div className="quantity-selector">

            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
            >
              +
            </button>

          </div>

          <div className="product-buttons">
            <Button text="Add to Cart" onClick={handleAddToCart} />
            <Button text="Buy Now" className="btn-outline" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetails;