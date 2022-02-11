import React, { useEffect, useState } from "react";

import { api } from "../../service/api";
import data from "../../server/pizzas.json";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [priceCart, setPriceCart] = useState(0);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const products = data.map((product, index) => ({
      ...product,
      id: index + 1,
    }));

    setProducts(products);
  }, []);

  useEffect(() => {
    setPriceCart(
      cart.reduce((total, product) => {
        return total + product.price * product.qty;
      }, 0)
    );
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
    await api
      .get("/order")
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
        <p>Sem dados</p>
      )}

      {order?.success ? (
        <p>
          Seu pedido será entregue em {toMinutes(order.deliveryTime)} minutos
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
