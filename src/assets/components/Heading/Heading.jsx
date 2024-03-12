import React from "react";
import './Heading.css';

const Heading = ({tagName, text, className}) => {
    const Tag = tagName || 'h2';
    return (
        <div>
            <Tag className={className}>{text}</Tag>
        </div>
    )
}

export default Heading