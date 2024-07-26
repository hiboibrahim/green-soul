import React from 'react'
import './Funders.css'
import funders1 from '../../assets/funders/funders1.jpg'
import funders2 from '../../assets/funders/funders2.jpg'
import funders3 from '../../assets/funders/funders5.png'
import funders4 from '../../assets/funders/funders4.webp'



const Funders = () => {

  return (
    <div className='funders'>
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

    </div>
  )
}

export default Funders
