import React from "react";
import bulb from "../images/bulb.png"
import "../styles/header.css"
import { Link } from "react-router-dom";
import Body from "./Body";
const Header = () => {
  return (
  <div>
    <div className="headline">
        <div className="head_text">
            <h1 className="headline_title">
                Hackathon Submissions
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="headline_cont">
            <Link to="/submission" className="btn">Upload Submission</Link>
            </div>  
        </div>
        <div>
            <img className="bulb_img" src={bulb} alt="bulb"/>
        </div>      
    </div>
    <Body/>
  </div>
  );
};

export default Header;
