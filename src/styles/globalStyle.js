import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --colorText: #333333;
    --colorTextButton: #ffffff;
    --colorPrimary: #e1301c;
    --colorSecondary: #4f9844;
    --colorBgPrimary: #f0f0f0;
    --colorBgSecondary: #d3d3d3;
    --radius: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    color: var(--colorText);
  }

  a {
    text-decoration: none;
    color: #4f9844;
  }

  button {
    border: none;
    background: var(--colorBgSecondary);
    padding: 5px 10px;
    border-radius: var(--radius);
    color: var(--colorTextButton);
    font-weight: bold;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all ease .2s;

    &.green {
      background: var(--colorSecondary);
    }

    &.red {
      background: var(--colorPrimary);

      &.btn-checkout {
        padding: 10px 15px;
      }
    }

    &:disabled {
      opacity: .2;
    }

    &:hover {
      box-shadow: 0px 10px 10px -10px var(--colorText);
      border-color: var(--colorTextButton);
    }
  }
`;

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  padding: 30px;
  max-width: 1250px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
`;
