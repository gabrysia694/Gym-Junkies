import React, { createContext, useState, useEffect } from "react"

const ThemeContext = createContext("light")

const lightTheme = {
  background: "#fff",
  color: "#000",
  icon: "☀️",
  button: {
    buttonBgColor: "#000",
    buttonTextColor: "#fff",
  },
  navbar: {
    background: "#fff",
    color: "#000",
  },
}

const darkTheme = {
  background: "#000",
  color: "#fff",
  icon: "🌙",
  button: {
    buttonBgColor: "#fff",
    buttonTextColor: "#000",
  },
  navbar: {
    background: "#111827",
    color: "#fff",
  },
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
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme")
    
    if (savedTheme) {
      savedTheme === "light" ? setThemeName("light") : setThemeName("dark")
      savedTheme === "light" ? setTheme(lightTheme) : setTheme(darkTheme)
    }

  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext }
