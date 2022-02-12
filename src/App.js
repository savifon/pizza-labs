import React from "react";

import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
