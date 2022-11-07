import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light");

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
