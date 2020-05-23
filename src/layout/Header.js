//TODO: DONE: set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand tag={Link} to="/" className="text-white">
        LCO Contact App
      </NavbarBrand>
      {/*   we can also use      <Link to="/home">home</Link>   both are fine */}
      <NavbarText className="text-white float-right">
        A simple Contact app
      </NavbarText>
    </Navbar>
  );
};

export default Header;
