import React, { useEffect, useState } from "react";
import { books_end } from "../ApiUrl/ApiUrl";
import axiosInstance from "../ApiUrl/AxiosInstance";
import "../AllBooks/AllBooks.css";
import TitleTypeOne from "../UI/TitleTypeOne/TitleTypeOne";
import { Link, useNavigate } from "react-router-dom";

const AllBooks = () => {
  const login = !!sessionStorage.getItem("user_id");

  const navi = useNavigate();

  const api = books_end;
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(api);
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="popularbooks">
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={"Some Quality Items "}
          Title={"All the books Available"}
          className={"popularbooks-title"}
        />
        <div className="gallerys">
          {books.map(({ id, name, writer, img, desc, category }) => (
            <div className="gallery-items" key={id}>
              <div className="popularbook-images">
                <img src={img} alt={`${name} `} />
              </div>
              <div className="popularbook-infos">
                <h4>{name}</h4>
                <p className="writer-infos">{writer}</p>
                <p className="categorys">{category}</p>
                <p className="descs">{desc}</p>
                {login ?<Link to={`/review/${id}`}><button className="reviewbtn btn "  >Review</button></Link>  : ""}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
