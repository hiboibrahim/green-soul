import React from 'react'
import './About.css'
import aboutimg from '../../assets/communitygardening.jpg'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'


const About = () => {
  return (
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
          <div class="col-md-5 col-sm-12">
            <div class="block">
              <img className="pt-5" src={aboutimg}  alt="Img" />
            </div>
            <Link to="/about">
<button Link to='/ourprojects' className='btn'> Our Projects</button>
          </Link>
          
          </div>
        </div>
      </div>
    </section>

          
         

      
  )
}

export default About