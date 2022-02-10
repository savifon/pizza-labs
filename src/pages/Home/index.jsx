import React, { useEffect, useState } from "react";

import { api } from "../../service/api";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      await api
        .get("/pizzas")
        .then((response) => {
          const data = response.data.map((pizza, index) => ({
            ...pizza,
            id: index + 1,
          }));

          setPizzas(data);
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, []);

  const handleAddCart = (pizza) => {
    const found = cart.find((item) => item.id === pizza.id);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...found, qty: found.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, qty: 1 }]);
    }
  };

  const handleRemoveCart = (pizza) => {
    const found = cart.find((item) => item.id === pizza.id);

    if (found.qty > 1) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...found, qty: found.qty - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== pizza.id));
    }
  };

  return (
    <>
      <h1>Home</h1>

      {pizzas.length ? (
        pizzas.map((pizza) => (
          <div key={pizza.id}>
            <p>
              {pizza.id} - {pizza.name}
            </p>
            <p>{pizza.price}</p>
            <p>{pizza.ingredients.map((ingredient) => `- ${ingredient}`)}</p>
            <button onClick={() => handleAddCart(pizza)}>+</button>
            <button onClick={() => handleRemoveCart(pizza)}>-</button>
          </div>
        ))
      ) : (
        <div>Sem itens para exibir</div>
      )}

      {cart.length ? (
        cart.map((item) => <p>{JSON.stringify(item)}</p>)
      ) : (
        <p>Sem dados</p>
      )}
    </>
  );
};

export default Home;
