import React from "react";
import './Navbar.css'
import logo from '../../assets/greensoul-logo.png'

const Navbar = () => {
  return (
    <nav className="container"> 
        <img src={logo} alt="" className="logo" />
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our projects</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Upcoming Events</li>
            <li><button className="btn">Contact Us</button></li>

        </ul>

    </nav>
  )
}

export default Navbar