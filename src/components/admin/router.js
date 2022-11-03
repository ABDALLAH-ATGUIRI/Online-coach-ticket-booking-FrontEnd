import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import CreateTravels from "./Voyage/create/createTravels";
import EditTravels from "./Voyage/edit/editTravels";
import TravelsState from "./Voyage/states/states";

import React from "react";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="travel" element={<EditTravels />} />
      <Route path="travel/create" element={<CreateTravels />} />
      <Route path="travel/state" element={<TravelsState />} />
      <Route path="buses" element={<EditTravels />} />
      <Route path="buses/create" element={<CreateTravels />} />
      <Route path="buses/state" element={<TravelsState />} />
    </Routes>
  );
};

export default router;
