import React from "react";
import { Routes, Route } from "react-router-dom";
import MainBoard from "../Dashboard/MainBoard.jsx";
import Leaves from "../Leave/Leave.jsx";
import Claim from "../Claim/Claim.jsx";
import ClaimCreation from "../Claim/ClaimCreation.jsx";
Leaves

export default function RouteConfiguration() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/Claim" element={<Claim />} />
        <Route path="/CreateClaim" element={<ClaimCreation />} />
        {/* <Route path="/settings" element={<Settings />} />  */}
      </Routes>
    </>
  );
}