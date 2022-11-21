import styled, { keyframes } from "styled-components";
import { devices } from "./Global";

export const ToDoBox = styled.div`
  border: 1px ${(props) => (props.theme === "light" ? "#E3E4F1" : "#393A4B")}
    solid;
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};
  @media ${devices.mobileS} {
    height: 2rem;
    width: 15rem;
    display: flex;
    align-items: center;
    &:first-child {
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }
  }
  @media ${devices.mobileM} {
    height: 3rem;
    width: 19rem;
    display: flex;
    align-items: center;
    &:first-child {
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }
  }
`;
