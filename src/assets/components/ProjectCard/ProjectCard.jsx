import React from "react";


import './ProjectCard.css'

function ProjectCard (props) {
    return (
      <div className="project__card">
        <img 
          src={props.src}
          className='project__img'
          alt="" />
        <h3 className='project__name'>{props.text}</h3>
        <a 
          href=""
          className='project__link-more'
        >Подробнее →</a>
      </div>
    )
}

export default ProjectCard;