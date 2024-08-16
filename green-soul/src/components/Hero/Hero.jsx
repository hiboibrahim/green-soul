import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo1.png'
import hero from '../../assets/community.avif'

const Hero = () => {

  return (
    <div class="banner">
    <div class="container">
        <div class="row">
        <h1 class="display-4 fw-bold ">GREEN SOUL -</h1>
        <p className='fw-bold'>Re-connecting to ourselves and nature <br /> through community-led action.</p>


            <div class="col-sm-5 text-center">
                <button href='/about' class="btn ">Learn More</button>
            </div>
            <div class="col-sm-7">

                
            </div>
        </div>
    </div>
</div>
  
  )
}

export default Hero