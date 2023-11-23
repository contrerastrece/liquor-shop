import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { UserAuth } from "../context/AuthContext";
// import Footer from "./components/Footer";

export const MyRoutes = () => {
  // const {user}=UserAuth();

  // console.log(user)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/">
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/Promotion" element={<Promotion />} /> */}
        {/* <Route path="/Cart" element={<Cart />} /> */}

        {/* <Route path="/Category/:category" element={<Category />} /> */}

        {/* <Footer /> */}
      </Route>
    </Routes>
  );
};
