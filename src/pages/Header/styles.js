import styled from "styled-components";

export const Box = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 5px 15px 1px var(--colorBgPrimary);

  & .logo {
    max-height: 70px;
  }

  & .nav {
    display: flex;
    gap: 10px;

    & li {
      transition: all ease 0.2s;
      list-style: none;
      display: flex;
      border-radius: var(--radius);

      & a {
        padding: 10px;
        color: var(--colorText);
      }

      &:hover {
        background: var(--colorBgPrimary);
      }
    }
  }
`;
