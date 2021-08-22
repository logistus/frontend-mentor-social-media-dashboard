import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  return (
  <ThemeContext.Provider value={{
    theme,
    setTheme: () => setTheme(theme === "dark" ? "light" : "dark")
  }}>
    {children}
  </ThemeContext.Provider>
  );
};

export default ThemeProvider;