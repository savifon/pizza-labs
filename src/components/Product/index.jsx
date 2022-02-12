import React, { useContext } from "react";

import { money } from "../../utils/format";
import { CartContext } from "../../context/CartContext";
import {
  Cover,
  Details,
  GroupButtons,
  Ingredients,
  OldPrice,
  Price,
  ProductCard,
  Qty,
  Title,
} from "./styles";

const Product = ({ item, currentLocation }) => {
  const { cart, add, remove } = useContext(CartContext);

  return (
    <ProductCard>
      <Cover />

      <Details>
        <Title>
          {item.name}:
          <Ingredients>
            {item.ingredients.map((ingredient) => ` ${ingredient},`)}
          </Ingredients>
        </Title>

        <Price>
          {item.priceOriginal && (
            <OldPrice>{money(item.priceOriginal)}</OldPrice>
          )}
          {money(item.price)}
        </Price>

        <GroupButtons>
          <button
            disabled={cart.find(
              (product) => product.id === item.id && currentLocation !== "cart"
            )}
            className="red"
            onClick={() => add(item)}
          >
            {currentLocation === "cart" ? "+" : "Adicionar"}
          </button>

          {currentLocation === "cart" && (
            <>
              <Qty type="text" readOnly value={item.qty} />

              <button onClick={() => remove(item)}>-</button>
            </>
          )}
        </GroupButtons>
      </Details>
    </ProductCard>
  );
};

export default Product;
