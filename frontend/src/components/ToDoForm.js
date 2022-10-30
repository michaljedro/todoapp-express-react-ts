import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDoList from "./ToDoList";
import { FaMoon } from "react-icons/fa";
import { ToDoFormBox, ToDoFormHeader } from "../styles/TodoForm.styled";
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
    <ToDoFormBox>
      <ToDoFormHeader>
        <h1>TODO</h1>
        <FaMoon />
      </ToDoFormHeader>
      <input
        placeholder="Create a new todo"
        ref={inputRef}
        onKeyDown={handleAddTodo}
      />
      <ToDoList />
    </ToDoFormBox>
  );
}

export default ToDoForm;
