import "./ProductDetails.css";
import Button from "../../common/Button/Button";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState, useEffect } from "react";

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  useEffect(() => {
    setSelectedImage(product.images[0]);
  }, [product]);

  const rating = Math.floor(product.rating);
  const fullStars = rating;
  const emptyStars = 5 - fullStars;

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

          <p className="product-description">
            Premium product from our latest collection.
          </p>

          <div className="quantity-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

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