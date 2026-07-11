import "./Cart.css";
import { formatPrice } from "../../utils/formatPrice";

const CartItem = ({ item }) => {
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
                    <button>-</button>

                    <span>{item.quantity}</span>

                    <button>+</button>
                </div>
            </div>

            <div className="cart-item-actions">
                <p className="cart-item-subtotal">
                    Subtotal: {formatPrice(item.newPrice * item.quantity)}
                </p>

                <button className="remove-btn">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;