import React, { useEffect, useState } from "react";

// import { api } from "../../service/api";
import data from "../../server/pizzas.json";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [priceCart, setPriceCart] = useState(0);

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

  const handleCheckout = () => {
    // (async () => {
    //   await api
    //     .get("/pizzas")
    //     .then((response) => {
    //       const data = response.data.map((product, index) => ({
    //         ...product,
    //         id: index + 1,
    //       }));
    //       setProducts(data);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // })();
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
    </>
  );
};

export default Home;
