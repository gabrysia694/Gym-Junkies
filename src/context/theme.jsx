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
    setTheme(newTheme)
    setThemeName(themeName === "light" ? "dark" : "light")
    localStorage.setItem("selectedTheme", JSON.stringify(newTheme))
  }


  // Retrieve theme from local storage, if available
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("selectedTheme"))
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme ,themeName}}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext }
