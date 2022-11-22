import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../Context/ToDoContext";
import { Label, StyledInput } from "../styles/Checkbox.styled";
import { ThemeContext } from "../Context/ThemeStore";

const Checkbox = ({ data }) => {
  const { editCompletedTodo } = useContext(TodoContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    editCompletedTodo(data._id);
    console.log(data._id);
  };
  return (
    <>
      <StyledInput
        onChange={handleChange}
        type="checkbox"
        id={data._id}
        checked={data.completed}
        theme={theme}
      />
      <Label htmlFor={data._id} theme={theme}>
        {data.name}
      </Label>
    </>
  );
};

export default Checkbox;
