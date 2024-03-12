import React from "react";
import "./Button.css";


function Button (props) {
    return (
        <div>
            <button className={props.className}>{props.text}</button>
        </div>
    )
}

export default Button;