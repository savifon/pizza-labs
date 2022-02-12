import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

const navItems = [
  { title: "Início", ref: "/" },
  { title: "Pedidos Realizados", ref: "/pedidos" },
];

const AppRoutes = () => {
  return (
    <Router>
      <Header navItems={navItems} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pedidos" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
