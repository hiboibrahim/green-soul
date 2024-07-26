import React from "react";
import "./Team.css";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <img src={team1}></img>
          <h3>Sanab Hersi</h3>
          <h5>Founder of Greensoul</h5>
          <div className="icons">
            <p>fb icons</p>
          </div>
        </div>
        <div className="box">
          <img src={team2}></img>
          <h3>Sanab Hersi</h3>
          <h5>Founder of Greensoul</h5>
          <div className="icons">
            <p>fb icons</p>
          </div>
        </div>
        <div className="box">
          <img src={team1}></img>
          <h3>Sanab Hersi</h3>
          <h5>Founder of Greensoul</h5>
          <div className="icons">
            <p>fb icons</p>
          </div>
        </div>
        <div className="box">
          <img src={team2}></img>
          <h3>Sanab Hersi</h3>
          <h5>Founder of Greensoul</h5>
          <div className="icons">
            <p>fb icons</p>
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
