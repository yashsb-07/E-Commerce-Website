import "./Cart.css";

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img
                    src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg"
                    alt="Product"
                />
            </div>

            <div className="cart-item-details">
                <h3>Sample Product</h3>

                <p className="cart-item-price">$99.99</p>

                <div className="cart-quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>

            <div className="cart-item-actions">
                <p className="cart-item-subtotal">
                    Subtotal: $99.99
                </p>

                <button className="remove-btn">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;