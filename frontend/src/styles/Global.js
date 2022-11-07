import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContext, ThemeStore } from "../Context/ThemeStore";

const themes = {
  dark: {
    background: "#171823",
    input: "#25273D",
  },
  light: {
    background: "#FAFAFA",
  },
  tablet: "992px",
  mobile: "576px",
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body {
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
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
