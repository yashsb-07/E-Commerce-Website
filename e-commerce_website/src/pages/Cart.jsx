import "../components/cart/Cart.css";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
    return (
        <section className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                <div className="cart-container">
                    <div className="cart-items">
                        <CartItem />
                    </div>

                    <div className="cart-summary">
                        {/* Order summary will be added later */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;