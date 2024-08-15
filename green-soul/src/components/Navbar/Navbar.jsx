import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon1.png";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {FaBars, FaSlack } from 'react-icons/fa'
import logo from '../../assets/Logo1.png'

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  

  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
<div class="container-fluid">

      <a class="navbar-brand text-info font-weight-bolder" href="/">
        <img src={logo} alt="Logo" width="36" height="36" className="vertical-align-middle" />
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">OUR PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">CONNECT WITH US</a>
        </li>
        
      </ul>

      </div>
      </div>
    </nav>

   
    </>
     
  );
};

export default Navbar;
