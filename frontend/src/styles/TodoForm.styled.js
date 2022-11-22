import styled from "styled-components";
import desktopLightBackgroundImage from "../images/bg-desktop-light.jpg";
import desktopDarkBackgroundImage from "../images/bg-desktop-dark.jpg";
import mobileLightBackgroundImage from "../images/bg-mobile-light.jpg";
import mobileDarkBackgroundImage from "../images/bg-mobile-dark.jpg";
import { devices } from "./Global";

export const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) =>
    props.theme === "light"
      ? mobileLightBackgroundImage
      : mobileDarkBackgroundImage});
  @media ${devices.desktop} {
    background-image: url(${(props) =>
      props.theme === "light"
        ? desktopLightBackgroundImage
        : desktopDarkBackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 20rem;
  @media ${devices.desktop} {
    width: 30rem;
    margin: 0 auto;
  }
`;

export const InnerContainer = styled.div`
  width: 19rem;
  margin-bottom: 8rem;

  @media ${devices.desktop} {
    width: 30rem;
  }
`;
export const ToDoHeader = styled.div`
  @media ${devices.mobileS} {
    height: 12.5rem;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 3rem;
`;
export const InputTodo = styled.input`
  width: 100%;
  height: 3rem;
  margin-top: 2.4rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};

  border: none;
  border-radius: 0.2rem;
  padding-left: 1.5rem;
`;
