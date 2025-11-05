import React from 'react'
import "./CommonSection.css"

const CommonSection = ({title}) => {
  return (
    <div className='common__section'>
    <h1>{title}</h1> 
    </div>
  )
}

export default CommonSection