import { useState } from "react";

const ShippingInformation = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        apartment: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setShippingInfo((prevShippingInfo) => ({
            ...prevShippingInfo,
            [name]: value,
        }));
    };

    return (
        <div className="checkout-section">
            <div className="checkout-section-header">
                <h2>Shipping Information</h2>

                <p>
                    Enter the address where you would like your
                    order to be delivered.
                </p>
            </div>

            <div className="checkout-form-grid">
                <div className="checkout-form-group checkout-form-group-full">
                    <label htmlFor="address">
                        Address
                    </label>

                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleChange}
                        placeholder="Enter your street address"
                        autoComplete="street-address"
                    />
                </div>

                <div className="checkout-form-group checkout-form-group-full">
                    <label htmlFor="apartment">
                        Apartment, Suite, etc.{" "}
                        <span className="optional-label">
                            (Optional)
                        </span>
                    </label>

                    <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={shippingInfo.apartment}
                        onChange={handleChange}
                        placeholder="Apartment, suite, unit, etc."
                        autoComplete="address-line2"
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="city">
                        City
                    </label>

                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        autoComplete="address-level2"
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="state">
                        State
                    </label>

                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleChange}
                        placeholder="Enter your state"
                        autoComplete="address-level1"
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="postalCode">
                        Postal Code
                    </label>

                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleChange}
                        placeholder="Enter postal code"
                        autoComplete="postal-code"
                        inputMode="numeric"
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="country">
                        Country
                    </label>

                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleChange}
                        placeholder="Enter your country"
                        autoComplete="country-name"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShippingInformation;