import React, { useEffect, useState } from "react";
import { books_end, review_end } from "../../ApiUrl/ApiUrl";
import { useParams } from "react-router-dom";
import axiosInstance from "../../ApiUrl/AxiosInstance";
import "./Allreview.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

const Allreview = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching book details for ID:", id);
        const bookRes = await axiosInstance.get(`${books_end}/${id}`);
        console.log("Book details fetched:", bookRes.data);
        setBookDetails(bookRes.data);
      } catch (err) {
        console.error("Error fetching book details:", err);
      }
    };

    const fetchReviews = async () => {
      try {
        console.log("Fetching reviews for book ID:", id);
        const reviewRes = await axiosInstance.get(`${review_end}?bookId=${id}`);
        console.log("Reviews fetched:", reviewRes.data);
        setReviews(reviewRes.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchData();
    fetchReviews();
  }, [id]);

  return (
    <section className="popularbooksss">
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={"Some Of Your Quality "}
          Title={"Your All reviews"}
          className={"popularbooks-title"}
        />

        <div className="allreview-container">
          <div className="bth-div">
            {bookDetails && (
              <div className="book-details">
                <div className="imgaeee">
                  {" "}
                  <img className="imgeeees" src={bookDetails.img} alt="..." />
                </div>

                <h1 className="book-title">{bookDetails.title}</h1>
                <p className="book-author">by {bookDetails.name}</p>
                <p className="book-description">{bookDetails.desc}</p>
              </div>
            )}
          </div>

          <div className="reviews-section">
            <h2 className="reviews-title">Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <p className="reviewer-name">
                    <strong>{review.reviewerName}</strong>
                  </p>
                  <p className="review-rating">Rating: {review.rating}/5</p>
                  <p className="review-content">{review.review}</p>
                </div>
              ))
            ) : (
              <p className="no-reviews">No reviews available for this book.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Allreview;
