import React from "react";
import "./Goals.css";
import { FaPaintBrush } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";

const Goals = () => {
  return (
    <div className="goals">
      <div className="title">
          <p>Our Goals</p>

          
          </div>
          <div className="goal-1">
             <FaPaintBrush size={50}  />
            <p>
            Giving access and opportunity to communities of colour in the arts/creative sector.

            </p>

          </div>
           
            <div className="goal-2 ">
              <GiPlantRoots size={50}  />
              <p>
              Greening and climate action resources .
              </p>
            </div>
            
            <div className="goal-3">
              <IoFitnessOutline size={50}  />
              <p>
              Improve mental and physical health and wellbeing
              </p>
            </div>
     
      </div>
  );
};

export default Goals;
