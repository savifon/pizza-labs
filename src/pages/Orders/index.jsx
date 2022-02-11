import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Container } from "../../styles/globalStyle";

const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <Container>
      <h1>Orders</h1>

      {orders &&
        orders.map((order) => (
          <p key={crypto.randomUUID()}>
            {order.products.map((product) => product.name)}
            <span>{order.status.success && "Pedido confirmado"}</span>
            <span>{order.status.deliveryTime}</span>
            <span>{order.order_at.toString()}</span>
            <span>{order.price}</span>
          </p>
        ))}
    </Container>
  );
};

export default Orders;
