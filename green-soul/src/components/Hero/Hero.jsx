import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo1.png'
import hero from '../../assets/community.avif'

const Hero = () => {
  return (
    
    <div className='hero container-fluid'>
      
      <div className='hero-text'>
        <img src={logo} />

      <h1 className='text-left'>Rooted in Community, Growing Together for a Better Tomorrow.</h1>
    <Link to='/ourprojects'> 
         <button className='btn btn-hero'  > Learn More </button>

    </Link>


        </div> 
    

    </div>
  )
}

export default Hero