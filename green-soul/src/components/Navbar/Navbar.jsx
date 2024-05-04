import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/green-soul-logo.png";
import { Link } from "react-router-dom";

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
        <Link  to ='hero'>Home</Link>
 
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
       
        <li>
          <Link to='/getinvolved'>Get involved</Link>
        </li>
        <li>
        <Link  to ='/events'>Upcoming Events </Link>
        </li>
        
       
        <li>
        <Link  to ='/blog'>Blog</Link>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
      <img src="" alt="" />
    </nav>
  );
};

export default Navbar;
