import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/Logo3.png'


const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className='about-us'>
      
    </div>

    <div className='about-section'>

    <div className='main'>
            <img className='spin-logo' src={Logo} width={480} height={500} alt="logo" />
          
    
    <div className='about-text'>
    <h1>Who are We </h1>
             
             <h5> We support marginalised groups, those from lower income backgrounds, women and people of colour in engaging in wider society.</h5>
             
             <p>Green Soul is a grassroots community organisation centred on social inclusion. We actively seek to challenge urban inequalities and work with disadvantaged groups where people are marginalised through poverty or lack of opportunity. Through our growing projects we aim to have a transformational impact on people’s physical and mental health, isolation and loneliness. 

Our ‘asset-based’ approach means we choose not to focus on ill-health or problems, but rather to inspire and nurture people, realising their gifts and skills. As community gardens grow, so do the people. We want to see lives transformed through community gardening, becoming connected, supportive, healthier, empowered and joyful.</p>
           </div>
           </div>
           </div>
        
    
    </>
  )
}

export default AboutPage




