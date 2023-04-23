import React, { createContext, useState } from "react";

const ThemeContext = createContext("light");

const lightTheme = {
  background: "#fff",
  color: "#000",
  button: {
    background: "#000",
    color: "#fff",
  },
  icon:'☀️'
};

const darkTheme = {
  background: "#000",
  color: "#fff",
  button: {
    background: "#fff",
    color: "#000",
  },
  icon:'🌙',
};


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
