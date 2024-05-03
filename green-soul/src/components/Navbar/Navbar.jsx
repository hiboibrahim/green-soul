import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/green-soul-logo.png";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);

    });
  });
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
     {/* <img src={logo} alt="" className="logo" />*/}
      <ul>
        <li>
        <a href="/" >Home</a> 
        </li>
        
        <li>
        <a href="/about" >About Us</a> 
        </li>
        <li>
        <a href="/ourprojects" >Home</a> 
        </li>
        <li>
        <a href="/contact" >Get Involved</a> 
        </li>
        <li>
        <a href="/contact" >Contact Us</a> 
        </li>
        <li>
        <a href="/events" >Upcoming Events</a> 
        </li>
        <li>Blog</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
