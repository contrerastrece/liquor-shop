import { TYPES } from "../actions/cartAction";
import data from "../data/data.json";

export const cartInitialState = {
  productos: data,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.productos.find(
        (producto) => producto.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      // localStorage.setItem("cart", JSON.stringify(itemInCart));

      const newState = itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
      // Guarda el estado en localStorage
      localStorage.setItem("cart", JSON.stringify(newState.cart));

      return newState;
    }

    case TYPES.REMOVE_ITEM_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      const newState= itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
          // Guarda el estado actualizado en localStorage
  localStorage.setItem('cart', JSON.stringify(newState.cart));


      return newState;
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_FROM_CART: {
    }
    default:
      return state;
  }
};
