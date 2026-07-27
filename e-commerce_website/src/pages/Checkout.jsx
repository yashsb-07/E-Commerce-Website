import { useState } from "react";

import CustomerInformation from "../components/checkout/CustomerInformation";
import ShippingInformation from "../components/checkout/ShippingInformation";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";

import "../components/checkout/Checkout.css";

const initialCustomerInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
};

const initialShippingInfo = {
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
};

const Checkout = () => {
    const [customerInfo, setCustomerInfo] = useState(
        initialCustomerInfo
    );

    const [shippingInfo, setShippingInfo] = useState(
        initialShippingInfo
    );

    const [errors, setErrors] = useState({});

    const handleCustomerChange = (event) => {
        const { name, value } = event.target;

        setCustomerInfo((prevCustomerInfo) => ({
            ...prevCustomerInfo,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleShippingChange = (event) => {
        const { name, value } = event.target;

        setShippingInfo((prevShippingInfo) => ({
            ...prevShippingInfo,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validateCheckout = () => {
        const newErrors = {};

        if (!customerInfo.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }

        if (!customerInfo.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        if (!customerInfo.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)
        ) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        if (!customerInfo.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (
            !/^\+?[0-9\s-]{10,15}$/.test(customerInfo.phone)
        ) {
            newErrors.phone =
                "Please enter a valid phone number.";
        }

        if (!shippingInfo.address.trim()) {
            newErrors.address = "Address is required.";
        }

        if (!shippingInfo.city.trim()) {
            newErrors.city = "City is required.";
        }

        if (!shippingInfo.state.trim()) {
            newErrors.state = "State is required.";
        }

        if (!shippingInfo.postalCode.trim()) {
            newErrors.postalCode = "Postal code is required.";
        } else if (
            !/^[A-Za-z0-9\s-]{3,10}$/.test(
                shippingInfo.postalCode
            )
        ) {
            newErrors.postalCode =
                "Please enter a valid postal code.";
        }

        if (!shippingInfo.country.trim()) {
            newErrors.country = "Country is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validateCheckout();

        if (!isValid) {
            return;
        }

        console.log("Checkout form is valid.");
    };

    return (
        <section className="checkout-page">
            <div className="container">
                <div className="checkout-header">
                    <h1>Checkout</h1>

                    <p>
                        Complete your information and review your order.
                    </p>
                </div>

                <form
                    className="checkout-container"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className="checkout-main">
                        <CustomerInformation
                            customerInfo={customerInfo}
                            errors={errors}
                            onChange={handleCustomerChange}
                        />

                        <ShippingInformation
                            shippingInfo={shippingInfo}
                            errors={errors}
                            onChange={handleShippingChange}
                        />
                    </div>

                    <aside className="checkout-summary">
                        <CheckoutOrderSummary />

                        <button
                            type="submit"
                            className="checkout-place-order-btn"
                        >
                            Place Order
                        </button>
                    </aside>
                </form>
            </div>
        </section>
    );
};

export default Checkout;