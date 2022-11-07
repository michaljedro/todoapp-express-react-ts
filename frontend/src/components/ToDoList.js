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
function ToDoList() {
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
      <InfoLabelFooter>
        <ItemsLeft>{todoList?.length} items left</ItemsLeft>
        <BoxActivityItems>
          <ActivityItems>All</ActivityItems>
          <ActivityItems>Active</ActivityItems>
          <ActivityItems>Completed</ActivityItems>
        </BoxActivityItems>

        <ButtonCompleted>Clear Completed</ButtonCompleted>
      </InfoLabelFooter>
    </div>
  );
}

export default ToDoList;
