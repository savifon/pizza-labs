import React, { useContext } from "react";

import { formatPrice } from "../../utils/format";
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
            <OldPrice>{formatPrice(item.priceOriginal)}</OldPrice>
          )}
          {formatPrice(item.price)}
        </Price>

        <GroupButtons>
          {currentLocation === "cart" && (
            <>
              <button onClick={() => remove(item)}>-</button>

              <Qty type="text" readOnly value={item.qty} />
            </>
          )}
          <button
            disabled={cart.find(
              (product) =>
                product.name === item.name && currentLocation !== "cart"
            )}
            className="red"
            onClick={() => add(item)}
          >
            {currentLocation === "cart" ? "+" : "Adicionar"}
          </button>
        </GroupButtons>
      </Details>
    </ProductCard>
  );
};

export default Product;
