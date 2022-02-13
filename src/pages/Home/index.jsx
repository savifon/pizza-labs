import React from "react";

import data from "../../server/pizzas.json";
import { rounded } from "../../utils/format";
import Cart from "../../components/Cart";
import Product from "../../components/Product";
import { Container, FlexColumn } from "../../styles/globalStyle";
import { ListProducts } from "./styles";

const Home = () => {
  const products = data.map((product, index) => ({
    ...product,
    price: product.price > 5 ? rounded(product.price * 0.95) : product.price,
    priceOriginal: product.price > 5 && product.price,
  }));

  return (
    <Container>
      <FlexColumn>
        <ListProducts>
          {products.length ? (
            products.map((product) => (
              <Product key={product.name} item={product} />
            ))
          ) : (
            <p>Você não selecionou nenhum item</p>
          )}
        </ListProducts>

        <Cart />
      </FlexColumn>
    </Container>
  );
};

export default Home;
