import React, { useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import { ToDoItem, ToDoBox } from "../styles/ToDo.styled";
function ToDo({ data }) {
  const { deleteTodo } = useContext(TodoContext);
  const checkboxRef = useRef();

  return (
    <ToDoBox>
      <input ref={checkboxRef} type="checkbox" id={data._id} />
      <label
        style={{
          color: "#494C6B",
          fontWeight: "normal",
          marginLeft: "34px",
        }}
        for={data._id}
      >
        {data.name}
      </label>
    </ToDoBox>
  );
}

export default ToDo;
