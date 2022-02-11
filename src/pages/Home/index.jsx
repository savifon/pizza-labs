import React, { useContext } from "react";

import data from "../../server/pizzas.json";
import { rounded } from "../../utils/format";
import { CartContext } from "../../context/CartContext";
import { Container, FlexColumn } from "../../styles/globalStyle";
import Cart from "../../components/Cart";

const Home = () => {
  const { cart, add } = useContext(CartContext);

  const products = data.map((product, index) => ({
    id: index + 1,
    ...product,
    price: product.price > 5 ? rounded(product.price * 0.95) : product.price,
    priceOriginal: product.price > 5 && product.price,
  }));

  return (
    <Container>
      <FlexColumn>
        <div>
          {products.length ? (
            products.map((product) => (
              <div key={product.id}>
                <p>
                  {product.id} - {product.name}
                </p>
                <p>{product.price}</p>
                <p>{product.priceOriginal && product.priceOriginal}</p>
                <p>
                  {product.ingredients.map((ingredient) => `- ${ingredient}`)}
                </p>

                <button
                  disabled={cart.find((item) => item.id === product.id)}
                  className="green"
                  onClick={() => add(product)}
                >
                  Adicionar
                </button>
              </div>
            ))
          ) : (
            <div>Você não selecionou nenhum item</div>
          )}
        </div>

        <Cart />
      </FlexColumn>
    </Container>
  );
};

export default Home;
