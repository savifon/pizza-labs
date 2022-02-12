import React, { useContext } from "react";

import { money } from "../../utils/format";
import { CartContext } from "../../context/CartContext";
import { CartBox, Text } from "./styles";
import Product from "../Product";

const Cart = () => {
  const { cart, priceCart, checkout } = useContext(CartContext);

  return (
    <CartBox>
      {cart.length ? (
        <>
          <Text>Resumo do pedido</Text>

          {cart.map((item) => (
            <Product key={item.id} item={item} currentLocation="cart" />
          ))}

          <Text>Total: {money(priceCart)}</Text>

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
