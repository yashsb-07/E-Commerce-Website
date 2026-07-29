export const WISHLIST_ACTIONS = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
  CLEAR_WISHLIST: "CLEAR_WISHLIST",
};

export function wishlistReducer(state, action) {
  switch (action.type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST: {
      const productExists = state.some(
        (item) => item.id === action.payload.id
      );

      if (productExists) {
        return state;
      }

      return [...state, action.payload];
    }

    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST:
      return state.filter(
        (item) => item.id !== action.payload
      );

    case WISHLIST_ACTIONS.CLEAR_WISHLIST:
      return [];

    default:
      return state;
  }
}