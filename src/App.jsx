import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GuidePage from "./pages/GuidePage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import AddExercisePage from "./pages/AddExercisePage";
import { ThemeContext } from "./context/theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        button: theme.button,
        link: theme.link,
      }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GuidePage" element={<GuidePage />} />
        <Route path="/DocsPage" element={<DocsPage />} />
        <Route path="/AddExercisePage" element={<AddExercisePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
