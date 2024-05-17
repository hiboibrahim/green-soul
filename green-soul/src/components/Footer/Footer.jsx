import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


const sections = [
  {
    title: '&copy; 2024 Green Soul All rights reserved.',
    items:[ 'Privacy Policy', 'Web Design']
  },
  {
    title: 'Green Soul',
    items:[ 'About Us', 'Our Projects', 'Upcoming events', 'Blog', 'Contact Us', 'Volunteer with Us']
  },

]
const items = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/'
  }

]
const Footer = () => {
  return (
    <div className='footer'>
       
       <div class="footerContainer">
        <div class="socialIcons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-google-plus"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="footerNav">
            <ul><li><a href="">Home</a></li>
                <li><a href="">Upcoming Projects</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Volunteer with Us</a></li>
            </ul>
        </div>
        
    </div>
    <div class="footerBottom">
        <p>&copy; 2024 Green Soul All rights reserved. <span class="designer">Noman</span></p>
    </div>
    </div>
  )
}

export default Footer