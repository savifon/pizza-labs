import React, { createContext, useState, useEffect } from "react";

import { api } from "../service/api";
import { minutes, rounded } from "../utils/format";
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
    const found = cart.find((item) => item.id === product.id);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...found, qty: found.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const remove = (product) => {
    const found = cart.find((item) => item.id === product.id);

    if (found.qty > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...found, qty: found.qty - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const checkout = async () => {
    const response = await api.get("/order");
    const data = await response.data;

    if (data.success) {
      const newModal = {
        ...modalSuccess,
        text: `Seu pedido será entregue em ${minutes(
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

      setCart([]);
      setOrders(currentOrders);

      localStorage.setItem("orders", JSON.stringify(currentOrders));
      localStorage.removeItem("order");
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
