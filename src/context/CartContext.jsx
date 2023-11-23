import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducer/cartReducer";
import { TYPES } from "../actions/cartAction";

export const CartContext=createContext();

const CartContextProvider=({children})=>{
 
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  
  const {productos,cart}=state;
  const increment=(id)=>{
    dispatch({type: TYPES.INCREMENT_ITEM,payload: id});
  }
  const decrement=(id)=>{
    dispatch({type: TYPES.DECREMENT_ITEM ,payload: id});
  }
  const addToCart=(id)=>{
    // console.log("addToCart");
   dispatch({type:TYPES.ADD_TO_CART,payload:id});
  }

  const deleteToCart=(id)=>{
    console.log(id)
    dispatch({type:TYPES.REMOVE_ITEM_FROM_CART,payload:id});
  }
  


const data={addToCart,deleteToCart,productos,cart,dispatch,increment, decrement};

return (
    <CartContext.Provider value ={data}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;