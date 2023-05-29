import React from "react";
import "../Styles/Sidebar.css";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Section from "./Section";
function Sidebar() {
  return (
    <div className="sidebar">
     <div className="sidebar-1">
      <div className="sidebar-logo">
        <h3>N</h3>
      </div>
      <div className="sidebar-name">
      <h3>Name</h3>
        <span><FaLongArrowAltLeft/> </span>
      </div>
      </div>
      <Section/>
      </div>
     
   
  );
}

export default Sidebar;
