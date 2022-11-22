import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDoList from "./ToDoList";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  ToDoHeader,
  ToDoFormBox,
  ToDoFormHeader,
  Header,
  Input,
  TextHeader,
  InputTodo,
  Container,
  InnerContainer,
  BackgroundImage,
} from "../styles/TodoForm.styled";
import { ThemeContext } from "../Context/ThemeStore";

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
    <BackgroundImage theme={theme}>
      <Container>
        <ToDoHeader theme={theme}>
          <InnerContainer>
            <ToDoFormBox>
              <TextHeader>TODO</TextHeader>
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
                      fontSize: "1.3rem",
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
                  <FaSun style={{ color: "white", fontSize: "1.3rem" }} />
                </button>
              )}
            </ToDoFormBox>
            <InputTodo
              theme={theme}
              placeholder="Create a new todo..."
              ref={inputRef}
              onKeyDown={handleAddTodo}
            />

            <ToDoList />
          </InnerContainer>
        </ToDoHeader>
      </Container>
    </BackgroundImage>
  );
}

export default ToDoForm;
