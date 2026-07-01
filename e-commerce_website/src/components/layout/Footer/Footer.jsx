import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Company Info */}
          <div className="footer-col">
            <h2 className="footer-logo">ShopEase</h2>
            <p>
              Your one-stop shop for the latest fashion, electronics, and
              accessories. We provide high-quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/shop">Men</Link></li>
              <li><Link to="/shop">Women</Link></li>
              <li><Link to="/shop">Electronics</Link></li>
              <li><Link to="/shop">Shoes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Email: support@shopease.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Pune, India</p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 ShopEase. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;