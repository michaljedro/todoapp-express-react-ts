import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:4444/todos");
      const data = await response.json();
      setTodoList(data);
    };
    fetchTodos();
  }, []);
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

  const deleteTodo = async (id) => {
    const response = await fetch("http://localhost:4444/todos/" + id, {
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
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
