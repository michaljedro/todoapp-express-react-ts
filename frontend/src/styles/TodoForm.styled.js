import styled from "styled-components";
import backgorundImage from "../images/bg-desktop-light.jpg";
export const AplicationStyled = styled.div`
  height: 300px;
  background-color: red;
  background-image: url(${backgorundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;
export const ToDoFormBox = styled.div`
  margin-top: 70px;
  border: 1px solid black;
`;
export const ToDoFormHeader = styled.div`
  display: flex;
`;
