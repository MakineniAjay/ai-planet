import logo from "../images/aiplanet-logo.png"
import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="logo_img">
            <img src={logo} alt="logo"/>
        </div>
    </div>
  )
}

export default Navbar
