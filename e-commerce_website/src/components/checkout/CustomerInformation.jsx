import { useState } from "react";

const CustomerInformation = () => {
    const [customerInfo, setCustomerInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCustomerInfo((prevCustomerInfo) => ({
            ...prevCustomerInfo,
            [name]: value,
        }));
    };

    return (
        <div className="checkout-section">
            <div className="checkout-section-header">
                <h2>Customer Information</h2>

                <p>
                    Enter your contact details so we can keep you
                    updated about your order.
                </p>
            </div>

            <div className="checkout-form-grid">
                <div className="checkout-form-group">
                    <label htmlFor="firstName">
                        First Name
                    </label>

                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={customerInfo.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        autoComplete="given-name"
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="lastName">
                        Last Name
                    </label>

                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={customerInfo.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        autoComplete="family-name"
                    />
                </div>

                <div className="checkout-form-group checkout-form-group-full">
                    <label htmlFor="email">
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        autoComplete="email"
                    />
                </div>

                <div className="checkout-form-group checkout-form-group-full">
                    <label htmlFor="phone">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerInformation;