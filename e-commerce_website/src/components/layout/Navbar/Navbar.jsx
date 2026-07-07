import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useCart } from "../../../hooks/useCart";

function Navbar() {

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">ShopEase</Link>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <FaSearch />
          <div className="cart-icon-wrapper">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>

            {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
          </div>
          <Link to="/profile"><FaUser /></Link>
          <FaBars className="menu-toggle" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;