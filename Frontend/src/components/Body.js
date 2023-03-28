import React from "react";
// import { DropdownButton } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { NavLink, Route, Routes } from "react-router-dom";
import Allsub from "./Allsub"
import '../styles/body.css'
import Favsub from "./Favsub";

const Body = () => {
    return(
    <>
    <div className="filter">
      <ul className="sub">
        <li>
          <NavLink to="/" className="sub_link">All Submissions</NavLink>
        </li>
        <li>
          <NavLink to="/favsub" className="sub_link">Favourite Submissions</NavLink>
        </li>
      </ul>
      <div className="type">
        <input type="text" placeholder="Search" className="search"/>
        <span>Newest</span>
      </div>
    </div>
    
    <Routes>
      <Route path="/" element={<Allsub />} />
      <Route path="/favsub" element={<Favsub/>} />
    </Routes>
    
    </>
    )
}

export default Body;
