import React from 'react'
// import office from '../images/Office.png'
import '../styles/card.css'
const card = (props) => {
  return (
    <div className='card'>
      <div className="title">
        {/* <img className='title_img' src={office} alt="" /> */}
        <img className='title_img' src={`data:image/png;base64,${props.str}`} alt="" />
        <h3>{props.title}</h3>
      </div>
      <p className='summary'>{props.description}</p>
      <span className='time'>Uploaded 6 days ago</span>
    </div>
  )
}

export default card
