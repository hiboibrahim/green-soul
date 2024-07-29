import React from 'react'
import './Review.css'
import community from '../../assets/community.avif'
import community1 from '../../assets/communitygardening.jpg'

const Review = () => {
  return (
    <div className='review-container'>
      <div className='review-title'>
        <div className='review-text'>
          <p>
             "Green Soul has transformed our community by creating spaces where everyone can connect with nature, express their creativity, and access vital resources. Their commitment to inclusivity and sustainability has not only improved lives but also inspired a collective spirit of resilience and empowerment."</p>

        </div>
        <div className='image'> 
          <img src={community} alt='community' />
          <img src={community1} alt='community' />

        </div>

      </div>
        
        
        </div>
  )
}

export default Review