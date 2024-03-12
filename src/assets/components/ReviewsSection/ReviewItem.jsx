import React from "react";

function ReviewItem (props) {
    return (
        <li className='feedback__item '>
            <p className='feedback__name'>{props.title}</p>
            <p className='feedback__description'>{props.dscrpt}</p>
        </li>
    )
}

export default ReviewItem