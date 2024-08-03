import React from "react";
import "./Activities.css";
import activities from "../../assets/activities.png";

const Activities = () => {
  return (
    <div className="activities">
      
      <div className="activities-right">
        <h1>Community Activities</h1>
        <h5>
          Green Soul are committed to promoting equity, well-being, and
          environmental stewardship through collaborative and inclusive
          activities.  We support diverse voices and talents, fostering a sense of belonging and agency.
        </h5>
            
          
          <p>Sip and Social Groups: Foster community
          connections through casual meet-ups and discussions.</p>
          <p>Family
          Activities: Gardening and Forest School: Engage families in hands-on
          environmental education and outdoor activities.</p>
          <p> Food and Nutrition
          Support: Whole-Foods Co-operative: Provide access to affordable,
          fresh, and dry goods. </p>
          <p> Creative and
          Environmental Engagement: Arts and Crafts Sessions: Encourage
          creativity and self-expression.</p>
          <p> Climate Conversations: Facilitate
          discussions on environmental issues and sustainability. </p>

      </div>
      <div className="activities-left">
        <img src={activities} width={600} height={600} alt="" />
      </div>
    </div>
  );
};

export default Activities;
