import React, { createContext, useState, useEffect } from "react";

import { formatMinutes, rounded } from "../utils/format";
import { api } from "../services/api";
import Modal from "../components/Modal";

const CartContext = createContext();

const initialModal = {
  display: false,
  text: "",
  textButton: "Voltar ao início",
  action: () => {},
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [priceCart, setPriceCart] = useState(0);
  const [orders, setOrders] = useState([]);
  const [modalSuccess, setModalSuccess] = useState(initialModal);

  useEffect(() => {
    const recoveredOrder = localStorage.getItem("order");
    const recoveredOrders = localStorage.getItem("orders");

    if (recoveredOrder) {
      setCart(JSON.parse(recoveredOrder).cart);
    }

    if (recoveredOrders) {
      setOrders(JSON.parse(recoveredOrders));
    }
  }, []);

  useEffect(() => {
    const total = cart.reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0);

    setPriceCart(rounded(total));

    localStorage.setItem("order", JSON.stringify({ cart, total }));
  }, [cart]);

  const add = (product) => {
    const found = cart.find((item) => item.name === product.name);

    if (found) {
      setCart(
        cart.map((item) =>
          item.name === product.name ? { ...found, qty: found.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const remove = (product) => {
    const found = cart.find((item) => item.name === product.name);

    if (found.qty > 1) {
      setCart(
        cart.map((item) =>
          item.name === product.name ? { ...found, qty: found.qty - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.name !== product.name));
    }
  };

  const checkout = async () => {
    const response = await api.get("/order");
    const data = await response.data;

    if (data.success) {
      const newModal = {
        ...modalSuccess,
        text: `Seu pedido será entregue em ${formatMinutes(
          data.deliveryTime
        )} minutos!`,
        action: () => setModalSuccess(initialModal),
        display: true,
      };

      setModalSuccess(newModal);

      const currentOrders = [
        ...orders,
        {
          status: data,
          products: cart,
          price: priceCart,
          order_at: new Date(),
        },
      ];

      setOrders(currentOrders);
      localStorage.setItem("orders", JSON.stringify(currentOrders));

      localStorage.removeItem("order");
      setCart([]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, priceCart, orders, add, remove, checkout }}
    >
      {children}

      {modalSuccess.display && (
        <Modal
          text={modalSuccess.text}
          textButton={modalSuccess.textButton}
          action={modalSuccess.action}
        />
      )}
    </CartContext.Provider>
  );
};

export { CartContext };
