import React from 'react'
import './Funders.css'
import funders1 from '../../assets/funders/funders1.jpg'
import funders2 from '../../assets/funders/funders2.jpg'
import funders3 from '../../assets/funders/funders3.jpg'
import funders4 from '../../assets/funders/funders4.webp'
import funders6 from '../../assets/funders/funders6.jpg'
import Fade from 'react-reveal/Fade';



const Funders = () => {

  return (
    <div className='funders'>
      <Fade>
        <div className='funders-item'>
           <img src={funders1} alt='' />

        </div>
        <div className='funders-item'>
        <img src={funders2} alt='' />

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
        </Fade>

    </div>
  )
}

export default Funders
