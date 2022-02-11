import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { CartBox } from "./styles";

const Cart = () => {
  const { cart, priceCart, checkout, add, remove } = useContext(CartContext);

  return (
    <CartBox>
      {cart.length ? (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <div className="cover" />
              <div>
                <h4>{`${item.name} - ${item.price}`}</h4>
                <p>{item.ingredients.map((ingredient) => `${ingredient} `)}</p>

                <button className="green" onClick={() => add(item)}>
                  +
                </button>
                <input type="text" readOnly value={item.qty} />
                <button onClick={() => remove(item)}>-</button>
              </div>
            </div>
          ))}

          <h4>Total: {priceCart}</h4>

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
