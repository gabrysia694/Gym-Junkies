import React, { createContext, useState, useLayoutEffect } from "react"

const ThemeContext = createContext("light")

const lightTheme = {
  background: "#e9e9e9", //background: "#e9e9e9",
  color: "#1f1f1f",
  icon: "☀️",
  button: {
    buttonBgColor: "#6c757d", //#6c757d
    buttonTextColor: "#1f1f1f", //#1f1f1f
  },
  navbar: {
    background: "#e9e9e9",
    color: "#1f1f1f",
  },
  hamburger:{
    color: "#1f1f1f"
  }
}

const darkTheme = {
  background: "#1f1f1f", 
  color: "#fff",
  icon: "🌙",
  button: {
    buttonBgColor: "#6c757d",
    buttonTextColor: "#fff",
  },
  navbar: {
    background: "#1f1f1f", 
    color: "#fff",
  },
  hamburger:{
    color: "#fff"
  }
}




const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const [themeName, setThemeName] = useState("light")
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme
    const newThemeName = themeName === "light" ? "dark" : "light"
    setTheme(newTheme)
    setThemeName(newThemeName)
    localStorage.setItem("selectedTheme", newThemeName)
  }


  // Retrieve theme from local storage, if available

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme")
    
    if (savedTheme) {
      savedTheme === "light" ? setThemeName("light") : setThemeName("dark")
      savedTheme === "light" ? setTheme(lightTheme) : setTheme(darkTheme)
    }

  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext }
