export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
        const product = action.payload;

        // Check if product already exists
        const existingProduct = state.find(
            (item) => item.id === product.id
        );

        // If product exists, increase quantity
        if (existingProduct) {
            return state.map((item) =>
            item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
            );
        }

        // Otherwise add new product
        return [
            ...state,
            {
            ...product,
            quantity: 1,
            },
        ];
        }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productId = action.payload;

      return state.filter(
        (item) => item.id !== productId
      );
    }

    case CART_ACTIONS.INCREASE_QUANTITY:
      return state;

    case CART_ACTIONS.DECREASE_QUANTITY:
      return state;

    case CART_ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
}