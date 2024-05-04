import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/green-soul-logo.png";
import { Link } from "react-router-dom";
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);

    });

  },[]);

      const [mobileMenu, setMobileMenu] = useState(false);
      const toggleMenu = ()=> {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

      }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
     {/* <img src={logo} alt="" className="logo" />*/}
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
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

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
