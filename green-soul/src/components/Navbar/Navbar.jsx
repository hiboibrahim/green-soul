import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo1.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {FaBars } from 'react-icons/fa'

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-nav">
      <div className="logo">
        <img src={logo} alt="logo" />

      </div>
      
      <ul className= {isOpen ? "nav-link active" : "nav-link"}>
      <li>
          <Link to="/" className="active">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>

        <li>
          <Link to="/ourprojects">OUR PROJECTS</Link>
        </li>
        <li>
          <Link to="/events">UPCOMING EVENTS </Link>
        </li>

        
        <li>
          <Link to="/contact">
            <button className="btn">Connect</button>
          </Link>
        </li>


      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />

      </div>

    </div>
    
     
  );
};

export default Navbar;
