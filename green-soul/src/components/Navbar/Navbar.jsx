import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {FaBars, FaSlack } from 'react-icons/fa'

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-nav">
      <div className="social-icons top">
        <a><FiFacebook /></a>
       <a><FiInstagram /></a> 
       <a><FiTwitter /></a> 
       <a><FaSlack /></a> 
       

      </div>
      
      <ul className= {isOpen ? "nav-link active" : "nav-link"}>
      <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/ourprojects">Our Projects</Link>
        </li>
        

        
        <li>
          <Link to="/contact">
            <button className="btn">Connect</button>
          </Link>
        </li>


      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menu_icon} />

      </div>

    </div>
    
     
  );
};

export default Navbar;
