import React from "react";
import "./OurProjects.css";
import coop from '../../assets/foodcoop.avif'


const OurProjects = () => {
  return (
    
    <div className="our-project">
      <div className="ourprojects-main">

</div>
      <div className="projects-section">
        <div className="main">
          <img src={coop} alt="food-cooperative" width={400} height={400}  />
          <div className="about-text">
            <h1>Food Cooperative  </h1>
            <h5>Food co-ops are run by volunteers from the community, come in all shapes and sizes and can be found in a variety of settings, – from community centres, schools, universities, church halls or workplaces. Unlike food banks, Food Co-ops are not just for people in food crises. They are open to everyone.</h5>
              <p>We believe everyone has the right to good food. One of our key Good Food Goals for the city is to ensure that everyone; has access to, has choice over and can afford; nourishing, healthy and culturally appropriate food.

But if you are struggling to afford or access food, there are a number of systems in place to help, which we have signposted below. </p>
          </div>

        </div>

      </div>
      
     
     
    </div>
  );
};

export default OurProjects;

          
      
     