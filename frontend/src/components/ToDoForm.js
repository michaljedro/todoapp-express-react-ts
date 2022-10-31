import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDoList from "./ToDoList";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  ToDoFormBox,
  ToDoFormHeader,
  Header,
  Input,
} from "../styles/TodoForm.styled";
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
        <Header>TODO</Header>
        {false ? (
          <FaMoon
            style={{ color: "white", fontSize: "14px", marginTop: "11px" }}
          />
        ) : (
          <FaSun
            style={{ color: "white", fontSize: "34px", marginTop: "11px" }}
          />
        )}
      </ToDoFormHeader>
      <Input
        placeholder="Create a new todo..."
        ref={inputRef}
        onKeyDown={handleAddTodo}
      />

      <ToDoList />
    </ToDoFormBox>
  );
}

export default ToDoForm;
