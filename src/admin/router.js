import React from "react";
import { Header, Footer, Sidebar } from "../components/index";
import { Routes, Route, Switch } from "react-router-dom";
import {
  Dashboard,
  CreateTravels,
  EditTravels,
  TravelsState,
  Login
} from "./index";
const router = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="p-5">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/travel/create" exact element={<CreateTravels />} />
            <Route path="travel" exact element={<EditTravels />} />
            {/* <Route path="/travel/state" exact element={<TravelsState />} />
            <Route path="/buses" exact element={<EditTravels />} />
            <Route path="uses/create" exact element={<CreateTravels />} />
            <Route path="buses/state" exact element={<TravelsState />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default router;
