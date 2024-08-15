import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo1.png'
import hero from '../../assets/community.avif'

const Hero = () => {

  return (
    <div className='hero container-fluid '>
      
      <div className='hero-text'>

      <h1 className='hero-text pt-5 text-right pb-5 '>Rooted in Community, Growing Together for a Better Tomorrow.</h1>
      
     <div className=' text-center hero-btn pt-2'>
        <Link to='/ourprojects'> 
         <button className='btn btn-hero align-items-center'  > Learn More </button>

    </Link>
</div>

        </div> 
   

    </div>
  
  )
}

export default Hero