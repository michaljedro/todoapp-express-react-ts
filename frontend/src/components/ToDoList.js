import React, { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDo from "./ToDo";
import {
  ItemsLeft,
  ActivityItems,
  ItemsActivity,
  BoxActivityItems,
  ButtonCompleted,
  InfoLabelFooter,
  MobileActivityItems,
  SpanAction,
  TodoList,
  SpanLeft,
} from "../styles/ToDoList.styled";
import { ThemeContext } from "../Context/ThemeStore";
function ToDoList() {
  const { theme } = useContext(ThemeContext);
  const { todoList, deleteMany } = useContext(TodoContext);
  console.log(todoList?.length);
  return (
    <TodoList>
      <div>
        <div>
          {todoList &&
            todoList.map((todo) => (
              <ToDo key={`todo_item-${todo._id}`} data={todo} />
            ))}
          <ItemsActivity theme={theme}>
            <SpanLeft>{todoList?.length} items left</SpanLeft>
            <BoxActivityItems theme={theme}>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </BoxActivityItems>
            <ButtonCompleted theme={theme}>Clear Completed</ButtonCompleted>
          </ItemsActivity>
        </div>
      </div>
      <MobileActivityItems theme={theme}>
        <SpanAction theme={theme}>All</SpanAction>
        <SpanAction theme={theme}>Active</SpanAction>
        <SpanAction theme={theme}>Completed</SpanAction>
      </MobileActivityItems>
    </TodoList>
  );
}

export default ToDoList;
