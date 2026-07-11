import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <FaShoppingCart className="empty-cart-icon" />

            <h2>Your Cart is Empty</h2>

            <p>
                Looks like you haven't added any products yet.
            </p>

            <Link
                to="/shop"
                className="summary-btn primary-btn"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default EmptyCart;