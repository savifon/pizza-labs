import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <>
      <h1>Orders</h1>

      {orders
        ? orders.map((order) => (
            <p>
              {order.products.map((product) => product.name)}
              <span>{order.status.success ? "Pedido confirmado" : ""}</span>
              <span>{order.status.deliveryTime}</span>
              <span>{order.order_at.toString()}</span>
              <span>{order.price}</span>
            </p>
          ))
        : ""}
    </>
  );
};

export default Orders;
