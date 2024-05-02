import React from "react";
import "./OurProjects.css";
import gallery_1 from "../../assets/gallery_1.jpg";
import gallery_2 from "../../assets/gallery_2.jpg";
import gallery_3 from "../../assets/gallery_3.jpg";
import gallery_4 from "../../assets/gallery_4.jpg";

const OurProjects = () => {
  return (
    <div className="our-projects">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn">Learn more </button>
    </div>
  );
};

export default OurProjects;
