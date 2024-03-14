import React from "react";
import './ProjectCard.css'

function ProjectCard (props) {
    return (
      <div className="project__card">
        <img 
          className='project__img'
          src={props.image}
          alt={props.title} />
        <h3 className='project__name'>
          {props.title} — {props.square} м² — {props.year} </h3>
        <a 
          href={props.link}
          className='project__link-more'
        >Подробнее →</a>
      </div>
    )
}

export default ProjectCard;