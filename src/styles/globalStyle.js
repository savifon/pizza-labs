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
`;

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  padding: 30px;
  max-width: 1250px;
`;
