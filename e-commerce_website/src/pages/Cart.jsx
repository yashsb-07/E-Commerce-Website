import "../components/cart/Cart.css";

const Cart = () => {
    return (
        <section className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                <div className="cart-container">
                    <div className="cart-items">
                        {/* Cart items will be added in the next steps */}
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