import React from "react";
import "../Styles/Section.css";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineInsertChart } from "react-icons/md";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
function Section() {
  return (
    <div className="section">
      <div className="home">
      <span><AiOutlineAppstore /></span><h1>Home</h1> 
      </div>
      <div className="Section-1">
      <span><MdOutlineInsertChart /></span><h1>Section 1</h1> 
      </div>
      <div className="Section-2">
      <span><MdOutlineCandlestickChart /></span><h1>Section 2</h1> 
      </div>
      <div className="Section-8">
      <span><BsShareFill /></span><h1>Section 8</h1> 
      </div>
      <div className="section-8">
      <span><BsShareFill /></span><h1>Section 8</h1> 
      </div>
    </div>
  );
}

export default Section;
