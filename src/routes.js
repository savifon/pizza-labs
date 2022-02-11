import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import { CartProvider } from "./context/CartContext";

const AppRoutes = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path='/pedidos' element={<Orders />} /> */}
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default AppRoutes;
