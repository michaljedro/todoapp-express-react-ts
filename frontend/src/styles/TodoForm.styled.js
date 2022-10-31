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
export const Header = styled.h1`
  letter-spacing: 17px;
  color: white;
  margin-bottom: 58px;
`;

export const ToDoFormBox = styled.div`
  margin-top: 70px;
`;
export const ToDoFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 540px;
  height: 64px;
  margin-bottom: 24px;
  padding-left: 73px;
`;
