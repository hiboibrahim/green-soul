import React from "react";
import "./Footer.css";
import footerbg from "../../assets/footer-bg.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { FaSlack } from "react-icons/fa"



const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        
       
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
   
   
  
  <div className="social">
          <h6>Follow us </h6>
          <FiFacebook />
            <FiInstagram />
            <FiTwitter />
            <FaSlack />

        </div>
        
 
    </div>
  );
};

export default Footer;

