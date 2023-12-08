import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { UserAuth } from "../context/AuthContext";
import { Home } from "../pages/Home";
import { ProtectedRouted } from "./ProtectedRouted";
import { Promotion } from "../pages/Promotion";
import { Cart } from "../pages/Cart";
import { Profile } from "../pages/Profile";
import { Category } from "../pages/Category";
import { AppLayout } from "../pages/AppLayout";

export const MyRoutes = () => {
  const { user } = UserAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

      <Route
        path="/"
        element={
          <ProtectedRouted redirectTo="/login" user={user}>
            <AppLayout />
          </ProtectedRouted>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/Promotion" element={<Promotion />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Category/:category" element={<Category />} />
        <Route path="/Profile" element={<Profile user={user} />} />
      </Route>
    </Routes>
  );
};
