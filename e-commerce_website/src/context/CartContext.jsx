import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { CART_ACTIONS } from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: productId,
    });
  };

  const increaseQuantity = (productId) => {
    dispatch({
      type: CART_ACTIONS.INCREASE_QUANTITY,
      payload: productId,
    });
  };

  const decreaseQuantity = (productId) => {
    dispatch({
      type: CART_ACTIONS.DECREASE_QUANTITY,
      payload: productId,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  const isCartEmpty = cart.length === 0;

  const value = {
    cart,

    totalItems,
    subtotal,
    isCartEmpty,

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}