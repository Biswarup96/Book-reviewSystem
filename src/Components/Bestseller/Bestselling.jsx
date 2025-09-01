import React from "react";
import "../Bestseller/BestSelling.css";

// import title type props
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

import TreeShape from "../../assets/treeShape.png";

import { sellingBooksData } from "../../Data/Data";

const Bestselling = () => {
  return (
    <section className="Bestselling">
      {/* shape of the tree */}
      <div className="treeShape">
        <img src={TreeShape} alt="...." />
      </div>

      {sellingBooksData.map(({ img, infoTitle, infoTitleTop, desc }) => {
        return (
          <div className="container bestsellingbook-container">
            <div className="selling-book-left">
              <img src={img} alt="...." />
            </div>
            <div className="selling-book-right">
              <TitleTypeTwo Title={"Our Best Book"} className="bestselltitle"/>
              <div><small>{infoTitleTop}</small></div>
              <h3>{infoTitle}</h3>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Bestselling;
