import React from "react";

import victor from "../../assets/victor.png";

const TitleTypeTwo = ({ className = "", Title }) => {
  return (
    <div className={`TitleTypetwo ${className}`}>
      <h2>{Title}</h2>

      <img src={victor} className="victor" alt="Decorative" />
    </div>
  );
};

export default TitleTypeTwo;
