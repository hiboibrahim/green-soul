import React from "react";
import "./Activities.css";
import '../AboutPage/AboutPage.css';
import activities from "../../assets/activities-img.png";

const Activities = () => {
  return (
    <div className="about-section container-fluid pt-0">
      <div className="main activities-right d-flex flex-column flex-lg-row  p-3 ">
        <div className=" about-text d-flex flex-column justify-content-center align-items-center p-4 order-2 order-lg-1 ms-1">
          <h1>Community Activities</h1>
          <h3>
            Green Soul are committed to promoting equity, well-being, and
            environmental stewardship through collaborative and inclusive
            activities. 
          </h3>

          <p>
            <span style={{ "font-weight": "bold" }}>
              Sip and Social Groups:
            </span>
            Foster community connections through casual meet-ups and
            discussions.
          </p>
          <p>
            <span style={{ "font-weight": "bold" }}>Family Activities:</span>
            Gardening and Forest School: Engage families in hands-on
            environmental education and outdoor activities.
          </p>
          <p>
            
            <span style={{ "font-weight": "bold" }}>
              Food and Nutrition Support:
            </span>
            Whole-Foods Co-operative: Provide access to affordable, fresh, and
            dry goods.{" "}
          </p>
          <p>
            {" "}
            <span style={{ "font-weight": "bold" }}>
              Creative and Environmental Engagement:
            </span>
            Arts and Crafts Sessions to encourage creativity and
            self-expression.
          </p>
          <p>
            {" "}
            <span style={{ "font-weight": "bold" }}>
              Climate Conversations:
            </span>
            Facilitate discussions on environmental issues and sustainability.{" "}
          </p>
        </div>
        <img
          src={activities}
          width={480}
          height={500}
          alt="A collage of community activities"
          className="order-1 order-lg-2"
        />
      </div>
    </div>
  );
};

export default Activities;
