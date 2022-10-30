import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDoList from "./ToDoList";
function ToDoForm() {
  const inputRef = useRef();
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        placeholder="Create a new todo"
        ref={inputRef}
        onKeyDown={handleAddTodo}
      />
      <ToDoList />
    </div>
  );
}

export default ToDoForm;
