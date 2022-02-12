import React from "react";

import data from "../../server/pizzas.json";
import { rounded } from "../../utils/format";
import { Container, FlexColumn } from "../../styles/globalStyle";
import Cart from "../../components/Cart";
import Product from "../../components/Product";

const Home = () => {
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
              <Product key={product.id} item={product} />
            ))
          ) : (
            <p>Você não selecionou nenhum item</p>
          )}
        </div>

        <Cart />
      </FlexColumn>
    </Container>
  );
};

export default Home;
