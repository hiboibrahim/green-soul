import React from 'react'
import './Goals.css'
import { FaPaintBrush } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";




const Goals = () => {
  return (
    <div className='goals'>
        <div>
              <p>Our Goals</p>
        </div>
        
      

            <div>
                <FaPaintBrush />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quis ab ea dignissimos delectus soluta eaque, veritatis beatae exercitationem omnis ipsam repudiandae repellendus harum impedit aliquid accusantium autem alias illum!</p>
       
       <div>
                <GiPlantRoots />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed nemo optio enim similique quos. Illo beatae placeat odio, ratione autem quasi officiis officia quo, tempora quisquam enim eaque soluta!</p>
       </div>
        <div>
             <IoFitnessOutline />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quia omnis cum placeat non itaque? Deserunt quas unde hic ipsam! Mollitia perspiciatis numquam at cumque? Perferendis tempora consectetur quo laudantium?</p>  
        </div>
     


            </div>
        
    </div>
  )
}

export default Goals