import styled from "styled-components";

export const ToDoBox = styled.div`
  padding: 24px;
  width: 540px;
  border: 1px #e3e4f1 solid;
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};
  display: flex;
  align-items: center;
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
