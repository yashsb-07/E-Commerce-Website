import "../components/cart/Cart.css";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";


    const Cart = () => {
    const { cart, isCartEmpty } = useCart();

    return (
        <section className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                {isCartEmpty ? (
                    <EmptyCart />
                ) : (

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
                            <CartSummary />
                        </div>
                    </div>

                )}
            </div>
        </section>
    );
};

export default Cart;