import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

function Navigation() {
  return (
    <div className="header" id="top">
      <div className="header-inner">
        <Logo />
        <ul className="nav">
            <li><a className="nav__link" href="#about">О НАС</a></li>
            <li><a className="nav__link" href="#projects">ПРОЕКТЫ</a></li>
            <li><a className="nav__link" href="#services">УСЛУГИ</a></li>
            <li><a className="nav__link" href="#contacts">КОНТАКТЫ</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
