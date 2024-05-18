import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div class="container">
    <div class="row">
      <div class="footer-col">
        <h4>Green Soul</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Projects</a></li>
          <li><a href="#">Contact Us</a></li>
          
        </ul>
      </div>
      <div class="footer-col">
        <h4>get help</h4>
        <ul>
        <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Blog</a></li>
        
        </ul>
      </div>
     
      <div class="footer-col">
        <h4>follow us</h4>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Footer