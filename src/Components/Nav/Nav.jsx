import React, { useState, useEffect } from "react";
import "../Nav/Nav.css";

import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navLinks, navRight } from "../../Data/Data";

import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  
  const [navLinkShowing, setNavLinkShowing] = useState(false);
  const [isNavShadow, setIsNavShadow] = useState(false);


 const navigate=useNavigate();


  const isLogin=sessionStorage.getItem("user_id");
  const handleLogout=()=>{
    sessionStorage.removeItem("user_id")
    navigate("/")
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsNavShadow(window.scrollY > 0);

      if (window.innerWidth < 1024) {
        setNavLinkShowing(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isNavShadow ? "nav navShadow" : "nav"}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to={"/"} className="logo">
          <img src={Logo} alt="logo" /> 
        </Link>

        {/* Nav Links */}
        <ul
          className={`nav-link ${
            navLinkShowing ? "navlinkshow" : "navlinkhide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>



        
        {/* Nav Right Section */}
        <div className="nav-right">
        {
          isLogin?(<span onClick={handleLogout}>Log out</span>):(<Link to="/login"><span>Log in</span></Link>)
        }
          {navRight.managements.map((item, index) => (
            <Link
              key={index}
              target="_blank"
              className="management-icons"
              to={item.link}
            >
              <item.icon />
            </Link>
          ))}
          
          {/* Menu Button */}
          <button
            className="menu-button btn btn-border"
            onClick={() => setNavLinkShowing(!navLinkShowing)}
          >
            {!navLinkShowing ? <IoMenu /> : <GrClose />}
          </button>
        </div>
       
      </div>
    </nav>
  );
};

export default Nav;
