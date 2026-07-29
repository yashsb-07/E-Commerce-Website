import "./Navbar.css";

import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";

import { useCart } from "../../../hooks/useCart";
import { useWishlist } from "../../../hooks/useWishlist";

function Navbar() {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <nav className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">ShopEase</Link>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <FaSearch />

          {/* Wishlist */}
          <div className="wishlist-icon-wrapper">
            <Link
              to="/wishlist"
              aria-label={`Wishlist with ${wishlistCount} ${
                wishlistCount === 1 ? "product" : "products"
              }`}
            >
              <FaHeart />
            </Link>

            {wishlistCount > 0 && (
              <span className="wishlist-badge">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="cart-icon-wrapper">
            <Link
              to="/cart"
              aria-label={`Cart with ${totalItems} ${
                totalItems === 1 ? "item" : "items"
              }`}
            >
              <FaShoppingCart />
            </Link>

            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </div>

          <Link
            to="/profile"
            aria-label="Profile"
          >
            <FaUser />
          </Link>

          <FaBars className="menu-toggle" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;