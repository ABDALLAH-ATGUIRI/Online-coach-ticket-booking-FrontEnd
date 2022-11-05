import React, { useState, useEffect, Component } from "react";
import { Routes, Route, Router } from "react-router-dom";
import AdminRoutes from "./admin/router";
import PrivateRoutes from "./utils/PrivateRoute";
import AdminLogin from "./admin/auth/Login";

class App extends Component {
  render() {
    const location = window.location.pathname;
    const role = location.split("/")[1] == "admin";
    if (role) {
      return (
        <>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="admin/*" element={<AdminRoutes />} />
            </Route>
            <Route path="admin/login" element={<AdminLogin />}></Route>
          </Routes>
        </>
      );
    }
  }
}

export default App;
