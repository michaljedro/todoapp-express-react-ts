import styled from "styled-components";
import backgroundLightDesktop from "../images/bg-desktop-light.jpg";
import backgroundLightMobile from "../images/bg-mobile-light.jpg";
import backgroundDarkDesktop from "../images/bg-desktop-dark.jpg";
import backgroundDarkMobile from "../images/bg-mobile-dark.jpg";
import { devices } from "./Global";
export const Container = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.background};
  }
  @media ${devices.mobileM} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.background};
  }
`;
