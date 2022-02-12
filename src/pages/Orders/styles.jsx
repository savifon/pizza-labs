import styled from "styled-components";

export const Order = styled.div`
  padding: 20px;
  background: var(--colorBgPrimary);
  border-radius: var(--radius);

  & + div {
    margin-top: 10px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Products = styled.ul`
  margin: 10px 0;
  padding: 0 0 0 20px;
`;
