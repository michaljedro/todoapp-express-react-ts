import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(null);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);

  console.log(todoList);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:4444/todos");
      const data = await response.json();
      setTodoList(data);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    if (!todoList) {
      return;
    }
    const completed = todoList.filter((todo) => todo.completed);
    const active = todoList.filter((todo) => !todo.completed);

    setCompletedTodos(completed);
    setActiveTodos(active);
  }, [todoList]);

  const addTodo = async (name) => {
    const response = await fetch("http://localhost:4444/todos/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const newTodo = await response.json();
    setTodoList((prev) => [...prev, newTodo]);
  };

  const editCompletedTodo = async (id) => {
    const response = await fetch("http://localhost:4444/todos/edit/" + id, {
      method: "PATCH",
    });
    const updatedTodo = await response.json();
    const newTodos = [...todoList];
    console.log(newTodos);
    console.log(id);
    const index = newTodos.findIndex((todo) => todo._id === id);
    newTodos.splice(index, 1, updatedTodo);
    setTodoList(newTodos);
  };

  const deleteTodo = async (id) => {
    await fetch("http://localhost:4444/todos/" + id, {
      method: "DELETE",
    });
    setTodoList((prev) => prev.filter((todo) => todo._id !== id));
  };

  const deleteMany = async (ids) => {
    try {
      const response = await fetch("http://localhost:4444/todos/deletemany", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idsToDelete: ids }),
      });
      const data = await response.json();
      setTodoList(data);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    todoList,
    addTodo,
    deleteTodo,
    deleteMany,
    editCompletedTodo,
    activeTodos,
    completedTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
