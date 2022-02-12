import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { Container, Box } from "./styles";

const Header = ({ navItems }) => {
  return (
    <Container>
      <Box>
        <Link to="/">
          <img src={logo} alt="Pizza Labs" className="logo" />
        </Link>

        {navItems && (
          <ul className="nav">
            {navItems.map((nav) => (
              <li key={nav.ref}>
                <Link to={nav.ref}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Container>
  );
};

export default Header;
