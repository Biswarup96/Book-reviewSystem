import React from "react";
import "./ReviewPage.css";
import { useForm } from "react-hook-form";
import { review_end } from "../../ApiUrl/ApiUrl";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../ApiUrl/AxiosInstance";

const ReviewPage = () => {
  const navigate=useNavigate();
  const { id } = useParams(); 
  const api = review_end;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const postData = { ...data, bookId: id };
      const response = await axiosInstance.post(api, postData);
      console.log("Response:", response.data);
      navigate(`/allreview/${id}`)

    } catch (error) {
      console.error("Error in submitting data:", error);
    }
  };

  return (
    <div className="review-form-container">
      <h2>Book Review</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="review-form">
        <div className="form-group">
          <label htmlFor="reviewerName">Your Name:</label>
          <input
            type="text"
            id="reviewerName"
            placeholder="Enter your name"
            {...register("reviewerName", { required: "Name is required" })}
          />
          {errors.reviewerName && (
            <p className="error-message">{errors.reviewerName.message}</p>
          )}
        </div>
        <div className="form-group">
        <label htmlFor="rating">Rating (1 to 5):</label>
          <select
            id="rating"
            {...register("rating", { required: "Rating is required" })}
          >
            <option value="">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.rating && (
            <p className="error-message">{errors.rating.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="review">Your Review:</label>
          <textarea
            id="review"
            placeholder="Write your review here"
            {...register("review", {
              required: "Review is required",
              minLength: {
                value: 10,
                message: "Review must be at least 10 characters",
              },
            })}
          />
          {errors.review && (
            <p className="error-message">{errors.review.message}</p>
          )}
        </div>
        <button className="btnsubmit" type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewPage;


