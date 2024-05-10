import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/Logo1.png'


const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className='about-us'>
      
    </div>

    <div className='about-section'>

    <div className='main'>
            <img src={Logo} width={400} height={400} alt="logo"></img>
          
    
    <div className='about-text'>
    <h1>About Green Soul </h1>
             
             <h5> We support marginalised groups, those from lower income backgrounds, women and people of colour in engaging in wider society.</h5>
             
             <p>Green Soul is a grassroots community organisation centred on social inclusion. Green soul is a Community Interest group ......</p>
           </div>
           </div>
           </div>
           
    
    </>
  )
}

export default AboutPage