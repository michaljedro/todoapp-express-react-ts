import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDoList from "./ToDoList";
import { FaMoon } from "react-icons/fa";
import { ToDoFormBoxStyles } from "../styles/TodoForm.styled";
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
    <ToDoFormBoxStyles>
      <div>
        <h1>TODO</h1>
        <FaMoon />
      </div>
      <input
        placeholder="Create a new todo"
        ref={inputRef}
        onKeyDown={handleAddTodo}
      />
      <ToDoList />
    </ToDoFormBoxStyles>
  );
}

export default ToDoForm;
