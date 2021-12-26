import React, { useState } from "react";
import "./Header.css";
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";



import { NavLink } from "react-router-dom";

const style = {
  backgroundColor: "#42a5f5",
  // color: "#oo4f64",
}






const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <div className = " w-auto " style = {style}>
      <nav className="main-nav  ">
        {/* 1st logo part  */}
          <div > 
       <p className = "text-2xl text-white font-extrabold">Technoithub</p>
           </div>

        {/* 2nd menu part  */}
        <div
          className={ 
            showMediaIcons ? "menu-link  mobile-menu-link" : "menu-link  flex justify-center align-items-center"
          } >
          <ul className = "  flex justify-center list pl-22">
            <li className="lg:ml-10 font-semibold  " >
            <NavLink to="/">Home</NavLink>
           
            </li>
            <li className="lg:ml-8 font-semibold " >
              <NavLink to="/services">Services</NavLink>
           
            </li >
            <li className="lg:ml-8 font-semibold " >
              <NavLink to="/courses">Courses</NavLink>
           
            </li>
            <li  className="lg:ml-8 font-semibold ">
              <NavLink to="/startup">Startups</NavLink>
            
            </li>
            <li className="lg:ml-8 font-semibold">
              <NavLink to="/activities">Activities</NavLink>
            
            </li>
            <li className="lg:ml-8 font-semibold">
              <NavLink to="/about">About us</NavLink>
          
            </li>
            <li className="lg:ml-8 font-semibold">
              <NavLink to="/contact">Contact us</NavLink>
          
            </li>
            <li className="lg:ml-8 font-semibold">
              <NavLink to="/login">Login</NavLink>
          
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
      </div>
    </>
  );
};

export default Navbar;