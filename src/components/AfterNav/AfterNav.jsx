import React from 'react'
import "./afternav.css";
const AfterNav = (props) => {
  return (
    <div className='afternav-wrap'>
      <div className='overlay'>

      </div>
      <div className='a-content'>
            <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default AfterNav
