import React from "react";
import { Routes, Route } from "react-router-dom";
import MainBoard from "../Dashboard/MainBoard";
import Leaves from "../Leave/Leave";
import Claim from "../Claim/Claim";
import ClaimCreation from "../Claim/ClaimCreation";
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