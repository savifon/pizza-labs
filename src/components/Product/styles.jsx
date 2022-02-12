import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  gap: 10px;

  /* & + div {
    margin-top: 20px;
  } */
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Ingredients = styled.span`
  font-weight: normal;
  font-size: 0.8rem;
`;

export const Price = styled.p`
  color: var(--colorSecondary);
  font-weight: bold;
`;

export const OldPrice = styled.span`
  font-weight: normal;
  text-decoration: line-through;
  color: var(--colorBgSecondary);
  margin-right: 10px;
`;

export const GroupButtons = styled.div`
  display: flex;
  gap: 3px;
`;

export const Qty = styled.input`
  border: none;
  background: white;
  width: 30px;
  border-radius: 10px;
  height: 28px;
  text-align: center;
  cursor: default;
`;

export const Cover = styled.div`
  flex: none;
  width: 85px;
  height: 85px;
  border-radius: var(--radius);
  background: var(--colorBgSecondary);
`;
