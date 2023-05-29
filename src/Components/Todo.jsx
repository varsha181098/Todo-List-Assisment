import React from 'react'
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineModeEdit } from "react-icons/md";
import "../Styles/Todo.css"
function Todo() {
  return (
    <div>
       <div className="todos">
          <div className="header-logo">
            <span>
              <TbMoneybag />
            </span>
            <h2>Carrot</h2>
            <div className="plus">
              <MdOutlineModeEdit />
            </div>
          </div>
          <h4>Carrot Improves eyesight.</h4>
        </div>
       <div className="todos">
          <div className="header-logo">
            <span>
              <TbMoneybag />
            </span>
            <h2>Bicycle</h2>
            <div className="plus">
              <MdOutlineModeEdit />
            </div>
          </div>
          <h4>Bicycle makes cummuting</h4>
        </div>
    </div>
  )
}

export default Todo
