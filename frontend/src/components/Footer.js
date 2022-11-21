import React, { useContext } from "react";
import { FooterBox, FooterText } from "../styles/Footer.styled";
import { ThemeContext } from "../Context/ThemeStore";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterBox theme={theme}>
      <FooterText>Drag and drop to reorder list</FooterText>
    </FooterBox>
  );
}

export default Footer;
