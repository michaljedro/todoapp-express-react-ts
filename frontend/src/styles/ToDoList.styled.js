import styled from "styled-components";
import { devices } from "./Global";
export const TodoList = styled.div`
  display: block;
  border-radius: 1rem;
  margin-top: 1rem;
`;
export const SpanAction = styled.span`
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
  :hover {
    color: #3a7cfd;
  }
  @media ${devices.mobileS} {
    font-size: 0.7rem;
  }
`;
export const MobileActivityItems = styled.div`
  display: none;
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 19rem;
  height: 3rem;
  border-radius: 0.3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 3rem;

  @media ${devices.desktop} {
    display: none;
  }
`;
export const BoxActivityItems = styled.div`
  display: none;

  @media ${devices.desktop} {
    display: inline-block;

    > button {
      margin: 0 1rem;
      appearance: none;
      border: none;
      background-color: transparent;
      font-size: 0.6rem;
      color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
      cursor: pointer;
      :hover {
        color: #3a7cfd;
      }
    }
  }
`;
export const SpanLeft = styled.span`
  @media ${devices.mobileS} {
    font-size: 0.6rem;
    color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
  }
  @media ${devices.mobileM} {
    font-size: 0.6rem;
    color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
  }
`;
export const ButtonCompleted = styled.button`
  @media ${devices.mobileS} {
    font-size: 0.6rem;
    color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
    background-color: ${(props) =>
      props.theme === "light" ? "#FFFFFF" : "#25273D"};
    cursor: pointer;
    :hover {
      color: #3a7cfd;
    }
  }
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};
  border: none;
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  :hover {
    color: #3a7cfd;
  }
`;
export const ItemsActivity = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    background-color: ${(props) =>
      props.theme === "light" ? "#FFFFFF" : "#25273D"};
  }
  border: 1px ${(props) => (props.theme === "light" ? "#E3E4F1" : "#393A4B")}
    solid;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  padding-right: 1.2rem;
  padding-left: 1.2rem;
`;
