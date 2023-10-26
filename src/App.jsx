import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Promotion from "./pages/Promotion";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "./reducer/cartReducer";
import { TYPES } from "./actions/cartAction";

function App() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const {productos,cart}=state;


  const addToCart=(id)=>{
    console.log("addToCart");
   dispatch({type:TYPES.ADD_TO_CART,payload:id});
  }

  const deleteToCart=(id)=>{
    console.log(id)
    dispatch({type:TYPES.REMOVE_ITEM_FROM_CART,payload:id});
  }
  return (
      <div className="">
        <Routes>
          <Route path="/" element={<Home productos={productos.productos} categorias={productos.categorias} addToCart={addToCart}/>} />
          <Route path="/pages/Promotion" element={<Promotion />} />
          <Route path="/pages/Cart" element={<Cart cart={cart} deleteToCart={deleteToCart}/>} />

          <Route path="/pages/Category/:category" element={<Category  />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

