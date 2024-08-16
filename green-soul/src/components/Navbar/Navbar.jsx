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
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light rounded p-0">
<div class="container-fluid">

      <a class="navbar-brand text-info font-weight-bolder" href="/">
      <div class="social-btns pb-2 ">
    <a class="btn facebook" href="#"><FiFacebook /></a>
    <a class="btn twitter" href="#"><FiInstagram /></a>
    <a class="btn youtube" href="#"><FiTwitter /></a>
    <a class="btn instagram" href="#"><FaSlack /></a>

  </div>      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ourprojects">OUR PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/contact">CONNECT WITH US</a>
        </li>
        
      </ul>

      </div>
      </div>
    </nav>

   
    </>
     
  );
};

export default Navbar;
