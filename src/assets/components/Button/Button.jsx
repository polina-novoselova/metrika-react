import React from "react";
import "./Button.css";


function Button (props) {
    return (
        <div>
            <button onClick={props.onClick} className={props.className} href={props.link}>{props.text}</button>
        </div>
    )
}

export default Button;