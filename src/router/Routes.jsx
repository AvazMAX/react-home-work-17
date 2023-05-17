import React from "react";
import { Route, Routes } from "react-router";
import { Header } from "../components/Header";
import { Products } from "../pages/Products";
import { PhoneDetail } from "../components/PhoneDetail";
import { Mac } from "../pages/Mac";
import { Airpods } from "../pages/Airpods";
import { Iwatch } from "../pages/Iwatch";
import { Ipad } from "../pages/Ipad";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:detail" element={<PhoneDetail />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/pods" element={<Airpods />} />
      <Route path="/watch" element={<Iwatch />} />
      <Route path="/ipad" element={<Ipad />} />
    </Routes>
  );
};
