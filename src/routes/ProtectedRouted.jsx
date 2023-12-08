import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouted = ({ children, redirectTo, user }) => {
  if (user === null) return <Navigate to={redirectTo} />;

  return   children?children: <Outlet />;
};
