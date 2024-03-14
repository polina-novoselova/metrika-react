import React from "react";

function NavBar (props) {
    return (
        <ul className={props.classNameNav}>
            <li><a className={props.classNameNavLink} href="#about">О НАС</a></li>
            <li><a className={props.classNameNavLink} href="#projects">ПРОЕКТЫ</a></li>
            <li><a className={props.classNameNavLink} href="#services">УСЛУГИ</a></li>
            <li><a className={props.classNameNavLink} href="#contacts">КОНТАКТЫ</a></li>
        </ul>
    )
}

export default NavBar;