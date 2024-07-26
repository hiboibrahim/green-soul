import React from "react";
import "./Goals.css";
import { FaPaintBrush } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
import value1 from '../../assets/value1.png'
import value2 from '../../assets/value2.png'
import value3 from '../../assets/value3.png'




const Goals = () => {

  
  return (
    <div className="goals-title">
      
      <div className="goals">
        <Fade>
        <div className="goals-fadein">
          <img src={value1} alt="arts image" />
          <h3>Giving access and opportunity to communities of colour in the arts & creative sector.</h3>

        </div>
        <div className="goals-fadein">
        <img src={value2} alt="arts image" />
        <h3>Education surrounding greening and climate action.</h3>

        </div>

        <div className="goals-fadein">
        <img src={value3} alt="arts image" />

          <h3>Improve mental and physical health and wellbeing through nature</h3>

        </div>
        </Fade>

      </div>

    </div>
    

  )
    
      
};

export default Goals;


