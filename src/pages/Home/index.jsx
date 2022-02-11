import React, { useContext, useEffect, useState } from "react";

import data from "../../server/pizzas.json";
import { rounded } from "../../utils/format";

import { CartContext } from "../../context/CartContext";

const Home = () => {
  const { cart, priceCart, orders, add, remove, checkout } =
    useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = data.map((product, index) => ({
      id: index + 1,
      ...product,
      price: product.price > 5 ? rounded(product.price * 0.95) : product.price,
      priceOriginal: product.price > 5 ? product.price : null,
    }));

    setProducts(products);
  }, []);

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
            <p>{product.priceOriginal ? product.priceOriginal : ""}</p>
            <p>{product.ingredients.map((ingredient) => `- ${ingredient}`)}</p>
            <button onClick={() => add(product)}>+</button>
            <button onClick={() => remove(product)}>-</button>
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
          <button onClick={() => checkout()}>Confirmar pedido</button>
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
