import React from 'react'
import Heading from '../Heading/Heading'
import './ContactsSection.css'
import ContactItem from '../ContactItem/ContactItem'
import TgIcon from './contact_tg.png'
import PhIcon from './contacts_img.png'

function ContactsSection() {
  return (
    <div className='contacts' id='contacts'>
      <Heading
          tagName='h2'
          text='КОНТАКТЫ'
      />
      <ul className='contact__items'>
          <ContactItem
            classNameLi='contact__number'
            className='contact__number-link'
            classNameImg='contact__number-img'
            src={PhIcon}
            href='tel:+79358954535'
            text='+7 935 895-45-35'
          />
          <ContactItem
            classNameLi='contact__tg'
            className='contact__tg-link'
            classNameImg='contact__tg-img'
            src={TgIcon}
            href='https://t.me/Sunpolino'
            text='Polina Novoselova'
          />
      </ul>
    </div>
  )
}

export default ContactsSection