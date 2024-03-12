import React from 'react'
import Heading from '../Heading/Heading'
import ProjectCard from '../ProjectCard/ProjectCard'
import Button from '../Button/Button'
import './ProjectSection.css'
import Project1Img from '../../Project1.jpg'
import Project2Img from '../../Project2.jpg'
import Project3Img from '../../Project3.jpg'

function ProjectSection() {
  return (
    <div className='projects' id='projects'>
      <Heading
        tagName='h2'
        className='projects__title'
        text='ПРОЕКТЫ'
      />
      <ProjectCard
        src={Project1Img}
        text='ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023'
      />
      <ProjectCard
        src={Project2Img}
        text='ЖК НОРВЕЖСКИЙ ПАРК — 75 М² — 2023'
      />
      <ProjectCard
        src={Project3Img}
        text='ЖК СОСНОВСКИЕ ОЗЕРА — 94 М² — 2022'
      />
      <Button
        className='projects__btn'
        text='Смотреть все проекты'
      />
    </div>
  )
}

export default ProjectSection