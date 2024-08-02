import React from "react";
import "./Footer.css";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { FaSlack } from "react-icons/fa"



const Footer = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <h3>Useful Links</h3>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/ourprojects">Our Projects</a>
        <a href="/contact">Connect With Us</a>

      </div>
      <div className="col-2">
        <h3>Subscribe to receive our Newsletter</h3>
        <form>
        <input type="text" placeholder="Email Address" required ></input>
        <br/>
        <button className="btn">Subscribe Now</button>
        </form>

      </div>
      <div className="col-3">
        <h3>Follow us </h3>
        <div className="social-icons"> 
         <a> <FiFacebook /></a>
        <a> <FiInstagram /></a>
        <a><FiTwitter /></a>
        <a> <FaSlack />
      </a>

        </div>
       
      </div>


    </div>
   

           

        
  );
};

export default Footer;

