import React from "react";
import Heading from "../Heading/Heading";
import "./MainSection.css";
import MainImg from './MainScreenImg.png'

function MainSection() {
  return (
    <div className="main-screen">
      <Heading
        tagName="h1"
        className="main-screen__title"
        text="Современные и стильные интерьеры для комфортной жизни"
      />
      <div className="main-screen__img">
        <img src={MainImg} />
        <p className="main-screen__description">
          Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся
          разработкой и реализацией дизайн-проектов
        </p>
      </div>
    </div>
  );
}

export default MainSection;
