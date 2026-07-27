const CustomerInformation = ({
    customerInfo,
    errors,
    onChange,
}) => {
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
                        onChange={onChange}
                        placeholder="Enter your first name"
                        autoComplete="given-name"
                        className={errors.firstName ? "input-error" : ""}
                        aria-invalid={Boolean(errors.firstName)}
                        aria-describedby={
                            errors.firstName
                                ? "firstName-error"
                                : undefined
                        }
                    />

                    {errors.firstName && (
                        <p
                            className="checkout-error"
                            id="firstName-error"
                        >
                            {errors.firstName}
                        </p>
                    )}
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
                        onChange={onChange}
                        placeholder="Enter your last name"
                        autoComplete="family-name"
                        className={errors.lastName ? "input-error" : ""}
                        aria-invalid={Boolean(errors.lastName)}
                        aria-describedby={
                            errors.lastName
                                ? "lastName-error"
                                : undefined
                        }
                    />

                    {errors.lastName && (
                        <p
                            className="checkout-error"
                            id="lastName-error"
                        >
                            {errors.lastName}
                        </p>
                    )}
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
                        onChange={onChange}
                        placeholder="Enter your email address"
                        autoComplete="email"
                        className={errors.email ? "input-error" : ""}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                            errors.email
                                ? "email-error"
                                : undefined
                        }
                    />

                    {errors.email && (
                        <p
                            className="checkout-error"
                            id="email-error"
                        >
                            {errors.email}
                        </p>
                    )}
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
                        onChange={onChange}
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        className={errors.phone ? "input-error" : ""}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                            errors.phone
                                ? "phone-error"
                                : undefined
                        }
                    />

                    {errors.phone && (
                        <p
                            className="checkout-error"
                            id="phone-error"
                        >
                            {errors.phone}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomerInformation;