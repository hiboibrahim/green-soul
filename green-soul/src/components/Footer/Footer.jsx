import React from "react";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaSlack } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='content-wrapper'>
      {" "}
      
      <footer class="footer">  

        <ul class="menu">
        <li>
      <Link to="/" className="menu__item menu__link">Home</Link>
    </li>
    <li>
      <Link to="/about" className="menu__item nav-link menu__link">About Us</Link>
    </li>
    <li>
      <Link to="/ourprojects" className="menu__item nav-link menu__link">Our Projects</Link>
    </li>
    <li>
      <Link to="/contact" className="menu__item menu__link">Connect With Us</Link>
    </li>
        </ul>
        <div class="footer_copyright">
      <p>&copy; 2024 Green Soul. All Rights Reserved.</p>
    </div>
       
               

        
    
    
      </footer>
    </div>
  );
};

export default Footer;
