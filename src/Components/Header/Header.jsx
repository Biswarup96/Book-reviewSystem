import React from "react";
import "../../Components/Header/Header.css";
import { headerBooks } from "../../Data/Data";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import headerShape from "../../assets/header-shape.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Header = () => {
  
  return (
    <header>
      <div className="container header-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {headerBooks.map(({ title, img, info, btnLink }, index) => (
            <SwiperSlide key={index}>
              <div className="header-wrapper container">
                <div className="header-left">
                  <h1>{title}</h1>
                  <p>{info}</p>
                  <Link className="btn btn-border" to={btnLink}>
                    Learn More
                  </Link>
                </div>

                {/* Right Side */}
                <div className="header-right">
                  <img src={img} alt={title} />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <FaArrowLeftLong />
            </div>
            <div className="button-next-slide slidebutton">
              <FaArrowRightLong />
            </div>
          </div>

          {/* Pagination */}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        {/* Header Shape */}
        <div className="header-shape">
          <img src={headerShape} alt="Header Shape" />
        </div>
      </div>
    </header>
  );
};

export default Header;
