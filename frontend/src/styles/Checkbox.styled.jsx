import styled from "styled-components";

import checkPng from "../images/check.png";
import checkSvg from "../images/icon-check.svg";
import { devices } from "./Global";

export const Label = styled.label`
  color: ${(props) => (props.theme === "light" ? "#9697A7" : "#F2F2F2")};
  @media ${devices.mobileS} {
    font-size: 0.75rem;
  }
  @media ${devices.mobileM} {
    font-size: 1rem;
  }
`;
export const StyledInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  position: relative;
  display: inline-block;
  &:hover {
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box;
    border: 2px solid transparent;
  }
  &:checked {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))
      border-box;
    border-radius: 100%;
  }
  &:checked:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${checkSvg}) no-repeat center center/cover;
    border-radius: 100%;
  }
  @media ${devices.mobileS} {
    width: 1.25rem;
    height: 1.25rem;
    border: 0.125rem solid gray;
    border-radius: 100%;
    margin-right: 1.5625rem;
    margin-left: 0.625rem;
    &:checked {
      border: 0.125rem solid transparent;
    }
    &:checked:before {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  @media ${devices.mobileM} {
    width: 1.25rem;
    height: 1.25rem;
    border: 0.125rem solid gray;
    border-radius: 100%;
    margin-right: 1.5625rem;
    margin-left: 0.625rem;
    &:checked {
      border: 0.125rem solid transparent;
    }
    &:checked:before {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
`;
