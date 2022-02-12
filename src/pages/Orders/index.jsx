import React, { useContext } from "react";

import { formatDate, formatPrice } from "../../utils/format";
import { Container } from "../../styles/globalStyle";
import { Title, Order, Products } from "./styles";
import { CartContext } from "../../context/CartContext";

const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <Container>
      <Title>Pedidos Realizados</Title>

      {orders.length ? (
        orders.map((order) => (
          <Order key={order.order_at}>
            <p>Feito em: {formatDate(order.order_at)}</p>

            <Products>
              {order.products.map((product) => (
                <li key={product.id}>
                  {product.name} x{product.qty}
                </li>
              ))}
            </Products>

            <p>Total: {formatPrice(order.price)}</p>
          </Order>
        ))
      ) : (
        <p>Você ainda não efetuou nenhum pedido</p>
      )}
    </Container>
  );
};

export default Orders;
