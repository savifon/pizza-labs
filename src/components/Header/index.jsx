import React from "react";
import { Link } from "react-router-dom";

import { Box } from "./styles";

import logo from "../../assets/logo.svg";

const Header = ({ navItems }) => {
  return (
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
  );
};

export default Header;
