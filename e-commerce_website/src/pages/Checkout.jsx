import CustomerInformation from "../components/checkout/CustomerInformation";
import ShippingInformation from "../components/checkout/ShippingInformation";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";
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
                        <CustomerInformation />

                        <ShippingInformation />
                    </div>

                    <aside className="checkout-summary">
                        <CheckoutOrderSummary />
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Checkout;