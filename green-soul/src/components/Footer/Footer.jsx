import React from "react";
import "./Footer.css";
import footerbg from "../../assets/footer-bg.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";



const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h2>Green Soul</h2>
          <p>Nurturing Communities, Cultivating Change.</p>
        </div>
        <div className="social-icons">
          <a href="/">
          <FiFacebook />
          </a>
          <a href="/">
            <FiInstagram />
          </a>
          <a href="/">
            <FiTwitter />
          </a>

        </div>
      </div>
      <div className="bottom"> 
        <div>
          <a>Home</a>
        </div>
        <div>
          <a>About Us</a>
        </div>
        <div>
          <a>Our Projects</a>
        </div>
        <div>
          <a>Get in touch</a>
        </div>

      </div>
   
   
  
  
 
    </div>
  );
};

export default Footer;

