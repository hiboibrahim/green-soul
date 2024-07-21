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
      <img src={footerbg} alt="footer-bg" className="footer-bg" />
   
      <div className="footer-container ">
      <ul className="footer-menu">
<li className="footer-items"><a href="">Home</a></li>
<li className="footer-items"><a href="">About Us</a></li>
<li className="footer-items"><a href="">Our Projects</a></li>
<li className="footer-items"><a href="">Food Co-operative</a></li>
<li className="footer-items"><a href="">Get in touch</a></li>

</ul>
<div class="copyright-text">
                            <p>Copyright &copy; 2024, Green Soul All Right Reserved </p>
                           
                        </div>
         
      </div>
      <div className="socials">
  
  <FiFacebook />
  <FiTwitter />
  <FiInstagram />

  </div>
      
    </div>
  );
};

export default Footer;

