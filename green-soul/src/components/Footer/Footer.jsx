import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Socials from '../../components/Socials/Socials'




function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
Subscribe to stay up to date with our upcoming projects        </p>
        
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
           
            <Link to='/about'>About us</Link>
            
          </div>
          <div class='footer-link-items'>
            
            <Link to='/ourprojects'>Our Projects</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/contact'>Contact Us</Link>
           
          </div>
          <div class='footer-link-items'>
          </div>
          < Socials />

        </div>
      </div>
      <div class='social-media-wrap'>
          <small class='website-rights'>Green Soul © 2024</small>
          
        </div>
     
    </div>
  );
}

export default Footer;