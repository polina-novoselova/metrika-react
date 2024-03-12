import React from "react";
import LogoImg from '../../logo_metrika.png'
import "./Logo.css";

function Logo () {
  return (
    <div>
      <div>
        <a href="#top">
          <img 
            src={LogoImg} 
            className='logo-img '
            alt="Логотип студии интерьеров Метрика" />
        </a>
      </div>
    </div>
  );
}

export default Logo;
