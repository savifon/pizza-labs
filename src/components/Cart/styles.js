import styled from "styled-components";

export const CartBox = styled.div`
  padding: 20px;
  width: 320px;
  max-width: 100%;
  border-radius: var(--radius);
  background: var(--colorBgPrimary);

  & > div {
    display: flex;
    gap: 10px;

    & + div {
      margin-top: 20px;
    }

    & .cover {
      flex: none;
      width: 75px;
      height: 75px;
      border-radius: var(--radius);
      background: var(--colorBgSecondary);
    }

    & input:read-only {
      border: none;
      background: white;
      width: 30px;
      border-radius: 10px;
      height: 28px;
      text-align: center;
      margin: 0 3px;
      cursor: default;
    }
  }

  & button.btn-checkout {
    width: 100%;
  }
`;
