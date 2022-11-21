import styled from "styled-components";
import backgorundImage from "../images/bg-desktop-light.jpg";
import lightBackgroundImageMobile from "../images/bg-mobile-light.jpg";
import darkBackgroundImageMobile from "../images/bg-mobile-dark.jpg";
import { devices } from "./Global";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ToDoHeader = styled.div`
  @media ${devices.mobileS} {
    height: 12.5rem;
    background-image: url(${(props) =>
      props.theme === "light"
        ? lightBackgroundImageMobile
        : darkBackgroundImageMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
export const TextHeader = styled.h1`
  @media ${devices.mobileS} {
    width: 6.75rem;
    height: 1.25rem;
    color: white;
    font-size: 1.25rem;
    letter-spacing: 0.75rem;
  }
`;
export const ToDoFormBox = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    justify-content: space-between;
    width: 15rem;
    align-items: center;
    padding-top: 3rem;
  }
`;
export const InputTodo = styled.input`
  @media ${devices.mobileS} {
    width: 15rem;
    height: 3rem;
    margin-top: 2.4rem;
    background-color: ${(props) =>
      props.theme === "light" ? "#FFFFFF" : "#25273D"};
  }
  border: none;
  border-radius: 0.2rem;
  padding-left: 1.5rem;
`;
