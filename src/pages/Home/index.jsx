import React, { useEffect, useState } from "react";

import { api } from "../../service/api";
import data from "../../server/pizzas.json";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [priceCart, setPriceCart] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const products = data.map((product, index) => ({
      ...product,
      id: index + 1,
    }));

    setProducts(products);
  }, []);

  useEffect(() => {
    const total = cart.reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0);

    setPriceCart(total);

    localStorage.setItem("order", JSON.stringify({ cart, total }));
  }, [cart]);

  const handleAddCart = (product) => {
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

  const handleRemoveCart = (product) => {
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

  const handleCheckout = async () => {
    const response = await api.get("/order");
    const data = await response.data;

    if (data.success) {
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

  const toMinutes = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 60000).toFixed(0);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <>
      <h1>Home</h1>

      {products.length ? (
        products.map((product) => (
          <div key={product.id}>
            <p>
              {product.id} - {product.name}
            </p>
            <p>{product.price}</p>
            <p>{product.ingredients.map((ingredient) => `- ${ingredient}`)}</p>
            <button onClick={() => handleAddCart(product)}>+</button>
            <button onClick={() => handleRemoveCart(product)}>-</button>
          </div>
        ))
      ) : (
        <div>Sem itens para exibir</div>
      )}

      {cart.length ? (
        <>
          {cart.map((item) => (
            <p>{JSON.stringify(item)}</p>
          ))}
          <p>{priceCart}</p>
          <button onClick={() => handleCheckout()}>Confirmar pedido</button>
        </>
      ) : (
        <p>Você ainda não escolheu nenhum item.</p>
      )}

      {orders
        ? orders.map((order) => (
            <p>
              {order.products.map((product) => product.name)}
              <span>{order.status.success ? "Pedido confirmado" : ""}</span>
              <span>{order.status.deliveryTime}</span>
              <span>{order.order_at.toString()}</span>
              <span>{order.price}</span>
            </p>
          ))
        : ""}
    </>
  );
};

export default Home;
