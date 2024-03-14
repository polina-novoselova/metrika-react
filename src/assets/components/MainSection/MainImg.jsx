import React from "react";
import "./MainImg.css";
import MainImgScreen from "./MainScreenImg.png";
import MainImgTablet from "./main-img-tablet.png";
import MainImgPhone from "./main-img-phone.png";

function MainImg() {
  return (
    <div>
      <img className="main-img-screen" src={MainImgScreen} />
      <img className="main-img-tablet" src={MainImgTablet} />
      <img className="main-img-phone" src={MainImgPhone} />
    </div>
  );
}

export default MainImg;
