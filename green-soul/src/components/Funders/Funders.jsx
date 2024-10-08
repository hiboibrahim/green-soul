import React from 'react'
import './Funders.css'
import funders1 from '../../assets/funders/funders1.jpg'
import funders2 from '../../assets/funders/funders2.png'
import funders3 from '../../assets/funders/funders3.jpg'
import funders4 from '../../assets/funders/funders4.webp'
import funders6 from '../../assets/funders/funder6.jpg'
import { Link } from 'react-router-dom'


const Funders = () => {

  return ( 
    <>
  <div className='funder-text justify-content-center align-items-center mt-4 pt-5 '>
        <h5>
        We deeply appreciate the generous support of our funders and supporters, whose contributions enable Green Soul to make a meaningful impact in our community.
  
      </h5>
      <h5 className='pt-3'>
      Interested in making a difference? Fund Green Soul to support vital community programs and help us combat food insecurity and promote well-being.
      </h5>
      </div>
      <div className='btn-container pb-4'>
          <Link to="/contact">
            <button className="btn btn-fund" >Be a Funder </button>
          </Link>
        </div>
    <div className='funders'>
      
        
        <div className='funders-item'>
           <img src={funders1} alt='' />

        </div>
        <div className='funders-item'>
        <img src={funders2} alt=''  />

        </div>
        <div className='funders-item'>
        <img src={funders3} alt='' />

        </div>
        <div className='funders-item'>
        <img src={funders4} alt='' />

        </div>
        <div className='funders-item'>
        <img src={funders6} alt='' />

        

        </div>

    </div>
    
    </>
  )
}

export default Funders
