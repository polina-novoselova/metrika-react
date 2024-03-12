import React from "react";
import './ContactItem.css';


function ContactItem (props) {
    return (
        <li className={props.classNameLi}>
            <img className={props.classNameImg}
                 src={props.src}
            />
            <a 
                className={props.className}
                href={props.href}
                target={props.target}            
            >{props.text}</a>
        </li>
    )
}

export default ContactItem