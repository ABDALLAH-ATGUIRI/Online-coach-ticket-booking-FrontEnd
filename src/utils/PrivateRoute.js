import { Outlet, Navigate } from "react-router-dom";
import { createContext, useState } from "react";


const PrivateRoutes = ({ children, ...rest }) => {
  let auth = { token: document.cookie.token || false };
  
  return auth.token ? <Navigate to="admin" /> : <Navigate to="admin/login" />;
};

export default PrivateRoutes;
