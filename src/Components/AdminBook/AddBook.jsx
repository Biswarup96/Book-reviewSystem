import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../ApiUrl/AxiosInstance";
import { books_end } from "../../ApiUrl/ApiUrl";
import "../AdminBook/AddBook.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

const AddBook = () => {
  const [img, setImg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const postData = { ...data, img };
      const response = await axiosInstance.post(books_end, postData);
      console.log("Response:", response);
      setSuccessMessage("Book  submitted successfully!");
      reset(); // Reset the form after submission
    } catch (error) {
      console.error("Error in submitting data:", error.message);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const imageUploader = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    const validTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!validTypes.includes(file.type)) {
      setErrorMessage("Only JPG and PNG formats are allowed.");
      return;
    }
    if (file.size > maxSize) {
      setErrorMessage("Image size must be less than 5 MB.");
      return;
    }

    try {
      const base64Image = await convertToBase64(file);
      setImg(base64Image);
    } catch (error) {
      console.error("Error in converting image:", error);
      setErrorMessage("Error uploading the image. Please try again.");
    }
  };

  return (
    <div className="wraps  ">
      <div className="wrappersss ">
        <div className="containersss ">
          <form onSubmit={handleSubmit(submitHandler)}>
          <TitleTypeOne
          TitleTop={"Some Of Our Quality "}
          Title={"Add Your Book"}
          className={"popularbooks-title"}
        />

            {/* Book Title */}
            <div className="input-boxxss">
              <label className="labell">Book Title</label>
              <input
                type="text"
                {...register("title", {
                  required: "Book title is required.",
                })}
                placeholder="Enter book title"
              />
              {errors.title && (
                <p className="error-message">{errors.title.message}</p>
              )}
            </div>

            {/* Author Name */}
            <div className="input-boxxss">
              <label className="labell">Info</label>
              <input
                type="text"
                {...register("info", {
                  required: "information of the book",
                })}
                placeholder="Enter the information"
              />
              {errors.info && (
                <p className="error-message">{errors.info.message}</p>
              )}
            </div>

            {/* Name */}
            <div className="input-boxxss">
              <label className="labell">Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name of The publisher",
                })}
                placeholder="Publisher name required"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>
            {/* writer */}
            <div className="input-boxxss">
              <label className="labell">writer</label>
              <input
                type="text"
                {...register("writer", {
                  required: "Writer of the book",
                })}
                placeholder="Enter the Writer name"
              />
              {errors.writer && (
                <p className="error-message">{errors.writer.message}</p>
              )}
            </div>
            {/* info_titletop */}
            <div className="input-boxxss">
              <label className="labell">Info Title Top</label>
              <input
                type="text"
                {...register("infoTitleTop", {
                  required: "required",
                })}
                placeholder="what will show on the top"
              />
              {errors.infoTitleTop && (
                <p className="error-message">{errors.infoTitleTop.message}</p>
              )}
            </div>
            {/* info title */}
            <div className="input-boxxss">
              <label className="labell">Info Title </label>
              <input
                type="text"
                {...register("infoTitle", {
                  required: "required",
                })}
                placeholder="what will show on the top"
              />
              {errors.infoTitle && (
                <p className="error-message">{errors.infoTitle.message}</p>
              )}
            </div>
            {/* description */}
            <div className="input-boxxss">
              <label className="labell">Description</label>
              <input
                type="text"
                {...register("desc", {
                  required: "required",
                })}
                placeholder="what will show on the top"
              />
              {errors.desc && (
                <p className="error-message">{errors.desc.message}</p>
              )}
            </div>
            {/* category */}
            <div className="input-boxxss">
              <select
                required
                aria-label="Category"
                {...register("category", {
                  required: "Category is required", // Validation rule
                })}
              >
                <option value="">Select a category</option>
                <option value="Fictional">Fiction</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
                <option value="Romantic">Romantic</option>
                <option value="Adventure">Adventure</option>
              </select>
              {errors.category && (
                <p style={{ color: "red" }}>{errors.category.message}</p>
              )}
            </div>

            {/* Image Upload */}
            <div className="input-boxxss">
              <label className="labell">Upload Book Image</label>
              <input type="file" onChange={imageUploader} />
              {errors.img && (
                <p className="error-message">{errors.img.message}</p>
              )}
            </div>

            {/* Submission Feedback */}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Submit Button */}
            <div className="buttonss ">
              <input type="submit" value="Submit the Book" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
