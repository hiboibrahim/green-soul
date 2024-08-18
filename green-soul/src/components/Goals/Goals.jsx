import React from "react";
import "./Goals.css";
import value1 from '../../assets/value1.png'
import value2 from '../../assets/value2.png'
import value3 from '../../assets/value3.png'
import { RiMentalHealthLine } from "react-icons/ri";
import { FaRecycle } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";







const Goals = () => {

  
  return (
    <>
    <section id="about" class="bg-one">
			<div class="container">
				<div class="row">
				
					
					
					<div class="col-md-4 text-center wow fadeInUp" data-wow-duration="500ms" >
						<div class="wrap-about">							
							<div class="icon-box">
              <FaPaintBrush className="goals-icon"  size={50} />

							</div>					
							<div class="about-content text-center">
								<h3>Equity and Inclusion</h3>								
								<p className="goals-p">Empowering all voices through inclusive and accessible artistic expression.</p>
							</div>
						</div>
					</div> 
					
					<div class="col-md-4 text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="250ms">
						<div class="wrap-about">
							<div class="icon-box">
              <FaRecycle className="goals-icon"  size={50} />
							</div>
							<div class="about-content text-center">
								<h3>Sustainability and Health</h3>
								<p className="goals-p">Combating food insecurity and promoting sustainable health for people and the planet.</p>
							</div>
						</div>
					</div> 
					
					<div class="col-md-4 text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
						<div class="wrap-about kill-margin-bottom">
							<div class="icon-box">
              <RiMentalHealthLine className="goals-icon" size={50}/>
							</div>
							<div class="about-content text-center">
								<h3>Community Empowerment</h3>
								<p className="goals-p"> Strengthening communities and well-being through support and education.
                </p>
							</div>
						</div>
					</div> 
					
				</div> 		
			</div>   	
		</section>   
   </>
   
    

  )
    
      
};

export default Goals;


