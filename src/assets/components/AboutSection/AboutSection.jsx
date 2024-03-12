import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import './AboutSection.css'

function AboutSection() {
  return (
    <div className='about' id='about'>
      <Heading
        tagName='h2'
        className='about__title'
        text='О НАС'
      />
      <p className='about__description'>Студия основана в 2011 году. Полностью отдаемся проектированию и реализации интерьеров. К нам обращаются за уютом, индивидуальными решениями и практичностью. Находим конструктивные решения для каждого интерьера, вплоть до каждой детали — нацелены на результат.</p>
      <a href="#services">
        <Button
          className='about-btn'
          href="#services"
          text='Посмотреть услуги'
        />
      </a>
    </div>
  )
}

export default AboutSection