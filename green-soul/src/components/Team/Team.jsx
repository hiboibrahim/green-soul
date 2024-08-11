import React from "react";
import "./Team.css";
import Sanab from '../../assets/team/Sanab.png'

import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <section className="team">
      <div className="center">
        <h1>Our People</h1>
        <h2></h2>
      </div>
      <div className="team-content">
        <div className="box">
          <img src={Sanab}></img>
          <h3>Sanab Hersi</h3>
          <h5>Director</h5>
          <div className="icons">
            <p></p>
          </div>
        </div>
        <div className="box">
          <img src={Sanab}></img>
          <h3>Hibo Ibrahim</h3>
          <h5>Operations</h5>
          <div className="icons">
            <p></p>
          </div>
        </div>
        <div className="box">
          <img src={Sanab}></img>
          <h3>Safiyyah</h3>
          <h5>Community Engagement</h5>
          <div className="icons">
            <p></p>
          </div>
        </div>
        <div className="box">
          <img src={Sanab}></img>
          <h3>Kadra Ahmed</h3>
          <h5>Food Coordinator</h5>
          <div className="icons">
            <p></p>
          </div>
        </div>
        
        
      </div>
      <div>
          <Link to="/contact">
            <button className="btn" >Volunteer With Us</button>
          </Link>
        </div>
    </section>
  );
};

export default Team;
