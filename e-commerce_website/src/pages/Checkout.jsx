import "../components/checkout/Checkout.css";

const Checkout = () => {
    return (
        <section className="checkout-page">
            <div className="container">
                <div className="checkout-header">
                    <h1>Checkout</h1>

                    <p>
                        Complete your information and review your order.
                    </p>
                </div>

                <div className="checkout-container">
                    <div className="checkout-main">
                        <h2>Checkout Information</h2>

                        <p>
                            Customer information will be added here.
                        </p>
                    </div>

                    <aside className="checkout-summary">
                        <h2>Order Summary</h2>

                        <p>
                            Your order details will be added here.
                        </p>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Checkout;