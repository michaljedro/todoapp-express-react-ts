import React, { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDo from "./ToDo";
import {
  ItemsActivity,
  BoxActivityItems,
  ButtonCompleted,
  MobileActivityItems,
  SpanAction,
  TodoList,
  SpanLeft,
} from "../styles/ToDoList.styled";
import { ThemeContext } from "../Context/ThemeStore";
import { useState } from "react";

function ToDoList() {
  const { theme } = useContext(ThemeContext);
  const {
    todoList,
    addTodo,
    deletedeleteTodoTodo,
    deleteMany,
    editCompletedTodo,
    activeTodos,
    completedTodos,
  } = useContext(TodoContext);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDelete = () => {
    const checkedIds = todoList
      .filter((todo) => todo.completed)
      .map((todo) => todo._id);
    deleteMany(checkedIds);
  };
  const handleAll = () => {
    setActive(false);
    setCompleted(false);
  };
  const handleActive = () => {
    setActive(true);
    setCompleted(false);
  };
  const handleCompleted = () => {
    setActive(false);
    setCompleted(true);
  };

  let todos = [];

  if (!active && !completed) {
    todos = todoList;
  } else if (active && !completed) {
    todos = activeTodos;
  } else {
    todos = completedTodos;
  }

  return (
    <TodoList>
      <div>
        <div>
          {todos &&
            todos.map((todo) => (
              <ToDo key={`todo_item-${todo._id}`} data={todo} />
            ))}
          <ItemsActivity theme={theme}>
            <SpanLeft>{todos?.length} items left</SpanLeft>
            <BoxActivityItems theme={theme}>
              <button onClick={handleAll}>All</button>
              <button onClick={handleActive}>Active</button>
              <button onClick={handleCompleted}>Completed</button>
            </BoxActivityItems>
            <ButtonCompleted onClick={handleDelete} theme={theme}>
              Clear Completed
            </ButtonCompleted>
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
