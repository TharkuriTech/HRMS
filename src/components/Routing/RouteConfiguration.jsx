import React from "react";
import { Routes, Route } from "react-router-dom";
import MainBoard from "../Dashboard/MainBoard";
import Leaves from "../Leave/Leave"

export default function RouteConfiguration() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/leaves" element={<Leaves />} />
        {/* <Route path="/settings" element={<Settings />} />  */}
      </Routes>
    </>
  );
}