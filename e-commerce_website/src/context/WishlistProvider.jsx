import { useReducer } from "react";

import { WishlistContext } from "./WishlistContext";
import {
  wishlistReducer,
  WISHLIST_ACTIONS,
} from "../reducers/wishlistReducer";

export function WishlistProvider({ children }) {
  const [wishlist, dispatch] = useReducer(
    wishlistReducer,
    []
  );

  const addToWishlist = (product) => {
    dispatch({
      type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
      payload: product,
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({
      type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST,
      payload: productId,
    });
  };

  const toggleWishlist = (product) => {
    const isWishlisted = wishlist.some(
      (item) => item.id === product.id
    );

    if (isWishlisted) {
      removeFromWishlist(product.id);
      return;
    }

    addToWishlist(product);
  };

  const clearWishlist = () => {
    dispatch({
      type: WISHLIST_ACTIONS.CLEAR_WISHLIST,
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(
      (item) => item.id === productId
    );
  };

  const wishlistCount = wishlist.length;

  const isWishlistEmpty = wishlist.length === 0;

  const value = {
    wishlist,

    wishlistCount,
    isWishlistEmpty,

    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}