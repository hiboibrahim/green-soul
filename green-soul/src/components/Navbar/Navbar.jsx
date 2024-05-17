import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo1.png";
import menu_icon from '../../assets/menu-icon.png'

import { Link } from "react-router-dom";

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
     <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li>
        <Link  to ='/'>HOME</Link>
 
        </li>
        <li>
          <Link to='/about'>ABOUT US</Link>
        </li>
       
        <li>
          <Link to='/ourprojects'>OUR PROJECTS</Link>
        </li>
        <li>
        <Link  to ='/events'>UPCOMING EVENTS </Link>
        </li>
       
        <li>
        <Link  to ='/blog'>BLOG</Link>
        </li>
        <li>
          <Link to='/contact'>
          <button className="btn">Contact Us</button></Link>

        </li>
      </ul>

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
