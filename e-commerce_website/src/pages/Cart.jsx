import "../components/cart/Cart.css";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";

const Cart = () => {
    const { cart } = useCart();

    return (
        <section className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                <div className="cart-container">
                    <div className="cart-items">
                        {cart.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>

                    <div className="cart-summary">
                        {/* Order Summary will be built later */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;