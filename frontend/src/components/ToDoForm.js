import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import {
  FormStyled,
  TodoText,
  BoxForm,
  Moon,
  InputStyle,
  InputBoxStyle,
} from "../styles/TodoForm.styled";
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
    // <div>
    //   <BoxForm>
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "space-between",
    //         height: "76px",
    //       }}
    //     >
    //       <TodoText>TODO</TodoText>
    //       <Moon />
    //     </div>
    //     <InputBoxStyle>
    //       <InputStyle
    //         // value={userInput}
    //         type="text"
    //         ref={inputRef}
    //         // onChange={handleChange}
    //         placeholder="Create a new todo... "
    //       />
    //     </InputBoxStyle>
    //     <button
    //       style={{
    //         height: "32px",
    //         padding: "12px",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         borderRadius: "6px",
    //         backgroundColor: "#8351D4",
    //         border: "none",
    //         marginLeft: "auto",
    //         color: "whitesmoke",
    //         fontSize: "14px",
    //         fontWeight: "bold",
    //       }}
    //       onClick={handleAddTodo}
    //     >
    //       Add task
    //     </button>
    //     <ToDoList />
    //   </BoxForm>
    // </div>
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
