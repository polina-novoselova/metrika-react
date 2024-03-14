import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";
import NavBar from "./NavBar";

function Navigation() {
  return (
    <div className="header" id="top">
      <div className="header-inner">
        <Logo />
        <NavBar classNameNav='nav' classNameNavLink='nav__link'/>
      </div>
    </div>
  );
}

export default Navigation;
