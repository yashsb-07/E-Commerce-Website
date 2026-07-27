import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../common/Button/Button";

const DELIVERY_CHARGE = 49;

const CartSummary = () => {
    const navigate = useNavigate();

    const {
        totalItems,
        subtotal,
        clearCart,
    } = useCart();

    const totalAmount = subtotal + DELIVERY_CHARGE;

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-row">
                <span>Total Items</span>
                <span>{totalItems}</span>
            </div>

            <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="summary-row">
                <span>Delivery</span>
                <span>{formatPrice(DELIVERY_CHARGE)}</span>
            </div>

            <hr />

            <div className="summary-row summary-total">
                <span>Total</span>
                <span>{formatPrice(totalAmount)}</span>
            </div>

            <div className="summary-buttons">
                <Link to="/shop" className="summary-btn secondary-btn">
                    Continue Shopping
                </Link>

                <Button
                    text="Proceed to Checkout"
                    className="summary-btn primary-btn"
                    onClick={handleCheckout}
                />

                <Button
                    text="Clear Cart"
                    className="summary-btn danger-btn"
                    onClick={clearCart}
                />
            </div>
        </div>
    );
};

export default CartSummary;