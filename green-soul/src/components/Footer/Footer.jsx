import React from "react";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='content-wrapper'>
      {" "}
      
      <footer class="footer">  

        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="/">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/about">
              About us
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/ourprojects">
              Our Projects
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/contact">
              Connect With Us
            </a>
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
