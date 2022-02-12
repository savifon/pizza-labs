import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 5px 15px 1px var(--colorBgPrimary);
  position: sticky;
  top: 1px;
  background: white;
`;

export const Box = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 10px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  & .logo {
    max-height: 70px;
    max-width: 100%;
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
