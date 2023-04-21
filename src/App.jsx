import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GuidePage from "./pages/GuidePage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GuidePage" element={<GuidePage />} />
        <Route path="/DocsPage" element={<DocsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
