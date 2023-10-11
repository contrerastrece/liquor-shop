import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Promotion from "./pages/Promotion";
import Category from "./pages/Category";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Promotion" element={<Promotion />} />
          <Route path="/pages/Cart" element={<Cart />} />
          <Route path="/pages/Category/:category" element={<Category />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

