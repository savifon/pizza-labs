import React, { useEffect, useState } from "react";

import { api } from "../../service/api";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    api
      .get("/pizzas")
      .then((response) => setPizzas(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Home</h1>

      {pizzas.length ? (
        pizzas.map((pizza) => (
          <div>
            <p>{pizza.name}</p>
            <p>{pizza.price}</p>
            <p>{pizza.ingredients.map((ingredient) => `- ${ingredient}`)}</p>
          </div>
        ))
      ) : (
        <div>Sem itens para exibir</div>
      )}
    </>
  );
};

export default Home;
