import React from "react";
import "./Goals.css";

import Fade from 'react-reveal/Fade';
import value1 from '../../assets/value1.png'
import value2 from '../../assets/value2.png'
import value3 from '../../assets/value3.png'
import GoalsCards from "../GoalsCard/GoalsCards";




const Goals = () => {

  
  return (
    <>
    <div className="card-container">
   <div className="goals-card" alt='first goal'>
    <img src={value1} />
    <h2>Equity and Inclusion</h2>
    <p>  Empowering all voices through inclusive and accessible art.
    </p>
    

   </div>
   <div className="goals-card" alt='first goal'>
    <img src={value2} />
    <h2>Sustainability and Health</h2>
    <p>Combating food insecurity and promoting sustainable health for people and the planet.

    </p>
    

   </div>
   <div className="goals-card" alt='first goal'>
    <img src={value3} />
    <h2>Community Empowerment</h2>
    <p>"Building stronger communities and enhancing well-being through support and Education.

    </p>
    

   </div>
   </div>

   </>
   
    

  )
    
      
};

export default Goals;


