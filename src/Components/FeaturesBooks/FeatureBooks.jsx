import React, { useEffect, useState } from "react";
import "../FeaturesBooks/FeatureBooks.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import TitleTypeOne and other dependencies
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { Link } from "react-router-dom";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { books_end } from "../../ApiUrl/ApiUrl";
import axiosInstance from "../../ApiUrl/AxiosInstance";

// Define breakpoints for responsiveness
const breakpoints = {
  576: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 6,
  },
};

const FeatureBooks = () => {
  const api = books_end;
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(api);
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="Featured">
      <div className="container featurers-book-container">
        <TitleTypeOne TitleTop="Some Quality Books" Title="Featured Books" />

        <Swiper
          spaceBetween={20}
          slidesPerView={6} // Default slidesPerView for small screens
          loop={true}
          modules={[Pagination]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={breakpoints}
        >
          {books.map(({ img, imgLink }, index) => (
            <SwiperSlide key={index}>
              <div className="featuredbook-box">
                <Link to={imgLink} className="featurebook">
                  <img src={img} alt={`Book ${index}`} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="feature-border container"></div>
        <div className="swiper-pagination"></div>
        <Link to="/allbooks" className="btn feature-btn">
          View all products <MdOutlineSubdirectoryArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default FeatureBooks;
