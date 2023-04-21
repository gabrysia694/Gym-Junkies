import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GuidePage from "./pages/GuidePage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GuidePage" element={<GuidePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
