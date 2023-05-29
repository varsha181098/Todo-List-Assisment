import React from "react";
import "../Styles/Lists.css";
import { TbMoneybag } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import Todo from "./Todo";
function Lists() {
  return (
    <div className="list">
      <div className="list-1">
        <h1 className="things">List : Things To Buy</h1>
        <h1 className="things">List : Empty List</h1>
        <h1 className="things">Add todo-List</h1>
      </div>
      <div className="list-2">
        <div className="todos">
          <div className="header-logo">
            <span>
              <TbMoneybag />
            </span>
            <h2>Add Todo</h2>
            <div className="plus">
              <FaPlus />
            </div>
          </div>
          <h4>Add Todo Description</h4>
        </div>

        <div className="todos">
          <div className="header-logo">
            <span>
              <TbMoneybag />
            </span>
            <h2>Add Todo</h2>
            <div className="plus">
              <FaPlus />
            </div>
          </div>
          <h4>Add Todo Description</h4>
        </div>
        <div>
        </div>
      </div>
      <Todo/>
    </div>
  );
}

export default Lists;
