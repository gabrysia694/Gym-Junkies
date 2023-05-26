import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GuidePage from './pages/GuidePage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import AddExercisePage from './pages/AddExercisePage';
import { ThemeContext } from './context/theme';
import PageNotFound from './components/PageNotFound';
import ContributorsPage from './pages/ContributorsPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        button: theme.button,
        link: theme.link,
      }}
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/GuidePage' element={<GuidePage />} />
        <Route path='/SchedulePage' element={<SchedulePage />} />
        <Route path='/DocsPage' element={<DocsPage />} />
        <Route path='/ContributorsPage' element={<ContributorsPage />} />
        <Route path='/AddExercisePage' element={<AddExercisePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
