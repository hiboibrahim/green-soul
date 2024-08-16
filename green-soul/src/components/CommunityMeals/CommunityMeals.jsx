import React from 'react'
import communitymeals from '../../assets/community-meals.jpg'
import './CommunityMeals.css'

const CommunityMeals = () => {
  return (
    
    <div className='community-meals'>
         <div className="community-right">
        <h1>Community Meals</h1>
        <h5>
        Green Soul’s Community Meals program is designed to combat food insecurity and foster a sense of community through nutritious and affordable meal options. This initiative provides hot meals and food boxes to marginalized individuals and families, ensuring that everyone has access to fresh, wholesome food.
        </h5>
            
          
          <p>  We offer regular community dinners featuring balanced and nutritious meals prepared with fresh, locally-sourced ingredients. These meals are designed to cater to diverse dietary needs and preferences, ensuring inclusivity and satisfaction.
          By providing free or low-cost meals, we address immediate food needs, reduce hunger, and create opportunities for social interaction and community building.</p>

      </div>
      <div className='community-left p-0'>
      <img src={communitymeals} width={500} height={400} alt="" />


      </div>
     
    </div>
  )
}

export default CommunityMeals