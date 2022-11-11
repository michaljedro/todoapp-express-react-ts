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
import { ThemeContext } from "../Context/ThemeStore";
import Theme from "../styles/Global";

function ToDoForm() {
  const inputRef = useRef();
  const { addTodo } = useContext(TodoContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { test, setTest } = useState(false);

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
        {theme === "light" ? (
          <button
            onClick={() => setTheme("dark")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginBottom: "auto",
            }}
          >
            <FaMoon
              style={{
                color: "white",
                fontSize: "34px",
              }}
            />
          </button>
        ) : (
          <button
            onClick={() => setTheme("light")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginBottom: "auto",
            }}
          >
            <FaSun style={{ color: "white", fontSize: "34px" }} />
          </button>
        )}
      </ToDoFormHeader>
      <Input
        theme={theme}
        placeholder="Create a new todo..."
        ref={inputRef}
        onKeyDown={handleAddTodo}
      />

      <ToDoList />
    </ToDoFormBox>
  );
}

export default ToDoForm;
