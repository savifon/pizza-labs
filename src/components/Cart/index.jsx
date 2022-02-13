import React, { useContext } from "react";

import { formatPrice } from "../../utils/format";
import Product from "../Product";
import { CartContext } from "../../context/CartContext";
import { CartBox, Text } from "./styles";

const Cart = () => {
  const { cart, priceCart, checkout } = useContext(CartContext);

  return (
    <CartBox>
      <Text>Resumo do pedido</Text>

      {cart.length ? (
        <>
          {cart.map((item) => (
            <Product key={item.name} item={item} currentLocation="cart" />
          ))}

          <Text>Total: {formatPrice(priceCart)}</Text>

          <button className="red btn-checkout" onClick={() => checkout()}>
            Confirmar pedido
          </button>
        </>
      ) : (
        <p>Você ainda não escolheu nenhum item.</p>
      )}
    </CartBox>
  );
};

export default Cart;
