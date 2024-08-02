import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    
    <div className='hero container'>
      <div className='hero-text'>
      <h1>Rooted in Community, Growing Together for a Better Tomorrow.</h1>
    <Link to='/ourprojects'> 
         <button className='btn btn-hero'  > Our Projects </button>

    </Link>


        </div> 
    

    </div>
  )
}

export default Hero