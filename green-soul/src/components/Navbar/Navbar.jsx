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
        <li>Home</li>
        <li>About Us</li>
        <li>Our projects</li>
        <li>Contact Us</li>
        <li>Upcoming Events</li>
        <li>Blog</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
