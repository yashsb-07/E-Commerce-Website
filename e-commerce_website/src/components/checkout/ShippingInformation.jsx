const ShippingInformation = ({
    shippingInfo,
    errors,
    onChange,
}) => {
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
                        onChange={onChange}
                        placeholder="Enter your street address"
                        autoComplete="street-address"
                        className={errors.address ? "input-error" : ""}
                        aria-invalid={Boolean(errors.address)}
                        aria-describedby={
                            errors.address
                                ? "address-error"
                                : undefined
                        }
                    />

                    {errors.address && (
                        <p
                            className="checkout-error"
                            id="address-error"
                        >
                            {errors.address}
                        </p>
                    )}
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
                        onChange={onChange}
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
                        onChange={onChange}
                        placeholder="Enter your city"
                        autoComplete="address-level2"
                        className={errors.city ? "input-error" : ""}
                        aria-invalid={Boolean(errors.city)}
                        aria-describedby={
                            errors.city
                                ? "city-error"
                                : undefined
                        }
                    />

                    {errors.city && (
                        <p
                            className="checkout-error"
                            id="city-error"
                        >
                            {errors.city}
                        </p>
                    )}
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
                        onChange={onChange}
                        placeholder="Enter your state"
                        autoComplete="address-level1"
                        className={errors.state ? "input-error" : ""}
                        aria-invalid={Boolean(errors.state)}
                        aria-describedby={
                            errors.state
                                ? "state-error"
                                : undefined
                        }
                    />

                    {errors.state && (
                        <p
                            className="checkout-error"
                            id="state-error"
                        >
                            {errors.state}
                        </p>
                    )}
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
                        onChange={onChange}
                        placeholder="Enter postal code"
                        autoComplete="postal-code"
                        inputMode="numeric"
                        className={errors.postalCode ? "input-error" : ""}
                        aria-invalid={Boolean(errors.postalCode)}
                        aria-describedby={
                            errors.postalCode
                                ? "postalCode-error"
                                : undefined
                        }
                    />

                    {errors.postalCode && (
                        <p
                            className="checkout-error"
                            id="postalCode-error"
                        >
                            {errors.postalCode}
                        </p>
                    )}
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
                        onChange={onChange}
                        placeholder="Enter your country"
                        autoComplete="country-name"
                        className={errors.country ? "input-error" : ""}
                        aria-invalid={Boolean(errors.country)}
                        aria-describedby={
                            errors.country
                                ? "country-error"
                                : undefined
                        }
                    />

                    {errors.country && (
                        <p
                            className="checkout-error"
                            id="country-error"
                        >
                            {errors.country}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShippingInformation;