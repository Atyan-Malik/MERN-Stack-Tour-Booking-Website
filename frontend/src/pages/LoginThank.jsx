import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/thankYou.css"



const LoginThank = () => {
  return (
    <div className='thank-box'>
     <i class="ri-checkbox-circle-line"></i>
     <h2 className="thank_h">ThankYou</h2>
     <h5 className='heading__text'>
      You are Login Successfully !
     </h5>
     <button className='primary__btn'>
      <Link to="/home">Back to Home</Link>
     </button>
    </div>
  )
}

export default LoginThank