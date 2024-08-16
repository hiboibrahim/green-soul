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
            <a class="menu__link" href="#">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              About us
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Our Projects
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Connect With Us
            </a>
          </li>
        </ul>
       
    <div class="social-btns ">
    <a class="btn facebook " href="#"><FiFacebook /></a>
    <a class="btn twitter" href="#"><FiInstagram /></a>
    <a class="btn youtube" href="#"><FiTwitter /></a>
    <a class="btn instagram" href="#"><FaSlack /></a>

  </div>
        
    
    
      </footer>
    </div>
  );
};

export default Footer;
