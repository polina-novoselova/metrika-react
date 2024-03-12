import React from 'react'
import Heading from '../Heading/Heading'
import ServiceCard from '../ServiceCard/ServiceCard'
import Button from '../Button/Button'
import './ServicesSection.css'
import ServiceImg1 from './Service1.jpg'
import ServiceImg2 from './Service2.jpg'
import ServiceImg3 from './Service3.jpg'
import ServiceImg4 from './Service4.jpg'

function ServicesSection() {
  return (
    <div className='services' id='services'>
      <div className='services-container'>
        <Heading
          tagName='h2'
          className='services__title'
          text='УСЛУГИ'
        />
        <div className='services__list'>
          <ServiceCard
            src={ServiceImg1}
            sum='от 2500₽/м²'
            text='Планировочное решение'
          />
          <ServiceCard
            src={ServiceImg2}
            sum='от 3000₽/м²'
            text='Дизайн-проект'
          />
          <ServiceCard
            src={ServiceImg3}
            sum='от 30 000₽/мес'
            text='Авторский надзор'
          />
          <ServiceCard
            src={ServiceImg4}
            sum='5% от стоимости'
            text='Комплектация'
          />
        </div>
        <Button 
          className='services-btn__link '
          text='Заказать услугу'
        />
      </div>
      
    </div>
  )
}

export default ServicesSection