import { TYPES } from "../actions/cartAction";
import data from "../data/data.json";

export const cartInitialState = {
  productos: data,
  cart: [],
  total:0,
};

export const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.productos.find(
        (producto) => producto.id === action.payload
      );
      console.log(newItem);

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    case TYPES.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((producto) => producto.id !== action.payload)
      }
      
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_FROM_CART: {
    }
    default:
      return state;
  }
};
