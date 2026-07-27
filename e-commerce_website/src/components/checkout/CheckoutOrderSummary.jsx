import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

const DELIVERY_CHARGE = 50;

const CheckoutOrderSummary = () => {
    const {
        cart,
        totalItems,
        subtotal,
    } = useCart();

    const totalAmount = subtotal + DELIVERY_CHARGE;

    return (
        <div className="checkout-order-summary">
            <div className="checkout-summary-header">
                <h2>Order Summary</h2>

                <span>
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
            </div>

            <div className="checkout-summary-items">
                {cart.map((item) => (
                    <div
                        className="checkout-summary-item"
                        key={item.id}
                    >
                        <div className="checkout-summary-image">
                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <span className="checkout-summary-quantity">
                                {item.quantity}
                            </span>
                        </div>

                        <div className="checkout-summary-item-details">
                            <h3>{item.name}</h3>

                            <p>
                                Qty: {item.quantity}
                            </p>
                        </div>

                        <p className="checkout-summary-item-price">
                            {formatPrice(
                                item.newPrice * item.quantity
                            )}
                        </p>
                    </div>
                ))}
            </div>

            <div className="checkout-summary-totals">
                <div className="checkout-summary-row">
                    <span>Items</span>
                    <span>{totalItems}</span>
                </div>

                <div className="checkout-summary-row">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="checkout-summary-row">
                    <span>Delivery</span>
                    <span>{formatPrice(DELIVERY_CHARGE)}</span>
                </div>

                <div className="checkout-summary-row checkout-summary-total">
                    <span>Total</span>
                    <span>{formatPrice(totalAmount)}</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutOrderSummary;