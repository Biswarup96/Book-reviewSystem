import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { Notfound } from "../Pages/Notfound/Notfound";

import { Home } from "../Pages/Home";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/About";
import Login from "../Components/Auth/Login";
import Registration from "../Components/Auth/Registration";
import AdminLog from "../Components/Auth/Admin/AdminLog";
import AddBook from "../Components/AdminBook/AddBook";
import AllBooks from "../AllBooks/AllBooks";
import ReviewPage from "../Components/ReviewPage/ReviewPage";
import Allreview from "../Components/AllReview/Allreview";

const Routing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/admin" element={<AdminLog/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/allbooks" element={<AllBooks/>}/>
        <Route path="/review/:id" element={<ReviewPage/>}/>
        <Route path="/allreview/:id" element={<Allreview/>}/>
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
