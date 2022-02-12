import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  padding: 50px;
  border-radius: var(--radius);
  box-shadow: 0px 5px 10px var(--colorBgSecondary);
  border: 1px solid var(--colorBgSecondary);
  background: white;
  max-width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  color: var(--colorPrimary);
  font-weight: bold;
`;
