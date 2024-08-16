import React from "react";
import "./OurProjects.css";
import foodcoop from '../../assets/foodcoop.png'
import communitymeals from '../../assets/community-meals1.png'


const OurProjects = () => {
  return (
    <>
    <div className="our-project main justify-content-center align-items-center mt-4 pt-4 pb-1 pe-5 ps-5">
      <h2 className="text-center">Nourishing Communities and Building Connections</h2>
      <p className="lh-3" >At the heart of our mission is a commitment to fostering well-being and community through thoughtful, impactful projects. Our initiatives are designed to address various aspects of food security and community cohesion, ensuring that everyone has access to nutritious food and a supportive network. Building ttronger communities, one meal at a time.</p>

     
    </div>

<section id="intro" >
  <div className="container pt-4 pb-5">
    <div className="row">
      <div className="col-md-7 col-sm-12">
        <div className="block">
          <div className="section-title">
            <h2>Food Cooperative</h2>
          </div>
          <p className="section-p">Food co-ops are run by volunteers from the community, come in all shapes and sizes and can be found in a variety of settings, – from community centres, schools, universities, church halls or workplaces. Unlike food banks, Food Co-ops are not just for people in food crises. They are open to everyone.
          We believe everyone has the right to good food. One of our key Good Food Goals for the city is to ensure that everyone; has access to, has choice over and can afford; nourishing, healthy and culturally appropriate food. But if you are struggling to afford or access food, there are a number of systems in place to help, which we have signposted below. </p>
        </div>
      </div>
      <div className="col-md-5 col-sm-12">
        <div className="block">
          <img src={foodcoop} width={500} height={400} alt="Img" />
        </div>
      </div>
    </div>
  </div>
</section>


<section id="intro">
  <div className="container pt-0">
    <div className="row">
      <div className="col-md-7 col-sm-12">
        <div className="block">
          <div className="section-title">
            <h2>Community Meals</h2>
          </div>
        <p className=" section-p">Green Soul’s Community Meals program is designed to combat food insecurity and foster a sense of community through nutritious and affordable meal options. This initiative provides hot meals and food boxes to marginalized individuals and families, ensuring that everyone has access to fresh, wholesome food.
        We offer regular community dinners featuring balanced and nutritious meals prepared with fresh, locally-sourced ingredients. These meals are designed to cater to diverse dietary needs and preferences, ensuring inclusivity and satisfaction. By providing free or low-cost meals, we address immediate food needs, reduce hunger, and create opportunities for social interaction and community building.</p>
        </div>
      </div>
      <div className="col-md-5 col-sm-12">
        <div className="block">
          <img src={communitymeals} width={500} height={400} alt="Img" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>


    
  );
};

export default OurProjects;

          
      
     