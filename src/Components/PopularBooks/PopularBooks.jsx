import React, { useEffect, useState } from "react";
import "../PopularBooks/PopularBooks.css";
// import propular books
// import { galleryData } from "../../Data/Data";

// import title prop

import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { books_end } from "../../ApiUrl/ApiUrl";
import axiosInstance from "../../ApiUrl/AxiosInstance";

const PopularBooks = () => {
  const [activeButton, setactiveButton] = useState("all");


  const api=books_end;
  const [book,setbook]=useState([]);

  const fetchData=()=>{
    axiosInstance.get(api).then((res)=>{
      console.log(res.data);
      setbook(res.data)

    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    fetchData();
  },[]);










  const handleFilterChange = (category) => {
    setactiveButton(category);
  };

  const filterItems =
    activeButton === "all"
      ? book
      : book.filter((item) => item.category === activeButton);

  return (
    <section className="popularbooks">
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={"some quality items "}
          Title={"Popular Books"}
          className={"popularbooks-title"}
        />

        <div className="filter-buttons">
          <button
            className={activeButton === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={activeButton === "Business" ? "active" : ""}
            onClick={() => handleFilterChange("Business")}
          >
            Business
          </button>
          <button
            className={activeButton === "Technology" ? "active" : ""}
            onClick={() => handleFilterChange("Technology")}
          >
            Technology
          </button>
          <button
            className={activeButton === "Adventure" ? "active" : ""}
            onClick={() => handleFilterChange("Adventure")}
          >
            Adventure
          </button>
          <button
            className={activeButton === "Romantic" ? "active" : ""}
            onClick={() => handleFilterChange("Romantic")}
          >
            Romantic
          </button>
          <button
            className={activeButton === "Fictional" ? "active" : ""}
            onClick={() => handleFilterChange("Fictional")}
          >
            Fictional
          </button>
        </div>

        {/* filltering the books */}
        <div className="gallery">
          {filterItems.map(({ name, writer, img }, index) => {
            return (
              <div className="gallery-items" key={index}>
                <div className="popularbook-image">
                  <img src={img} alt="......" />
                </div>
                <div className="popularbook-info">
                  <h4>{name}</h4>
                  <div>
                    <small>{writer}</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
