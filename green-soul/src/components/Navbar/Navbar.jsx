import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon1.png";
import { Link, NavLink } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {FaBars, FaSlack } from 'react-icons/fa'
import logo from '../../assets/Logo1.png'

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  

  return (
<>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light rounded p-0">
<div class="container-fluid">

      <a class="navbar-brand text-info font-weight-bolder" href="/">
      <div class="layout_item w-25 pt-3">
                  <ul class="flex">
                    <li className="social-media">
                      <FiFacebook />
                    </li>
                    <li  className="social-media">
                      <FiInstagram />
                    </li>
                    <li  className="social-media">
                     <FiTwitter />
                    </li>
                    <li  className="social-media">
                     <FaSlack />
                    </li>
                  </ul>
                  
                </div>     </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
      <ul class="navbar-nav">
      <li>
      <NavLink to="/" className="nav-link">Home</NavLink>   
       </li>
    <li>
    <NavLink to="/about" className="nav-link">About Us</NavLink>   
     </li>
    <li>
    <NavLink to="/ourprojects" className="nav-link">Our Projects</NavLink>   
    </li>
    <li>
    <NavLink to="/contact" className="nav-link fw-bold">CONNECT WITH US</NavLink>   
    </li>
        
      </ul>

      </div>
      </div>
    </nav>

   
    </>
     
  );
};

export default Navbar;
