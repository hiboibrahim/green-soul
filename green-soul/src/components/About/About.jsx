import React from 'react'
import './About.css'
import about_1 from '../../assets/about_1.jpg'

const About = () => {
  return (
    <div className='about'> 
      <div className='about-left'>
      <img src= {about_1} width={300} height={300} alt='' />
        </div>
        <div className='about-right'>
          <h2>Green Soul is a grassroots community organisation centred on social inclusion.</h2>
          <h3>We support marginalised groups, those from lower income backgrounds, women and people of colour in engaging in wider society.</h3>
          <p>Our mission is community led action that creates capacity for transformational shifts. We work for and within communities to create transformative experiences and provide opportunity for them to thrive. Our work focuses on building community resilience through holistic, healing practical action.</p>
         

        </div>

    </div>
  )
}

export default About