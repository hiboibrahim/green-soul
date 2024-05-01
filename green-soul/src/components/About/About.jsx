import React from 'react'
import './About.css'
import about_1 from '../../assets/about_1.avif'
import our_team from '../../assets/our_team.jpg'

const About = () => {
  return (
    <>
    <div className='about'>About Us
    <img src={about_1} alt='' />
    
    </div>
    <div className='our-team'> Our Team </div>
    <img src={our_team} alt='' />

    </>
  )
}

export default About