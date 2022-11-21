import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContext, ThemeStore } from "../Context/ThemeStore";

const themes = {
  dark: {
    background: "#171823",
    input: "#25273D",
    veryDarkBlue: "hsl(235, 21%, 11%)",
    veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
    lightGrayishBlue: "hsl(234, 39%, 85%)",
    lightGrayishBlueHover: "hsl(236, 33%, 92%)",
    darkGrayishBlue: "hsl(234, 11%, 52%)",
    veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
  },
  light: {
    background: "#FAFAFA",
    veryLightGray: "hsl(0, 0%, 98%)",
    veryLightGrayBlue: "hsl(236, 33%, 92%)",
    lightGrayishBlue: "hsl(233, 11%, 84%)",
    darkGrayishBlue: "hsl(236, 9%, 61%)",
    veryDarkGrayishBlue: " hsl(235, 19%, 35%)",
  },
  background: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
};
const sizes = {
  mobileS: "375px",
  mobileM: "376px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  html {
    font-size:14px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }

`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
