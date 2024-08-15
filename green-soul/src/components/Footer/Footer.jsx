import React from "react";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='content-wrapper'>
      {" "}
      
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>

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
        <p className="copyright-text">Made with 🤍 Hiba Ibrahim</p>
      </footer>
    </div>
  );
};

export default Footer;
