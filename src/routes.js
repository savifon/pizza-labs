import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Orders from "./pages/Orders";

import GlobalStyle from "./styles/globalStyle";

import { CartProvider } from "./context/CartContext";
import Header from "./pages/Header";

const navItems = [
  { title: "Início", ref: "/" },
  { title: "Pedidos Realizados", ref: "/pedidos" },
];

const AppRoutes = () => {
  return (
    <Router>
      <CartProvider>
        <Header navItems={navItems} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pedidos" element={<Orders />} />
        </Routes>
        <GlobalStyle />
      </CartProvider>
    </Router>
  );
};

export default AppRoutes;
