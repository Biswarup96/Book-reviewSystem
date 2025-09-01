import React from "react";
import "../TitleTypeOne/TitleTypeOne.css";

import victor from "../../assets/victor.png";

const TitleTypeOne = ({ className = "", Title, TitleTop }) => {
  return (
    <div className={`titleTypeOne ${className}`}>
      <small>{TitleTop}</small>
      <div className="heading-H">
        <div className="line"></div>
        <h2>{Title}</h2>
        <div className="line"></div>
      </div>
      <img src={victor} className="victor" alt="Decorative" />
    </div>
  );
};

export default TitleTypeOne;

// using props method send to featred books
