import React, { useContext } from "react";

import { money } from "../../utils/format";
import { CartContext } from "../../context/CartContext";
import { CartBox } from "./styles";
import Product from "../Product";

const Cart = () => {
  const { cart, priceCart, checkout } = useContext(CartContext);

  return (
    <CartBox>
      {cart.length ? (
        <>
          {cart.map((item) => (
            <Product key={item.id} item={item} currentLocation="cart" />
          ))}

          <h3>Total: {money(priceCart)}</h3>

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
