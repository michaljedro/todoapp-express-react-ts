import styled from "styled-components";
import { FaMoon } from "react-icons/fa";
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
export const BoxForm = styled.div`
  width: 541px;
  margin: 70px;
  height: 152px;
  width: 540px;
`;
export const TodoText = styled.h1`
  font-size: 30px;
  font-weight: normal;
  color: white;
  letter-spacing: 21px;
`;
export const Moon = styled(FaMoon)`
  color: white;
`;
export const InputBoxStyle = styled.div`
  height: 76px;
`;
export const InputStyle = styled.input`
  height: 64px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
