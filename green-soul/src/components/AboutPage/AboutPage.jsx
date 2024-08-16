import React from "react";
import Logo from "../../assets/Logo4.png";

const AboutPage = () => {
  return (
    <>
      

      <section id="intro">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <div class="block">
              <div class="section-title">
                <h2 className="pb-3">About Us</h2>
                {" "}
              We support marginalised groups, those from lower income
              backgrounds, women and people of colour in engaging in wider
              society.              </div>
              <p className="about-p">   Green Soul is a grassroots community organisation centred on
              social inclusion. We actively seek to challenge urban inequalities
              and work with disadvantaged groups where people are marginalised
              through poverty or lack of opportunity. Through our growing
              projects we aim to have a transformational impact on people’s
              physical and mental health, isolation and loneliness. Our
              ‘asset-based’ approach means we choose not to focus on ill-health
              or problems, but rather to inspire and nurture people, realising
              their gifts and skills. As community gardens grow, so do the
              people. We want to see lives transformed through community
              gardening, becoming connected, supportive, healthier, empowered
              and joyful.</p>
            </div>
          </div>
          <div class="about-img col-md-5 col-sm-12">
            <div class="block">
              <img className="pt-5 order-1 floating " src={Logo}  alt="Img"  />
            </div>
          </div>
        </div>
      </div>
    </section>

  <section id="feature">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-6 order-2">

          <h2 className="activities-title">Community Activities</h2>
          
          {" "}

            Green Soul are committed to promoting equity, well-being, and
            environmental stewardship through collaborative and inclusive
            activities. 
          

          <p className="activities-p pt-3"> 
            <span style={{ "font-weight": "bold" }}>
              Sip and Social Groups: 
            </span> {" "}
             Foster community connections through casual meet-ups and
            discussions.
          </p>
          <p className="activities-p">
            <span style={{ "font-weight": "bold" }}>Family Activities:</span>{" "}
            Gardening and Forest School: Engage families in hands-on
            environmental education and outdoor activities.
          </p>
          <p className="activities-p">
            
            <span style={{ "font-weight": "bold" }}>
              Food and Nutrition Support:
            </span>{" "}
            Whole-Foods Co-operative: Provide access to affordable, fresh, and
            dry goods.{" "}
          </p>
          <p className="activities-p">
            {" "}
            <span style={{ "font-weight": "bold" }}>
              Creative and Environmental Engagement:
            </span>{" "}
            Arts and Crafts Sessions to encourage creativity and
            self-expression.
          </p>
          <p className="activities-p">
            {" "}
            <span style={{ "font-weight": "bold" }}>
              Climate Conversations:
            </span>{" "}
            Facilitate discussions on environmental issues and sustainability.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
        
    </>
  );
};

export default AboutPage;
