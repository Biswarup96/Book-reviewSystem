import React from "react";
import "../Pages/About.css"

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
       
        <div className="about-text">
          <h1 className="about-title">About Us ME</h1>
          <p className="about-description">
            Welcome to our Book Review platform, your go-to destination for
            discovering and sharing insights on the best books across genres.
            Whether you’re into fiction, technology, business, romance, or
            adventure, we’ve got you covered.
          </p>
          <p className="about-description">
            Dive into detailed reviews, share your thoughts, and connect with
            fellow book enthusiasts. Our mission is to create a community where
            readers can explore new titles, rate books, and help others make
            informed reading choices.
          </p>
          <p className="about-description">
            Love books? Start exploring today and leave your reviews to make
            your voice heard!
          </p>
        </div>

       
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
