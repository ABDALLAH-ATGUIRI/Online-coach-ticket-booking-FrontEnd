import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }) => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="admin/login" />;
};

export default PrivateRoutes;
