import React from 'react'
import './About.css'
import activities from '../../assets/activities-img.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section id="feature">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <div class="block">
              <div class="section-title">
                <h2 className="pb-3">Who Are We?</h2>
                {" "}
              We support marginalised groups, those from lower income
              backgrounds, women and people of colour in engaging in wider
              society.              </div>
              <p className="about-p  pt-3">   Green Soul is a grassroots community organisation centred on
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
              <Link to="/ourprojects">
<button Link to='/ourprojects' className='btn'> Our Projects</button>
          </Link>
            </div>
          </div>
          <div class="col-md-5 col-sm-12">
            <div class="block">
              
            </div>
            
          
          </div>
        </div>
        
      </div>
    </section>

          
         

      
  )
}

export default About