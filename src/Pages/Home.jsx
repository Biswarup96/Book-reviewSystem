import React from "react";
import Header from "../Components/Header/Header";
import Brands from "../Components/Brands/Brands";
import FeatureBooks from "../Components/FeaturesBooks/FeatureBooks";
import Bestselling from "../Components/Bestseller/Bestselling";
import PopularBooks from "../Components/PopularBooks/PopularBooks";
import Quote from "../Components/Quote/Quote";

export const Home = () => {
  return (
    <>
      <Header />
      <Brands/>
      <FeatureBooks/>
      <Bestselling/>
      <PopularBooks/>
      <Quote/>
    </>
  );
};
