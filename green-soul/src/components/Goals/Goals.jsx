import React from "react";
import "./Goals.css";

import Fade from 'react-reveal/Fade';
import value1 from '../../assets/value1.png'
import value2 from '../../assets/value2.png'
import value3 from '../../assets/value3.png'
import GoalsCards from "../GoalsCard/GoalsCards";




const Goals = () => {

  
  return (
    <section className='goals background'>
        <div className='container'>
          <GoalsCards />
        </div>
      </section>
    

  )
    
      
};

export default Goals;


