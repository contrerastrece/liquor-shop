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
    case TYPES.INCREMENT_ITEM: {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case TYPES.DECREMENT_ITEM: {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.productos.find(
        (producto) => producto.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

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
      const itemId = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== itemId);
      const newState = {
        ...state,
        cart: updatedCart,
      };
      // Guarda el estado actualizado en localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return newState;
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
    }

    default:
      return state;
  }
};
