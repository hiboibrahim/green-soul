import React from 'react'
import './About.css'
import aboutimg from '../../assets/communitygardening.jpg'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='about'>

    <Fade>
      <div className='about-left'>
      <img src= {aboutimg} width={450} height={400} alt='' />
        </div>
        <div className='about-right'>
          <h2>Green Soul is a grassroots community organisation centred on social inclusion.</h2>

          <h3>We support marginalised groups, those from lower income backgrounds, women and people of colour in engaging in wider society.</h3>
          
          <p>Our mission is community led action that creates capacity for transformational shifts. We work for and within communities to create transformative experiences and provide opportunity for them to thrive. Our work focuses on building community resilience through holistic, healing practical action. At Green Soul, we are dedicated to fostering a brighter, more inclusive future for all. 

We firmly believe in the power of community, environmental stewardship, artistic expression, and healing as catalysts for positive change. Our mission is to provide opportunities and create safe spaces for people of colour to engage in forms of personal growth.</p>
<Link to="/about">
<button Link to='/ourprojects' className='btn'> Our Projects</button>
          </Link>
          
          
         

        </div>


  </Fade>


    </div>
  )
}

export default About