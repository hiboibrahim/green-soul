import React from "react"
import { goals } from "../Data/Data"
import value2 from '../../assets/value2.png'

const GoalsCards = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {goals.map((items, index) => (
          <div className='box' key={index}>
            <img src={value2} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default GoalsCards