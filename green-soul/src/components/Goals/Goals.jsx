import React from "react";
import "./Goals.css";
import { FaPaintBrush } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
import art from '../../assets/goals-art.png'


const Goals = () => {

  
  return (
    <div className="goals-title">
      
      <div className="goals">
        <Fade>
        <div className="goals-fadein">
          <img src={art} alt="arts image" />
          <h3>Giving access and opportunity to communities of colour in the arts/creative sector</h3>

        </div>
        <div className="goals-fadein">
        <img src={art} alt="arts image" />
        <h3>Greening and climate action resource</h3>

        </div>

        <div className="goals-fadein">
        <img src={art} alt="arts image" />

          <h3>Improve mental and physical health and wellbeing</h3>

        </div>
        </Fade>

      </div>

    </div>
    

  )
    
      
};

export default Goals;


