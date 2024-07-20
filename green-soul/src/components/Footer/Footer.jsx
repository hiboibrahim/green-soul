import React from "react";
import "./Footer.css";
import footerimg from "../../assets/footerimg.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
       
        <div className="all-rights" >
          <p>© 2024 Green Soul Cardiff. All Rights Reserved

</p>
<div className="socials">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />

        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
