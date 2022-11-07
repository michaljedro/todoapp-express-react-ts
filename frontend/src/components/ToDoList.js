import React, { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDo from "./ToDo";
import {
  ItemsLeft,
  ActivityItems,
  BoxActivityItems,
  ButtonCompleted,
  InfoLabelFooter,
} from "../styles/ToDoList.styled";
import { ThemeContext } from "../Context/ThemeStore";
function ToDoList() {
  const { theme } = useContext(ThemeContext);
  const { todoList, deleteTodo } = useContext(TodoContext);
  console.log(todoList?.length);
  return (
    <div
      style={{
        display: "block",
        borderRadius: "5px",
      }}
    >
      {todoList &&
        todoList
          .slice(0, 5)
          .map((todo) => <ToDo key={`todo_item-${todo._id}`} data={todo} />)}
      <InfoLabelFooter theme={theme}>
        <ItemsLeft>{todoList?.length} items left</ItemsLeft>
        <BoxActivityItems>
          <ActivityItems theme={theme}>All</ActivityItems>
          <ActivityItems theme={theme}>Active</ActivityItems>
          <ActivityItems theme={theme}>Completed</ActivityItems>
        </BoxActivityItems>

        <ButtonCompleted theme={theme}>Clear Completed</ButtonCompleted>
      </InfoLabelFooter>
    </div>
  );
}

export default ToDoList;
