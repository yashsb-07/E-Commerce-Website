import "./Cart.css";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/useCart";

const CartItem = ({ item }) => {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img
                    src={item.image}
                    alt={item.name}
                />
            </div>

            <div className="cart-item-details">
                <h3>{item.name}</h3>

                <p className="cart-item-newPrice">
                    {formatPrice(item.newPrice)}
                </p>

                <div className="cart-quantity">
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                    >
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() => increaseQuantity(item.id)}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="cart-item-actions">
                <p className="cart-item-subtotal">
                    Subtotal: {formatPrice(item.newPrice * item.quantity)}
                </p>

                <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;