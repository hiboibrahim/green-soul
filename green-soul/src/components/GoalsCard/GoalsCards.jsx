import React from "react"
import { goals } from "../Data/Data"

const GoalsCards = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {goals.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default GoalsCards