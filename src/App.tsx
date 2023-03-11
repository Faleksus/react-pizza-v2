
import Cart from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router";

import "./scss/app.scss";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./components/Layouts/MainLayout";
import React from "react";
import Home from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};