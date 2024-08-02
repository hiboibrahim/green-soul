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
          <a>Get in Touch</a>
        </div>
        

      </div>
   
   
  
  <div className="social">
         <a href="/"> <FiFacebook /></a>
            <a href="/"><FiInstagram /></a>
           <a href="/"> <FiTwitter /></a>
           <a href="/">  <FaSlack /></a>
           <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="newsletter-form"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
                </div>

           

        </div>
       
        
 
    </div>
  );
};

export default Footer;

