import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const value = {
    cart,
    dispatch,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}