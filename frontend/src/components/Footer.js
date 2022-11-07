import React, { useContext } from "react";
import { FooterComponents, FooterParagraph } from "../styles/Footer.styled";
import { ThemeContext } from "../Context/ThemeStore";

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <FooterComponents theme={theme}>
      <FooterParagraph>Drag and Drop to reorder list</FooterParagraph>
    </FooterComponents>
  );
}

export default Footer;
