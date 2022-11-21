import styled from "styled-components";
import { devices } from "./Global";
export const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${(props) =>
    props.theme === "light" ? "#F9F9F9" : "#171823"};
  margin-bottom: 2.6rem;
  color: ${(props) => (props.theme === "light" ? "#9697A7" : "#5B5E7E")};
`;

export const FooterText = styled.p`
  @media ${devices.mobileS} {
    font-size: 0.7rem;
  }
  @media ${devices.mobileM} {
    font-size: 1rem;
  }
`;
