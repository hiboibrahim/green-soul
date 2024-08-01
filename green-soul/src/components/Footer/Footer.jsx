import React from "react";
import "./Footer.css";
import footerbg from "../../assets/footer-bg.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { FaSlack } from "react-icons/fa"
import footerline from '../../assets/footer-line.png'



const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-line" src={footerline}  />
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
          <a>Get in Touch</a>
        </div>
        

      </div>
   
   
  
  <div className="social">
         <a href="/"> <FiFacebook /></a>
            <a href="/"><FiInstagram /></a>
           <a href="/"> <FiTwitter /></a>
           <a href="/">  <FaSlack /></a>

           

        </div>
        
 
    </div>
  );
};

export default Footer;

