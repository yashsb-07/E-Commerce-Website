import "../components/wishlist/Wishlist.css";

import ProductCard from "../components/common/ProductCard/ProductCard";

import { useWishlist } from "../hooks/useWishlist";

const Wishlist = () => {
  const {
    wishlist,
    wishlistCount,
  } = useWishlist();

  return (
    <section className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <div>
            <h1>Your Wishlist</h1>

            <p>
              Save your favorite products here and come back to
              them anytime.
            </p>
          </div>

          <span className="wishlist-count">
            {wishlistCount}{" "}
            {wishlistCount === 1 ? "product" : "products"}
          </span>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
};

export default Wishlist;