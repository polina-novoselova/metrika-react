import React from 'react'
import './Footer.css'
import NavBar from '../Navigation/NavBar'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-inner'>
        <NavBar classNameNav='nav-footer' classNameNavLink='nav-footer__link' />
        <p className='text__footer'>
          студия дизайна интерьера Метрика — 2023
        </p>
      </div>
    </div>
  )
}

export default Footer