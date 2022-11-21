import React, { useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import {
  ToDoItem,
  ToDoBox,
  InputTodo,
  LabelTodo,
  SpanTodo,
} from "../styles/ToDo.styled";
import Checkbox from "./Checkbox";
import { ThemeContext } from "../Context/ThemeStore";

function ToDo({ data }) {
  const { deleteTodo } = useContext(TodoContext);
  const checkboxRef = useRef();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <ToDoBox theme={theme}>
      <Checkbox data={data} />
    </ToDoBox>
  );
}

export default ToDo;
