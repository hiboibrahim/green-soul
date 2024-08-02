import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo1.png'


const Hero = () => {
  return (
    
    <div className='hero container'>
      <div className='hero-text'>
        <img src={logo} />

      <h1>Rooted in Community, Growing Together for a Better Tomorrow.</h1>
    <Link to='/ourprojects'> 
         <button className='btn btn-hero'  > Our Projects </button>

    </Link>


        </div> 
    

    </div>
  )
}

export default Hero